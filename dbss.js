/*
App: 读不舍手

[rewrite_local]
^https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/dbss.js
[mitm] 
hostname = api.revenuecat.com

*/

var objc = JSON.parse($response.body);

    objc = 

{
  "request_date" : "2024-03-10T07:19:46Z",
  "request_date_ms" : 1710055186394,
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-01-07T02:26:07Z",
    "original_application_version" : "1.0",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.valo.reader.vip2.year" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2099-12-18T01:04:17Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-09-08T01:04:18Z",
        "purchase_date" : "2022-09-08T01:04:17Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "vip2" : {
        "expires_date" : "2099-12-18T01:04:17Z",
        "purchase_date" : "2022-09-08T01:04:17Z",
        "product_identifier" : "com.valo.reader.vip2.year",
        "grace_period_expires_date" : null
      },
      "com.valo.reader.vip2.year" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-03-09T17:30:54Z",
        "product_identifier" : "com.valo.reader.vip2.year",
        "expires_date" : "2024-03-09T18:30:54Z"
      }
    },
    "original_purchase_date" : "2024-01-07T02:27:16Z",
    "original_app_user_id" : "$RCAnonymousID:cb1253c7edc045bb80d88cc8b45b37ec",
    "last_seen" : "2024-03-10T01:01:04Z"
  },
}

        
$done({body : JSON.stringify(objc)});
