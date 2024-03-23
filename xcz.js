/*

App: 西窗烛 VIP

[rewrite_local]
^https?:\/\/lchttpapi\.xczim\.com/* url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/xcz.js

[MITM]
hostname = lchttpapi.xczim.com

*/
var ania = JSON.parse($response.body);
ania.membership = true;
ania.lifetimeMembership = true;
ania.result = true;
$done({ body: JSON.stringify(ania) });
