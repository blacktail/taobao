taobao
======

node implementations for taobao open api

用法：

1 安装
npm install taobao

2 使用

<code>
var taobao = require('taobao');
</code>

<h3>taobao.config</h3>
<code>
taobao.config({
	app_key: 'xxx',				//配置app key
	app_secret: 'xxx',			//配置app secret
	sandbox: false				//配置是否为沙箱环境
});
</code>

<h3>taobao.updateSession</h3>
<code>
taobao.updateSession('6101e23eb4c2155676b33cbf44866971819903c86eb9a0945892274');
</code>

<h3>核心API</h3>
<ul>
	<li>taobao.core.config</li>
	<li>taobao.core.call</li>
	<li>taobao.core.signArgs</li>
	<li>taobao.core.callDefaultArg</li>
</ul>
<code>
taobao.core.call({
	method: 'get',				//指定http method, 各个API不一样，请参阅淘宝API文档
	protocol: 'http'			//指定协议，支持http, https
}, {
	 method : 'taobao.taobaoke.items.get',	//api方法
	 format: 'json',			//返回数据格式，可为json或xml
     
     //参阅淘宝API文档传入各API相关的参数
	 args1: xxx,
	 args2: xxx,
	 ...
}, function(data) {				//若format为json, 则data为解析后的JSON对象，否则data为字符串(一般为xml,取决于API)
	console.log(data)
});
</code>

<h3>用户API</h3>
<ul>
	<li>taobao.userBuyerGet</li>
	<li>taobao.userGet</li>
	<li>taobao.userSellerGet</li>
	<li>taobao.usersGet</li>
</ul>
<code>
taobao.userBuyerGet({
	fields: 'user_id,nick,sex,buyer_credit,avatar,has_shop,vip_info'
}, function(data) {
	console.log(data);
});
</code>


