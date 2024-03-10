/*
优雅老师自用App😊

[rewrite_local]
#读不舍手
^https?:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/dbss.js

#西窗烛 VIP
^https?:\/\/lchttpapi\.xczim\.com url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/xcz.js

#小习惯 VIP
^https?:\/\/xianbeikeji\.com\/daily\/app\/user\/query$ url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/xxg.js

#PureLibro VIP
^https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/PureLibro.js



[MITM]
hostname = api.revenuecat.com,lchttpapi.xczim.com,xianbeikeji.com,


*/
