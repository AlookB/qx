/*

App: 西窗烛 VIP

[rewrite_local]
^https?:\/\/lchttpapi\.xczim\.com/* url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/xcz.js

[MITM]
hostname = lchttpapi.xczim.com

*/



var body = $response.body;
body = body.replace(/premiumMembership\":false/g, 'premiumMembership":true');
body = body.replace(/lifetimeMembership\":false/g, 'lifetimeMembership":true');
body = body.replace(/membership\":false/g, 'membership":true');
body = body.replace(/coins\":\d+/g, 'coins":99999');
body = body.replace(/result\":false/g, 'result":true');
$done(body);
