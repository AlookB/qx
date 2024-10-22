/*************************************

项目名称：My Diary 解锁订阅
下载地址：https://t.cn/A6WCxcRy
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/AlookB/qx/refs/heads/main/wdrj.js


[mitm]
hostname = buy.itunes.apple.com

*************************************/

var response = JSON.parse($response.body);

// 修改订阅状态为永久订阅
response.receipt.in_app.forEach(item => {
  item.expires_date = "2099-12-31 23:59:59 Etc/GMT";
  item.expires_date_ms = "4102415999000";
  item.is_trial_period = "false";
  item.is_in_intro_offer_period = "false";
  item.in_app_ownership_type = "PURCHASED";
});

response.latest_receipt_info.forEach(item => {
  item.expires_date = "2099-12-31 23:59:59 Etc/GMT";
  item.expires_date_ms = "4102415999000";
  item.is_trial_period = "false";
  item.is_in_intro_offer_period = "false";
  item.in_app_ownership_type = "PURCHASED";
});

// 修改自动续订信息
response.pending_renewal_info.forEach(item => {
  item.auto_renew_status = "1"; // 设置自动续订开启
});

// 返回修改后的数据
$done({body: JSON.stringify(response)});
