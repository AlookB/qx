/*
App: PureLibro

[rewrite_local]
^https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/PureLibro.js

[mitm] 
hostname = api.revenuecat.com

*/

var objc = JSON.parse($response.body);

    objc = 

{
  "request_date_ms" : 1695823444784,
  "request_date" : "2023-09-27T14:04:04Z",
  "subscriber" : {
    "last_seen" : "2023-09-27T13:53:14Z",
    "first_seen" : "2023-09-27T13:53:14Z",
    "original_application_version" : "187",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "reader.lifetime.pro" : {
        "store_transaction_id" : "190001736542492",
        "expires_date" : "2099-10-27T14:03:52Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "auto_resume_date" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-09-27T14:03:52Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "original_purchase_date" : "2023-09-27T14:03:55Z"
      }
    },
    "entitlements" : {
      "pro" : {
        "expires_date" : "2099-10-27T14:03:52Z",
        "purchase_date" : "2023-09-27T14:03:52Z",
        "product_identifier" : "reader.lifetime.pro",
        "grace_period_expires_date" : null
      }
    },
    "original_purchase_date" : "2023-09-27T13:52:21Z",
    "original_app_user_id" : "$RCAnonymousID:e2b381c2f7204bf69899c1bc1318bb90",
    "non_subscriptions" : {

    }
  }
}



$done({body : JSON.stringify(objc)});
