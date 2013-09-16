taobao sdk 
======

[taobao openapi](http://open.taobao.com/doc/category_list.htm?spm=0.0.0.0.0QXifK&id=102) sdk for node

[![Build Status](https://secure.travis-ci.org/blacktail/taobao.png?branch=master)](http://travis-ci.org/blacktail/taobao)

## 1 安装

```
$ npm install taobao
```

## 2 开发&测试

```
$ cd taobao
$ npm install
```

测试

```
$ make test
```

覆盖率

```
$ make test-cov
```

## 3 使用

```javascript
var taobao = require('taobao');
taobao.config({
	app_key: 'xxx',
	app_secret: 'xxx'
});

taobao.core.call({
	method: 'taobao.areas.get',
	fields: 'id,type,name,parent_id,zip'
}, function(data) {
	console.log(data);
});
```

#### 核心API</h3>
1. [taobao.config](#taobaoconfig)
2. [taobao.updateSession](#taobaoupdatesession)
2. [taobao.core.call](#taobaocorecall)
3. taobao.core.signArgs
4. taobao.core.callDefaultArg
5. taobao.core.generateApi


#### taobao.config
###### 配置sdk的全局默认参数

```javascript
taobao.config({
	app_key: 'xxx',							//配置app key， 必需，可在调用API时传入不同值
	app_secret: 'xxx',						//配置app secret，必需, 可在调用API时传入不同值
	sandbox: false,							//配置沙箱环境，可选，默认为false, 可在调用API时传入不同值
	session: '',							//配置session,可选，可在调用API时传入不同值
	httpRealHost: null,						//配置真实环境http HOST,可选，默认为gw.api.taobao.com
	httpRealPath: '/router/rest',			//配置真实环境http Path,可选，默认为/router/rest
	httpSandHost: 'gw.api.tbsandbox.com',	//配置沙箱环境http HOST,可选，默认为gw.api.tbsandbox.com
	httpSandPath: '/router/rest',			//配置沙箱环境http Path,可选，默认为/router/rest
	httpsRealHost: 'eco.taobao.com',		//配置真实环境https HOST,可选，默认为eco.taobao.com
	httpsRealPath: '/router/rest',			//配置真实环境https Path,可选，默认为/router/rest
	httpsSandHost: 'gw.api.tbsandbox.com',	//配置沙箱环境https HOST,可选，默认为gw.api.tbsandbox.com
	httpsSandPath: '/router/rest'						//配置沙箱环境https Path,可选，默认为/
});
```
#### taobao.updateSession
###### 用于更新session配置

```javascript
taobao.updateSession('xxxxx');
```

#### taobao.core.call
###### api调用核心函数，所有api都可用此函数调用
###### taobao.core.call([httpArgs], args, callback);

```javascript
// 调用时http参数对象可整体省略
taobao.core.call({
	method: 'get',				//可选，默认为get, 各个API需要的method可能不一样，请参阅淘宝API文档
	protocol: 'http',			//可选，默认为http, 指定协议，支持http, https
	sandbox: false				//可选，默认为false, 指定是否为沙箱环境，可通过taobao.config配置默认值
}, {
	method : 'taobao.taobaoke.items.get',	//必需，api方法名
	format: 'json',							//可选，默认为json, 返回数据格式，可为json或xml
	timestamp: '2012-03-15 21:00:00',		//可选，默认为调用方法时的时间 *保持默认就好*
	app_key: 'xxxx',						//必需，可通过taobao.config配置默认值
	app_secret: 'xxxxx',					//必需，可通过taobao.config配置默认值
	v: '2.0',								//可选，默认为2.0 *保持默认就好*
	sign_method: 'md5',						//可选，默认为md5,目前sdk只支持md5 *保持默认就好*
	session: 'xxx',							//可选，可通过taobao.config配置默认值

	//参阅淘宝API文档传入各API相关的参数	
	args1: xxx,
	args2: xxx,
	...
}, function(data) {				//若format为json, 则data为解析后的JSON对象，否则data为字符串(一般为xml,取决于API)
	console.log(data)
});
```


```javascript
// https调用方式
taobao.core.call({
	protocol: 'https',			//可选，默认为http, 指定协议，支持http, https
}, {
	method : 'taobao.taobaoke.items.get',	//必需，api方法名
	//参阅淘宝API文档传入各API相关的参数	
	args1: xxx,
	args2: xxx,
	...
}, function(data) {				//若format为json, 则data为解析后的JSON对象，否则data为字符串(一般为xml,取决于API)
	console.log(data)
});
```


```javascript
// 省略http参数对象调用
taobao.core.call({
	method : 'taobao.taobaoke.items.get',	//必需，api方法名
	//参阅淘宝API文档传入各API相关的参数	
	args1: xxx,
	args2: xxx,
	...
}, function(data) {				//若format为json, 则data为解析后的JSON对象，否则data为字符串(一般为xml,取决于API)
	console.log(data)
});
```
  
  
  
### API快捷调用
### taobao.apiMethod( [httpArgs], args, callback )
###### 参数说明参考[taobao.core.call](#taobaocorecall)

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

#### 店铺API
1. taobao.sellercatsListAdd
2. taobao.sellercatsListGet
3. taobao.sellercatsListUpdate
4. taobao.shopGet
5. taobao.shopRemainshowcaseGet
6. taobao.shopUpdate
7. taobao.shopcatsListGet

#### 分销API
1. taobao.fenxiaoCooperationAudit
2. taobao.fenxiaoCooperationGet
3. taobao.fenxiaoCooperationProductcatAdd
4. taobao.fenxiaoCooperationTerminate
5. taobao.fenxiaoCooperationUpdate
6. taobao.fenxiaoDiscountAdd
7. taobao.fenxiaoDiscountUpdate
8. taobao.fenxiaoDiscountsGet
9. taobao.fenxiaoDistributorArchivesGet
10. taobao.fenxiaoDistributorItemsGet
11. taobao.fenxiaoDistributorProcuctStaticGet
12. taobao.fenxiaoDistributorsGet
13. taobao.fenxiaoGradeAdd
14. taobao.fenxiaoGradeDelete
15. taobao.fenxiaoGradeUpdate
16. taobao.fenxiaoGradesGet
17. taobao.fenxiaoLoginUserGet
18. taobao.fenxiaoOrderClose
19. taobao.fenxiaoOrderConfirmPaid
20. taobao.fenxiaoOrderCreateDealer
21. taobao.fenxiaoOrderCustomfieldUpdate
22. taobao.fenxiaoOrderMessageAdd
23. taobao.fenxiaoOrderPay
24. taobao.fenxiaoOrderRemarkUpdate
25. taobao.fenxiaoOrdersGet
26. taobao.fenxiaoProductAdd
27. taobao.fenxiaoProductGradepriceGet
28. taobao.fenxiaoProductGradepriceUpdate
29. taobao.fenxiaoProductImageDelete
30. taobao.fenxiaoProductImageUpload
31. taobao.fenxiaoProductMapAdd
32. taobao.fenxiaoProductMapDelete
33. taobao.fenxiaoProductPduUpdate
34. taobao.fenxiaoProductSkuAdd
35. taobao.fenxiaoProductSkuDelete
36. taobao.fenxiaoProductSkuUpdate
37. taobao.fenxiaoProductSkusGet
38. taobao.fenxiaoProductUpdate
39. taobao.fenxiaoProductcatAdd
40. taobao.fenxiaoProductcatDelete
41. taobao.fenxiaoProductcatUpdate
42. taobao.fenxiaoProductcatsGet
43. taobao.fenxiaoProductsGet
44. taobao.fenxiaoRequisitionsGet
45. taobao.fenxiaoTrademonitorGet
46. taobao.inventoryAdjustExternal
47. taobao.inventoryAdjustTrade
48. taobao.inventoryAuthorizeGet
49. taobao.inventoryAuthorizeRemove
50. taobao.inventoryAuthorizeRemoveall
51. taobao.inventoryAuthorizeSet
52. taobao.inventoryInitial
53. taobao.inventoryInitialItem
54. taobao.inventoryOccupyApply
55. taobao.inventoryOccupyCancel
56. taobao.inventoryQuery
57. taobao.inventoryStoreManage
58. taobao.inventoryStoreQuery
59. taobao.scitemAdd
60. taobao.scitemGet
61. taobao.scitemMapAdd
62. taobao.scitemMapDelete
63. taobao.scitemMapQuery
64. taobao.scitemOutercodeGet
65. taobao.scitemQuery
66. taobao.scitemUpdate

#### 旺旺API
1. taobao.wangwangEserviceAvgwaittimeGet
2. taobao.wangwangEserviceChatpeersGet
3. taobao.wangwangEserviceEvalsGet
4. taobao.wangwangEserviceEvaluationGet
5. taobao.wangwangEserviceGroupmemberGet
6. taobao.wangwangEserviceLoginlogsGet
7. taobao.wangwangEserviceNoreplynumGet
8. taobao.wangwangEserviceOnlinetimeGet
9. taobao.wangwangEserviceReceivenumGet
10. taobao.wangwangEserviceStreamweigthsGet

#### 淘客API
1. taobao.taobaokeCaturlGet
2. taobao.taobaokeItemsCouponGet
3. taobao.taobaokeItemsDetailGet
4. taobao.taobaokeItemsGet
5. taobao.taobaokeItemsRelateGet
6. taobao.taobaokeListurlGet
7. taobao.taobaokeReportGet
8. taobao.taobaokeShopsGet
9. taobao.taobaokeShopsRelateGet
10. taobao.taobaokeWidgetItemsConvert
11. taobao.taobaokeWidgetShopsConvert
12. taobao.taobaokeWidgetUrlConvert

#### 主动通知业务API
1. taobao.cometDiscardinfoGet
2. taobao.incrementAuthorizeMessageGet
3. taobao.incrementCustomerPermit
4. taobao.incrementCustomerStop
5. taobao.incrementCustomersGet
6. taobao.incrementItemsGet
7. taobao.incrementRefundsGet
8. taobao.incrementTradesGet
9. taobao.topatsIncrementMessagesGet

#### 工具类API
1. taobao.appipGet
2. taobao.feedbackAdd
3. taobao.kfcKeywordSearch
4. taobao.timeGet
5. taobao.topatsResultGet
6. taobao.topatsTaskDelete
7. taobao.topatsTasksGet

#### 物流宝API
1. taobao.wlbInventoryDetailGet
2. taobao.wlbInventorySync
3. taobao.wlbInventorylogQuery
4. taobao.wlbItemAdd
5. taobao.wlbItemAuthorizationAdd
6. taobao.wlbItemAuthorizationDelete
7. taobao.wlbItemAuthorizationQuery
8. taobao.wlbItemBatchQuery
9. taobao.wlbItemCombinationCreate
10. taobao.wlbItemCombinationDelete
11. taobao.wlbItemCombinationGet
12. taobao.wlbItemConsignmentCreate
13. taobao.wlbItemConsignmentDelete
14. taobao.wlbItemConsignmentPageGet
15. taobao.wlbItemDelete
16. taobao.wlbItemGet
17. taobao.wlbItemMapGet
18. taobao.wlbItemMapGetByExtentity
19. taobao.wlbItemQuery
20. taobao.wlbItemSynchronize
21. taobao.wlbItemSynchronizeDelete
22. taobao.wlbItemUpdate
23. taobao.wlbNotifyMessageConfirm
24. taobao.wlbNotifyMessagePageGet
25. taobao.wlbOrderCancel
26. taobao.wlbOrderConsign
27. taobao.wlbOrderCreate
28. taobao.wlbOrderPageGet
29. taobao.wlbOrderScheduleRuleAdd
30. taobao.wlbOrderScheduleRuleUpdate
31. taobao.wlbOrderitemPageGet
32. taobao.wlbOrderscheduleruleDelete
33. taobao.wlbOrderscheduleruleQuery
34. taobao.wlbOrderstatusGet
35. taobao.wlbOutInventoryChangeNotify
36. taobao.wlbReplenishStatistics
37. taobao.wlbSubscriptionQuery
38. taobao.wlbTmsorderQuery
39. taobao.wlbTradeorderGet
40. taobao.wlbWlborderGet

#### 直通车API
1. taobao.simbaAccountBalanceGet
2. taobao.simbaAdgroupAdd
3. taobao.simbaAdgroupAdgroupcatmatchsGet
4. taobao.simbaAdgroupCampcatmatchsGet
5. taobao.simbaAdgroupCatmatchGet
6. taobao.simbaAdgroupCatmatchUpdate
7. taobao.simbaAdgroupCatmatchforecastGet
8. taobao.simbaAdgroupChangedcatmatchsGet
9. taobao.simbaAdgroupDelete
10. taobao.simbaAdgroupDeletedcatmatchsGet
11. taobao.simbaAdgroupNonsearchpricesUpdate
12. taobao.simbaAdgroupNonsearchstatesUpdate
13. taobao.simbaAdgroupOnlineitemsvonGet
14. taobao.simbaAdgroupUpdate
15. taobao.simbaAdgroupidsChangedGet
16. taobao.simbaAdgroupidsDeletedGet
17. taobao.simbaAdgroupsChangedGet
18. taobao.simbaAdgroupsItemExist
19. taobao.simbaAdgroupsbyadgroupidsGet
20. taobao.simbaAdgroupsbycampaignidGet
21. taobao.simbaCampaignAdd
22. taobao.simbaCampaignAreaGet
23. taobao.simbaCampaignAreaUpdate
24. taobao.simbaCampaignAreaoptionsGet
25. taobao.simbaCampaignBudgetGet
26. taobao.simbaCampaignBudgetUpdate
27. taobao.simbaCampaignChanneloptionsGet
28. taobao.simbaCampaignPlatformGet
29. taobao.simbaCampaignPlatformUpdate
30. taobao.simbaCampaignScheduleGet
31. taobao.simbaCampaignScheduleUpdate
32. taobao.simbaCampaignUpdate
33. taobao.simbaCampaignsGet
34. taobao.simbaCatmatchidsChangedGet
35. taobao.simbaCatmatchidsDeletedGet
36. taobao.simbaCreativeAdd
37. taobao.simbaCreativeDelete
38. taobao.simbaCreativeUpdate
39. taobao.simbaCreativeidsChangedGet
40. taobao.simbaCreativeidsDeletedGet
41. taobao.simbaCreativesChangedGet
42. taobao.simbaCreativesGet
43. taobao.simbaCreativesRecordGet
44. taobao.simbaCustomersAuthorizedGet
45. taobao.simbaInsightCatsGet
46. taobao.simbaInsightCatsanalysisGet
47. taobao.simbaInsightCatsbaseGet
48. taobao.simbaInsightCatsforecastGet
49. taobao.simbaInsightCatsrelatedwordGet
50. taobao.simbaInsightCatstopwordGet
51. taobao.simbaInsightToplevelcatsGet
52. taobao.simbaInsightWordsanalysisGet
53. taobao.simbaInsightWordsbaseGet
54. taobao.simbaInsightWordscatsGet
55. taobao.simbaKeywordKeywordforecastGet
56. taobao.simbaKeywordidsChangedGet
57. taobao.simbaKeywordidsDeletedGet
58. taobao.simbaKeywordsChangedGet
59. taobao.simbaKeywordsDelete
60. taobao.simbaKeywordsPricevonSet
61. taobao.simbaKeywordsQscoreGet
62. taobao.simbaKeywordsRecommendGet
63. taobao.simbaKeywordsbyadgroupidGet
64. taobao.simbaKeywordsbykeywordidsGet
65. taobao.simbaKeywordscatQscoreGet
66. taobao.simbaKeywordsvonAdd
67. taobao.simbaLoginAuthsignGet
68. taobao.simbaNonsearchAdgroupplacesAdd
69. taobao.simbaNonsearchAdgroupplacesDelete
70. taobao.simbaNonsearchAdgroupplacesGet
71. taobao.simbaNonsearchAdgroupplacesUpdate
72. taobao.simbaNonsearchAlldemographicsGet
73. taobao.simbaNonsearchAllplacesGet
74. taobao.simbaNonsearchDemographicsGet
75. taobao.simbaNonsearchDemographicsUpdate
76. taobao.simbaRptAdgroupbaseGet
77. taobao.simbaRptAdgroupcreativebaseGet
78. taobao.simbaRptAdgroupcreativeeffectGet
79. taobao.simbaRptAdgroupeffectGet
80. taobao.simbaRptAdgroupkeywordbaseGet
81. taobao.simbaRptAdgroupkeywordeffectGet
82. taobao.simbaRptAdgroupnonsearchbaseGet
83. taobao.simbaRptAdgroupnonsearcheffectGet
84. taobao.simbaRptCampadgroupbaseGet
85. taobao.simbaRptCampadgroupeffectGet
86. taobao.simbaRptCampaignbaseGet
87. taobao.simbaRptCampaigneffectGet
88. taobao.simbaRptCustbaseGet
89. taobao.simbaRptCusteffectGet
90. taobao.simbaRptDemographicbaseGet
91. taobao.simbaRptDemographiceffectGet
92. taobao.simbaToolsItemsTopGet
93. taobao.topatsSimbaCampkeywordbaseGet
94. taobao.topatsSimbaCampkeywordeffectGet

#### 收藏夹API
1. taobao.favoriteAdd
2. taobao.favoriteSearch

#### 机票API
1. taobao.jipiaoPolicyGet
2. taobao.jipiaoPolicyProcess
3. taobao.jipiaoPolicystatusUpdate
4. taobao.tripJipiaoAgentItinerarySend
5. taobao.tripJipiaoAgentOrderConfirm
6. taobao.tripJipiaoAgentOrderFail
7. taobao.tripJipiaoAgentOrderFind
8. taobao.tripJipiaoAgentOrderGet 
9. taobao.tripJipiaoAgentOrderHk
10. taobao.tripJipiaoAgentOrderSearch
11. taobao.tripJipiaoAgentOrderSpecialConfirm
12. taobao.tripJipiaoAgentOrderSuccess

#### 营销API
1. taobao.marketingPromotionKfc
2. taobao.marketingPromotionsGet
3. taobao.marketingTagsGet
4. taobao.promotionActivityAdd
5. taobao.promotionActivityCancel
6. taobao.promotionActivityDelete
7. taobao.promotionActivityGet
8. taobao.promotionCouponAdd
9. taobao.promotionCouponSend
10. taobao.promotionCouponTransfer
11. taobao.promotionCoupondetailGet
12. taobao.promotionCouponsGet
13. taobao.promotionLimitdiscountDetailGet
14. taobao.promotionLimitdiscountGet
15. taobao.promotionMealGet
16. taobao.umpActivitiesGet
17. taobao.umpActivitiesListGet
18. taobao.umpActivityAdd
19. taobao.umpActivityDelete
20. taobao.umpActivityGet
21. taobao.umpActivityUpdate
22. taobao.umpDetailAdd
23. taobao.umpDetailDelete
24. taobao.umpDetailGet
25. taobao.umpDetailListAdd
26. taobao.umpDetailUpdate
27. taobao.umpDetailsGet
28. taobao.umpMbbGetbycode
29. taobao.umpMbbGetbyid
30. taobao.umpMbbsGet
31. taobao.umpMbbsListGet
32. taobao.umpRangeAdd
33. taobao.umpRangeDelete
34. taobao.umpRangeGet
35. taobao.umpToolAdd
36. taobao.umpToolDelete
37. taobao.umpToolGet
38. taobao.umpToolUpdate
39. taobao.umpToolsGet

#### 数据API
1. taobao.udpItemGet
2. taobao.udpJuhuasuanGet
3. taobao.udpShopGet

#### 酒店API
1. taobao.hotelAdd
2. taobao.hotelCityGet
3. taobao.hotelGet
4. taobao.hotelImageUpload
5. taobao.hotelMatchFeedback
6. taobao.hotelNameGet
7. taobao.hotelOrderBookingFeedback
8. taobao.hotelOrderFaceCheck
9. taobao.hotelOrderFaceDeal
10. taobao.hotelOrderGet
11. taobao.hotelOrderPayFeedback
12. taobao.hotelOrderRefundFeedback
13. taobao.hotelOrdersSearch
14. taobao.hotelRoomAdd
15. taobao.hotelRoomGet
16. taobao.hotelRoomImgDelete
17. taobao.hotelRoomImgUpload
18. taobao.hotelRoomQuotasQueryFeedback
19. taobao.hotelRoomUpdate
20. taobao.hotelRoomsSearch
21. taobao.hotelRoomsUpdate
22. taobao.hotelSoldHotelsIncrementGet
23. taobao.hotelSoldOrdersIncrementGet
24. taobao.hotelSoldTypesIncrementGet
25. taobao.hotelTypeAdd
26. taobao.hotelTypeNameGet
27. taobao.hotelUpdate
28. taobao.hotelsSearch

#### 多媒体平台API
1. taobao.pictureCategoryAdd
2. taobao.pictureCategoryGet
3. taobao.pictureCategoryUpdate
4. taobao.pictureDelete
5. taobao.pictureGet
6. taobao.pictureIsreferencedGet
7. taobao.pictureReferencedGet
8. taobao.pictureReplace
9. taobao.pictureUpdate
10. taobao.pictureUpload
11. taobao.pictureUserinfoGet

#### 子账号管理API
1. taobao.sellercenterRoleAdd
2. taobao.sellercenterRoleInfoGet
3. taobao.sellercenterRolemembersGet
4. taobao.sellercenterRolesGet
5. taobao.sellercenterSubuserPermissionsRolesGet
6. taobao.sellercenterSubusersGet
7. taobao.sellercenterUserPermissionsGet
8. taobao.subuserDepartmentAdd
9. taobao.subuserDepartmentDelete
10. taobao.subuserDepartmentUpdate
11. taobao.subuserDepartmentsGet
12. taobao.subuserDutyAdd
13. taobao.subuserDutyDelete
14. taobao.subuserDutyUpdate
15. taobao.subuserDutysGet
16. taobao.subuserEmployeeAdd
17. taobao.subuserEmployeeUpdate
18. taobao.subuserFullinfoGet
19. taobao.subuserInfoUpdate
20. taobao.subusersGet

#### 服务平台API
1. taobao.fuwuSaleLinkGen
2. taobao.vasOrderSearch
3. taobao.vasSubscSearch
4. taobao.vasSubscribeGet

#### 退款API
1. taobao.refundGet
2. taobao.refundMessageAdd
3. taobao.refundMessagesGet
4. taobao.refundRefuse
5. taobao.refundsApplyGet
6. taobao.refundsReceiveGet
7. taobao.topatsRefundsReceiveGet

#### 关联推荐API
1. taobao.categoryrecommendItemsGet
2. taobao.itemrecommendItemsGet
3. taobao.shoprecommendItemsGet
4. taobao.shoprecommendShopsGet
5. taobao.userrecommendItemsGet

#### 组件API
1. taobao.widgetAppapiruleCheck
2. taobao.widgetItempanelGet
3. taobao.widgetLoginstatusGet

#### 支付宝API
1. taobao.alipayEbppBillAdd
2. taobao.alipayEbppBillGet
3. taobao.alipayEbppBillPay
4. taobao.alipayEbppBillPayurlGet
5. taobao.alipayMicropayOrderConfirmpayurlGet
6. taobao.alipayMicropayOrderDirectPay
7. taobao.alipayMicropayOrderFreeze
8. taobao.alipayMicropayOrderFreezepayurlGet
9. taobao.alipayMicropayOrderGet
10. taobao.alipayMicropayOrderUnfreeze
11. taobao.alipayPointBudgetGet
12. taobao.alipayPointOrderAdd
13. taobao.alipayPointOrderGet
14. taobao.alipaySystemOauthToken
15. taobao.alipayTopatsUserAccountreportGet
16. taobao.alipayUserAccountFreezeGet
17. taobao.alipayUserAccountGet
18. taobao.alipayUserContractGet
19. taobao.alipayUserGet
20. taobao.alipayUserTradeSearch

#### 天猫精品库API
1. taobao.spmeffectGet
2. taobao.tmallItemsDiscountSearch
3. taobao.tmallSelectedItemsSearch
4. taobao.tmallTemaiItemsSearch
5. taobao.tmallTemaiSubcatsSearch

#### 聚石塔API
1. taobao.rdsDbCreate
2. taobao.rdsDbDelete
3. taobao.rdsDbGet

#### 旅游度假API
1. taobao.travelItemsareaGet

#### 彩票API
1. taobao.caipiaoGoodsInfoGet
2. taobao.caipiaoGoodsInfoInput
3. taobao.caipiaoLotterySend
4. taobao.caipiaoLotterySendbynick
5. taobao.caipiaoLotterytypesGet
6. taobao.caipiaoPresentItemsGet
7. taobao.caipiaoPresentStatGet
8. taobao.caipiaoPresentWinItemsGet
9. taobao.caipiaoShopInfoInput
10. taobao.caipiaoSignstatusCheck

#### 账务API
1. taobao.billAccountsGet
2. taobao.billBillGet
3. taobao.billBillsGet
4. taobao.billBookBillGet
5. taobao.billBookBillsGet


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
