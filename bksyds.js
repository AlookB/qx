rewrite_local]

^https:\/\/photoby\.hasmash\.com\/auth\/member url script-response-body https://raw.githubusercontent.com/AlookB/qx/refs/heads/main/Prokout.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "message": "成功!",
  "result": {
    "uid": "efe376d39b4f4385a45cb19ae0c8c13b",
    "phone": "18888888888",
    "memberExpire": 4092610661000
  },
  "code": "00000"
}

$done({body : JSON.stringify(objc)});
