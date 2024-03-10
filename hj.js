/*
优雅老师自用App😊

[rewrite_local]
#西窗烛 VIP
^https?:\/\/lchttpapi\.xczim\.com url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/xcz.js

#小习惯 VIP
^https?:\/\/xianbeikeji\.com\/daily\/app\/user\/query$

#PureLibro VIP
^https://api.revenuecat.com/v1/(receipts|subscribers)/*

#读不舍手


[MITM]
hostname = api.revenuecat.com,lchttpapi.xczim.com,xianbeikeji.com,


*/
