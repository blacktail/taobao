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
	app_key: 'xxx',							//配置app key， 必需
	app_secret: 'xxx',						//配置app secret，必需
	sandbox: false,							//配置是否为沙箱环境，可选，默认为false,
	session: '',							//配置session,可选，只有需用户授权的api才须配置此参数
	httpRealHost: null,						//配置真实环境http HOST,可选，默认为gw.api.taobao.com
	httpRealPath: '/router/rest',			//配置真实环境http Path,可选，默认为/router/rest
	httpSandHost: 'gw.api.tbsandbox.com',	//配置沙箱环境http HOST,可选，默认为gw.api.tbsandbox.com
	httpSandPath: '/router/test',			//配置沙箱环境http Path,可选，默认为/router/rest
	httpsRealHost: 'eco.taobao.com',		//配置真实环境https HOST,可选，默认为eco.taobao.com
	httpsRealPath: '/router/rest',			//配置真实环境https Path,可选，默认为/router/rest
	httpsSandHost: 'gw.api.tbsandbox.com',	//配置沙箱环境https HOST,可选，默认为gw.api.tbsandbox.com
	httpsSandPath: '/'						//配置沙箱环境https Path,可选，默认为/
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
1. taobao.aftersaleGet
2. taobao.itemAdd
3. taobao.itemAnchorGet
4. taobao.itemBsellerAdd
5. taobao.itemCsellerAdd
6. taobao.itemDelete
7. taobao.itemGet
8. taobao.itemImgDelete
9. taobao.itemImgUpload
10. taobao.itemJointImg
11. taobao.itemJointPropimg
12. taobao.itemPriceUpdate
13. taobao.itemPropimgDelete
14. taobao.itemPropimgUpload
15. taobao.itemQuantityUpdate
16. taobao.itemRecommendAdd
17. taobao.itemRecommendDelete
18. taobao.itemSkuAdd
19. taobao.itemSkuDelete
20. taobao.itemSkuGet
21. taobao.itemSkuPriceUpdate
22. taobao.itemSkuUpdate
23. taobao.itemSkusGet
24. taobao.itemTemplatesGet
25. taobao.itemUpdate
26. taobao.itemUpdateDelisting
27. taobao.itemUpdateListing
28. taobao.itemsCustomGet
29. taobao.itemInventoryGet
30. taobao.itemsListGet
31. taobao.itemsOnsaleGet
32. taobao.productAdd
33. taobao.productGet
34. taobao.productImgDelete
35. taobao.productImgUpload
36. taobao.productPropimgDelete
37. taobao.productPropimgUpload
38. taobao.productUpdate
39. taobao.productsGet
40. taobao.productsSearch
41. taobao.skusCustomGet
42. taobao.skusQuantityUpdate
43. taobao.topatsItemsAllGet
44. taobao.umpPromotionGet
45. taobao.brandcatControlGet
46. taobao.brandcatSalesproGet
47. taobao.productSpecAdd
48. taobao.productSpecGet
49. taobao.productSpecPicUpload
50. taobao.productSpecsGet

#### 交易API
1. taobao.topatsTradesFullinfoGet
2. taobao.topatsTradesSold.
3. taobao.tradeAmountGet
4. taobao.tradeClose
5. taobao.tradeConfirmfeeGet
6. taobao.tradeFullinfoGet
7. taobao.tradeGet
8. taobao.tradeMemoAdd
9. taobao.tradeMemoUpdate
10. taobao.tradeOrderskuUpdate
11. taobao.tradePostageUpdate
12. taobao.tradeReceivetimeDelay
13. taobao.tradeShippingaddressUpdate
14. taobao.tradeSnapshotGet
15. taobao.tradesSoldGet
16. taobao.tradesSoldIncrementGet
17. taobao.tradesSoldIncrementvGet

#### 评价API
1. taobao.traderateAdd
2. taobao.traderateExplainAdd
3. taobao.traderateListAdd
4. taobao.traderatesGet

#### 物流API
1. taobao.alibabaLogisticsOrderCance
2. taobao.alibabaLogisticsOrderCharg
3. taobao.alibabaLogisticsOrderConsi
4. taobao.alibabaLogisticsRouteQuery
5. taobao.areasGet
6. taobao.deliveryTemplateAdd
7. taobao.deliveryTemplateDelete
8. taobao.deliveryTemplateGet
9. taobao.deliveryTemplateUpdate
10. taobao.deliveryTemplatesGet
11. taobao.logisticsAddressAdd
12. taobao.logisticsAddressModify
13. taobao.logisticsAddressRemove
14. taobao.logisticsAddressSearch
15. taobao.logisticsCompaniesGet
16. taobao.logisticsConsignResend
17. taobao.logisticsDummySend
18. taobao.logisticsOfflineSend
19. taobao.logisticsOnlineCancel
20. taobao.logisticsOnlineConfirm
21. taobao.logisticsOnlineSend
22. taobao.logisticsOrdersDetailGet
23. taobao.logisticsOrdersGet
24. taobao.logisticsOrderstorePush
25. taobao.logisticsOrdertracePush
26. taobao.logisticsPartnersGet
27. taobao.logisticsTraceSearch
28. taobao.topatsDeliverySend


## Q & A
1. *为什么设置sandbox为true时，获取返回数据时发生错误(比如404之类)，而在真实环境中正常？*
	- 解决方案
		1. 淘宝sandbox API接口地址发生变化, 可通过taobao.config配置最新地址
			- 配置项：httpSandHost, httpSandPath, httpsSandHost, httpsSandPath
		2. 淘宝sandbox未实现正在调用的API,请设置sandbox为false


2. *taobao.core.call与具体类别的API函数是什么关系？*
	- taobao.core.call是底层接口，因此任何使用具体API函数的地方都可用taobao.core.call来替代
	- 像taobao.itemcatsAuthorizeGet这样的具体API函数，可以认为是taobao.core.call的快捷方法，方便开发者调用
	- sdk一直在更新，有些api方法还没包含在sdk中，这时只能通过taobao.core.call来进行调用


## LICENSE

```
The MIT License (MIT)
Copyright (c) 2013 blacktail <mr.zhangping@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```