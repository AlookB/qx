/*
App: 读不舍手

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/dbss.js
[mitm] 
hostname = api.revenuecat.com

*/

var objc = JSON.parse($response.body);

    objc = 

{
  "request_date_ms" : 1710065048540,
  "request_date" : "2024-03-10T10:04:08Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-01-07T02:26:07Z",
    "original_application_version" : "1.0",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.valo.reader.vip2.year" : {
        "original_purchase_date" : "2024-01-07T02:27:16Z",
        "expires_date" : "2099-09-30T11:04:03Z",
        "is_sandbox" : true,
        "refunded_at" : null,
        "store_transaction_id" : "2000000544649818",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2024-03-10T10:04:03Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "com.valo.reader.vip2.year" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-03-10T10:04:03Z",
        "product_identifier" : "com.valo.reader.vip2.year",
        "expires_date" : "2099-09-30T11:04:03Z"
      }
    },
    "original_purchase_date" : "2024-01-07T02:27:16Z",
    "original_app_user_id" : "$RCAnonymousID:cb1253c7edc045bb80d88cc8b45b37ec",
    "last_seen" : "2024-03-10T01:01:04Z"
  }
}

        
$done({body : JSON.stringify(objc)});
