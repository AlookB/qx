#!name=Proknockout 
#!desc=Proknockout VIP

[Script]
Proknockout = type=http-response, pattern=^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt, script-path=https://raw.githubusercontent.com/AlookB/qx/main/Proknockout.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% buy.itunes.apple.com
