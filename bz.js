/*************************************

项目名称：壁纸
软件版本：1.12.1 Time：2023.8.16
下载地址：https://is.gd/ogshV8
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/restnet\.cn\/api\/wp\/checkGolden url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Anki.js

[mitm]
hostname = restnet.cn

*************************************/


var body = JSON.parse($response.body);

body.data.vip = 1;
body.data.vipEndTime = 4102403992;
body.data.vipType =  1;


$done({ body: JSON.stringify(body) });
