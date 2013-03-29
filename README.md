taobao sdk 
======

[taobao openapi](http://open.taobao.com/doc/category_list.htm?spm=0.0.0.0.0QXifK&id=102) sdk for node

## 1 安装

npm install taobao


## 2 使用

```javascript
var taobao = require('taobao');
```

#### taobao.config

```javascript
taobao.config({
	app_key: 'xxx',				//配置app key
	app_secret: 'xxx',			//配置app secret
	sandbox: false,				//配置是否为沙箱环境
	session: ''					//配置session
});
```

#### taobao.updateSession

```javascript
taobao.updateSession('xxxxx');
```

#### 核心API</h3>
1. taobao.core.config
2. taobao.core.call
3. taobao.core.signArgs
4. taobao.core.callDefaultArg

```javascript
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
```

#### 用户API
1. taobao.userBuyerGet
2. taobao.userGet
3. taobao.userSellerGet
4. taobao.usersGet

```javascript
taobao.userBuyerGet({
	fields: 'user_id,nick,sex,buyer_credit,avatar,has_shop,vip_info'
}, function(data) {
	console.log(data);
});
```

#### 类目API
1. taobao.itemcatsAuthorizeGet
2. taobao.itemcatsGet
3. taobao.itemcatsIncrementGet
4. taobao.itempropsGet
5. taobao.itempropvaluesGet
6. taobao.topatsItemcatsGet


#### 商品API

#### 交易API

#### 评价API
