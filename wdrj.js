/*
我的日记

[rewrite_local]


^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/AlookB/qx/refs/heads/main/wdrj.js

[mitm] 

hostname = buy.itunes.apple.com


*/

var objc = JSON.parse($response.body);

    objc ={
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 1579321589,
        "app_item_id": 1579321589,
        "bundle_id": "com.betterapp.mydiary",
        "application_version": "1",
        "download_id": 503922381837244217,
        "version_external_identifier": 869752606,
        "receipt_creation_date": "2024-10-22 01:56:43 Etc/GMT",
        "receipt_creation_date_ms": "1729562203000",
        "receipt_creation_date_pst": "2024-10-21 18:56:43 America/Los_Angeles",
        "request_date": "2024-10-22 01:56:44 Etc/GMT",
        "request_date_ms": "1729562204130",
        "request_date_pst": "2024-10-21 18:56:44 America/Los_Angeles",
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
                "expires_date": "2099-09-09 15:23:05 Etc/GMT",
                "expires_date_ms": "4092595200000",
                "expires_date_pst": "2099-09-09 08:23:05 America/Los_Angeles",
                "web_order_line_item_id": "320000940451526",
                "is_trial_period": "false",
                "is_in_intro_offer_period": "false",
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
            "expires_date": "2099-09-09 15:23:05 Etc/GMT",
            "expires_date_ms": "4092595200000",
            "expires_date_pst": "2099-09-09 08:23:05 America/Los_Angeles",
            "web_order_line_item_id": "320000940451526",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20860654"
        }
    ],
    "latest_receipt":"MIIUewYJKoZIhvcNAQcCoIIUbDCCFGgCAQExDzANBglghkgBZQMEAgEFADCCA7EGCSqGSIb3DQEHAaCCA6IEggOeMYIDmjAKAgEUAgEBBAIMADALAgEDAgEBBAMMATEwCwIBEwIBAQQDDAExMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICATYwDQIBDQIBAQQFAgMCvyEwDgIBAQIBAQQGAgReIoj1MA4CAQkCAQEEBgIEUDMwNTAOAgELAgEBBAYCBAdaMrswDgIBEAIBAQQGAgQz118eMBICAQ8CAQEECgIIBv5KvIPHFzkwFAIBAAIBAQQMDApQcm9kdWN0aW9uMBgCAQQCAQIEEFGSdkfZbdXG2elcCv6N5B0wHAIBBQIBAQQUH5DLZ5L8FCKgrLpS5eYXLM/29gcwHgIBCAIBAQQWFhQyMDI0LTEwLTIyVDAxOjU2OjQzWjAeAgEMAgEBBBYWFDIwMjQtMTAtMjJUMDE6NTY6NDRaMB4CARICAQEEFhYUMjAyNC0xMC0yMVQxNToyNzoxNVowHwIBAgIBAQQXDBVjb20uYmV0dGVyYXBwLm15ZGlhcnkwOAIBBgIBAQQwJJ7gTCrkCKafpdwXSth7QGIY1r98oFH3Clpo8c/ljiv6IIbJHC+QhJ/9Fg0inOyuMEgCAQcCAQEEQFMGevnalZC+QD8Xszolz6RiansjOhtUhPWffKNhLp+JcFTwZr5ASMSkHupMedt3OdosIzLstCFvYKnlE6FyDDQwggGRAgERAgEBBIIBhzGCAYMwCwICBq0CAQEEAgwAMAsCAgawAgEBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEBMAwCAga3AgEBBAMCAQEwDAICBroCAQEEAwIBADAPAgIGrgIBAQQGAgRe7gcyMBICAgavAgEBBAkCBwEjCgZiJsYwGgICBqcCAQEEEQwPMzIwMDAyMDI1NzYxNTU5MBoCAgapAgEBBBEMDzMyMDAwMjAyNTc2MTU1OTAfAgIGqAIBAQQWFhQyMDI0LTEwLTIxVDE1OjIzOjA1WjAfAgIGqgIBAQQWFhQyMDI0LTEwLTIxVDE1OjIzOjA2WjAfAgIGrAIBAQQWFhQyMDI0LTEwLTI0VDE1OjIzOjA1WjAgAgIGpgIBAQQXDBVkaWFyeS55ZWFybHkudmlwLjEwMjmggg7iMIIFxjCCBK6gAwIBAgIQfTkgCU6+8/jvymwQ6o5DAzANBgkqhkiG9w0BAQsFADB1MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTELMAkGA1UECwwCRzUxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMB4XDTI0MDcyNDE0NTAwM1oXDTI2MDgyMzE0NTAwMlowgYkxNzA1BgNVBAMMLk1hYyBBcHAgU3RvcmUgYW5kIGlUdW5lcyBTdG9yZSBSZWNlaXB0IFNpZ25pbmcxLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK0PNpvPN9qBcVvW8RT8GdP11PA3TVxGwpopR1FhvrE/mFnsHBe6r7MJVwVE1xdtXdIwwrszodSJ9HY5VlctNT9NqXiC0Vph1nuwLpVU8Ae/YOQppDM9R692j10Dm5o4CiHM3xSXh9QdYcoqjcQ+Va58nWIAsAoYObjmHY3zpDDxlJNj2xPpPI4p/dWIc7MUmG9zyeIz1Sf2tuN11urOq9/i+Ay+WYrtcHqukgXZTAcg5W1MSHTQPv5gdwF5PhM7f4UAz5V/gl2UIDTrknW1BkH7n5mXJLrvutiZSvR3LnnYON6j2C9FUETkMyKZ1fflnIT5xgQRy+BV4TTLFbIjFaUCAwEAAaOCAjswggI3MAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUGYuXjUpbYXhX9KVcNRKKOQjjsHUwcAYIKwYBBQUHAQEEZDBiMC0GCCsGAQUFBzAChiFodHRwOi8vY2VydHMuYXBwbGUuY29tL3d3ZHJnNS5kZXIwMQYIKwYBBQUHMAGGJWh0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtd3dkcmc1MDUwggEfBgNVHSAEggEWMIIBEjCCAQ4GCiqGSIb3Y2QFBgEwgf8wNwYIKwYBBQUHAgEWK2h0dHBzOi8vd3d3LmFwcGxlLmNvbS9jZXJ0aWZpY2F0ZWF1dGhvcml0eS8wgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wMAYDVR0fBCkwJzAloCOgIYYfaHR0cDovL2NybC5hcHBsZS5jb20vd3dkcmc1LmNybDAdBgNVHQ4EFgQU7yhXtGCISVUx8P1YDvH9GpPEJPwwDgYDVR0PAQH/BAQDAgeAMBAGCiqGSIb3Y2QGCwEEAgUAMA0GCSqGSIb3DQEBCwUAA4IBAQA1I9K7UL82Z8wANUR8ipOnxF6fuUTqckfPEIa6HO0KdR5ZMHWFyiJ1iUIL4Zxw5T6lPHqQ+D8SrHNMJFiZLt+B8Q8lpg6lME6l5rDNU3tFS7DmWzow1rT0K1KiD0/WEyOCM+YthZFQfDHUSHGU+giV7p0AZhq55okMjrGJfRZKsIgVHRQphxQdMfquagDyPZFjW4CCSB4+StMC3YZdzXLiNzyoCyW7Y9qrPzFlqCcb8DtTRR0SfkYfxawfyHOcmPg0sGB97vMRDFaWPgkE5+3kHkdZsPCDNy77HMcTo2ly672YJpCEj25N/Ggp+01uGO3craq5xGmYFAj9+Uv7bP6ZMIIEVTCCAz2gAwIBAgIUO36ACu7TAqHm7NuX2cqsKJzxaZQwDQYJKoZIhvcNAQELBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTIwMTIxNjE5Mzg1NloXDTMwMTIxMDAwMDAwMFowdTFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxCzAJBgNVBAsMAkc1MRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ9d2h/7+rzQSyI8x9Ym+hf39J8ePmQRZprvXr6rNL2qLCFu1h6UIYUsdMEOEGGqPGNKfkrjyHXWz8KcCEh7arkpsclm/ciKFtGyBDyCuoBs4v8Kcuus/jtvSL6eixFNlX2ye5AvAhxO/Em+12+1T754xtress3J2WYRO1rpCUVziVDUTuJoBX7adZxLAa7a489tdE3eU9DVGjiCOtCd410pe7GB6iknC/tgfIYS+/BiTwbnTNEf2W2e7XPaeCENnXDZRleQX2eEwXN3CqhiYraucIa7dSOJrXn25qTU/YMmMgo7JJJbIKGc0S+AGJvdPAvntf3sgFcPF54/K4cnu/cCAwEAAaOB7zCB7DASBgNVHRMBAf8ECDAGAQH/AgEAMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMEQGCCsGAQUFBwEBBDgwNjA0BggrBgEFBQcwAYYoaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy1hcHBsZXJvb3RjYTAuBgNVHR8EJzAlMCOgIaAfhh1odHRwOi8vY3JsLmFwcGxlLmNvbS9yb290LmNybDAdBgNVHQ4EFgQUGYuXjUpbYXhX9KVcNRKKOQjjsHUwDgYDVR0PAQH/BAQDAgEGMBAGCiqGSIb3Y2QGAgEEAgUAMA0GCSqGSIb3DQEBCwUAA4IBAQBaxDWi2eYKnlKiAIIid81yL5D5Iq8UJcyqCkJgksK9dR3rTMoV5X5rQBBe+1tFdA3wen2Ikc7eY4tCidIY30GzWJ4GCIdI3UCvI9Xt6yxg5eukfxzpnIPWlF9MYjmKTq4TjX1DuNxerL4YQPLmDyxdE5Pxe2WowmhI3v+0lpsM+zI2np4NlV84CouW0hJst4sLjtc+7G8Bqs5NRWDbhHFmYuUZZTDNiv9FU/tu+4h3Q8NIY/n3UbNyXnniVs+8u4S5OFp4rhFIUrsNNYuU3sx0mmj1SWCUrPKosxWGkNDMMEOG0+VwAlG0gcCol9Tq6rCMCUDvOJOyzSID62dDZchF
   
}

$done({body : JSON.stringify(objc)});
