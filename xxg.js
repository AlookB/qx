/*
App：小习惯 VIP

[rewrite_local]
^https?:\/\/xianbeikeji\.com\/daily\/app\/user\/query$ url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/xxg.js

[MITM]
hostname = xianbeikeji.com

*/

var ania = JSON.parse($response.body);
ania.data.userInfo.vipFlag = 4;
$done({ body: JSON.stringify(ania) });
