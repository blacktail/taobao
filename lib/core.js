var http = require('http'),
	moment = require('moment'),
	_ = require('underscore'),
	helper = require('./helper'),
	querystring = require('querystring'),
	url = require('url'),
	apierror = require('./error');

var cfg = {
	httpRealHost: 'gw.api.taobao.com',
	httpRealPath: '/router/rest',
	httpSandHost: 'gw.api.tbsandbox.com',
	httpSandPath: '/router/rest',
	httpsRealHost: 'eco.taobao.com',
	httpsRealPath: '/router/rest',
	httpsSandHost: 'gw.api.tbsandbox.com',
	httpsSandPath: '/router/rest',
	app_key: '',
	app_secret: '',
	sandbox: false,
	session: ''
};

var core = module.exports = {
	error: apierror,

	config: function(config) {
		_.extend(cfg, config);
	},

	/**
	 * low-level for call tao bao api
	 * 
	 * @param {Object}
	 *            httpArgs http arguments for call api
	 * <pre>
	 * {
	 *   method : 'get',			//http method - optional, default is get
	 *   protocol: 'http'			//http protocol(http or https) - optional, default is http
	 *   sandbox: false				//whether to call api in sandbox - optional, default is false
	 * }
	 * </pre>
	 *
	 * @param {Object}
	 *            args api args need to call taobao api
	 * <pre>
	 * {
	 *   // system arguments
	 *   method : 'taobao.taobaoke.items.get',		//api method - required
	 *   timestamp: '2012-03-15 21:00:00',			//time stamp - optional, default is the time when call the api
	 *   format: 'json',							//the result format - optional, default is json
	 *   app_key: 'xxxx',							//app key - required, config use init method or pass through here
	 *   app_secret: 'xxxxx',						//app secret - required, config use init method or pass through here
	 *   v: '2.0',									//api version - optional, default is 2.0
	 *   sign_method: 'md5'							//sign method - optional, default is md5, now only support md5
	 *   
	 *   // method specific arguments
	 *
	 * }
	 * </pre>
	 *
	 * @param {Function}
	 *            callback function with parameters to get the result
	 * 
	 * @returns {Array[search...]}
	 */
	call: function (httpArgs, args, callback) {
		//compatiple with call (args, callback) signature
		if (arguments.length == 2) {
			callback = args;	
			args = httpArgs;
			httpArgs = {};
		}

		args.method = args.method;
		args.timestamp = args.timestamp || moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
		args.format = args.format || 'json';
		args.app_key = args.app_key || cfg.app_key;
		args.app_secret = args.app_secret || cfg.app_secret;
		args.v = args.v || '2.0';
		args.sign_method = 'md5';
		args.session = args.session || cfg.session;

		if (!args.session) {
			delete args.session;
		}

		args.sign = this.signArgs(args);

		var	params = '',
			app_secret = args.app_secret;

		delete args.app_secret;
		params = querystring.stringify(args);

		var host, path, protocol, httpMethod, sandbox;
		protocol = (httpArgs.protocol || 'http').toLowerCase();
		httpMethod = (httpArgs.method || 'get').toLowerCase();
		sandbox = httpArgs.sandbox === true ? true : cfg.sandbox === true;

		switch (protocol) {			
			case 'https':
				host = sandbox ? cfg.httpsSandHost : cfg.httpsRealHost;
				path = sandbox ? cfg.httpsSandPath : cfg.httpsRealPath;
				break;
			default:
				host = sandbox ? cfg.httpSandHost : cfg.httpRealHost;
				path = sandbox ? cfg.httpSandPath : cfg.httpsRealPath;
				break;
		}
		
		var protocolProxy = protocol == 'https' ? require('https') : require('http');
		var resData = '',
			headers = {};

		if (httpMethod == 'post') {
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
		}

		var reqOpts = {
			method: httpMethod,
			host: host,
			headers:headers,
			path: path + (httpMethod == 'get' ? '?' + params : '')
		};

		var req = protocolProxy.request(reqOpts, function(res) {
			if (res.statusCode != 200) {
				callback && callback({error_response: {code: apierror.NETERROR.code, msg: apierror.NETERROR.msg, statusCode: res.statusCode}});
			} else {
				res.setEncoding('utf-8');
				res.on('data', function(chunk){
					resData += chunk;
				});
				res.on('end', function() {
					try {
						callback && callback(JSON.parse(resData));
					} catch (e) {
						callback && callback(resData);
					}
				})
			}
		});

		req.on('error', function(e) {
			callback && callback({error_response: {code: apierror.NETERROR.code, msg: e.message || apierror.NETERROR.msg}});
		});

		if (httpMethod == 'post') {
			req.write(params);
		}

		req.end();
	},

	signArgs: function(args) {
		var argArr = [];

		for (var argName in args) {
			if (argName != 'sign' && argName != 'app_secret') {
				argArr.push(argName + args[argName]);
			}
		}

		var c = args.app_secret + argArr.sort().join('') + args.app_secret;

		return helper.crypt(c, 'md5').toUpperCase();
	},

	callDefaultArg: function(defArg, httpArgs, args, callback) {
		defArg = defArg || {};
		httpArgs = httpArgs || {};

		if (_.isFunction(httpArgs)) {
			callback = httpArgs;
			this.call(defArg, callback);
		} else if (_.isFunction(args)) {
			callback = args;
			args = httpArgs;
			_.extend(defArg, args);
			this.call(defArg, callback);
		} else if (_.isFunction(callback)) {
			_.extend(defArg, args);
			this.call(httpArgs, defArg, callback);
		} else {
			throw apierror.ARGINVALID;
		}
	},

	generateApi: function(apiArr, defaultNamespace) {
		apiArr = apiArr || [];
		var api = {},
			dotReg = /\.([a-z])/ig,
			upperRep = function(all, letter) {
				return letter.toUpperCase();
			};

		_.each(apiArr, function(apiObj) {
			var method, defaultArg = {}, namespace = defaultNamespace || 'taobao';

			if (typeof apiObj == 'string') {
				method = apiObj;
			} else {
				method = apiObj.method;
				namespace = apiObj.namespace || defaultNamespace || 'taobao';
				defaultArg = apiObj.defaultArg;
			}

			var methodName = (namespace == 'taobao' ? method : namespace + '.' + method).replace(dotReg, upperRep);

			api[methodName] = function (httpArgs, args, callback) {
				var defArg = _.extend({
					method: namespace + '.' + method
				}, defaultArg);
				
				core.callDefaultArg(defArg, httpArgs, args, callback);
			};
		});

		return api;
	},

	getConfig: function () {
		return cfg;
	}
};
