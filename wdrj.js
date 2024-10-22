/*

App：我的日记

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/AlookB/qx/main/Proknockout.js

[mitm] 

hostname = buy.itunes.apple.com

*/


var objc = JSON.parse($response.body);

    objc = 
{
{
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 1579321589,
        "app_item_id": 1579321589,
        "bundle_id": "com.betterapp.mydiary",
        "application_version": "1",
        "download_id": 503922381837244217,
        "version_external_identifier": 869752606,
        "receipt_creation_date": "2024-10-21 15:47:57 Etc/GMT",
        "receipt_creation_date_ms": "1729525677000",
        "receipt_creation_date_pst": "2024-10-21 08:47:57 America/Los_Angeles",
        "request_date": "2024-10-21 15:47:58 Etc/GMT",
        "request_date_ms": "1729525678509",
        "request_date_pst": "2024-10-21 08:47:58 America/Los_Angeles",
        "original_purchase_date": "2024-10-21 15:27:15 Etc/GMT",
        "original_purchase_date_ms": "1729524435000",
        "original_purchase_date_pst": "2024-10-21 08:27:15 America/Los_Angeles",
        "original_application_version": "1",
        "in_app": [
            {
                "quantity": "1",
                "product_id": "diary.yearly.vip.1029",
                "transaction_id": "320002025761559",
                "original_transaction_id": "320002025761559",
                "purchase_date": "2024-10-21 15:23:05 Etc/GMT",
                "purchase_date_ms": "1729524185000",
                "purchase_date_pst": "2024-10-21 08:23:05 America/Los_Angeles",
                "original_purchase_date": "2024-10-21 15:23:06 Etc/GMT",
                "original_purchase_date_ms": "1729524186000",
                "original_purchase_date_pst": "2024-10-21 08:23:06 America/Los_Angeles",
                "expires_date": "2099-09-09 06:06:06 Etc/GMT",
                "expires_date_ms": "4092588366000",
                "expires_date_pst": "2024-10-24 08:23:05 America/Los_Angeles",
                "web_order_line_item_id": "320000940451526",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "true",
                "in_app_ownership_type": "PURCHASED"
            }
        ]
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "product_id": "diary.yearly.vip.1029",
            "transaction_id": "320002025761559",
            "original_transaction_id": "320002025761559",
            "purchase_date": "2024-10-21 15:23:05 Etc/GMT",
            "purchase_date_ms": "1729524185000",
            "purchase_date_pst": "2024-10-21 08:23:05 America/Los_Angeles",
            "original_purchase_date": "2024-10-21 15:23:06 Etc/GMT",
            "original_purchase_date_ms": "1729524186000",
            "original_purchase_date_pst": "2024-10-21 08:23:06 America/Los_Angeles",
            "expires_date": "2099-09-09 06:06:06 Etc/GMT",
            "expires_date_ms": "4092588366000",
            "expires_date_pst": "2024-10-24 08:23:05 America/Los_Angeles",
            "web_order_line_item_id": "320000940451526",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "true",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20860654"
        }
    ],
    "latest_receipt":"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

};



$done({body : JSON.stringify(objc)});
