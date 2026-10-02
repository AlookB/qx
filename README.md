<div align="center">

# 🐿️ QX Rules

**Quantumult X 自用规则集 · App 解锁 + 去广告**

![Platform](https://img.shields.io/badge/Quantumult_X-iOS-black?logo=apple&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/AlookB/qx?label=%E6%9B%B4%E6%96%B0&color=blue)
![Use](https://img.shields.io/badge/%E7%94%A8%E9%80%94-%E4%BB%85%E4%BE%9B%E5%AD%A6%E4%B9%A0%E4%BA%A4%E6%B5%81-orange)

<sub>仅供学习交流 · 下载后请于 24 小时内删除 · 禁止商业用途</sub>

</div>

---

## 📦 订阅地址

| 合集 | 订阅地址 | 内容 |
| --- | --- | --- |
| 🐿️ 解锁合集 | `https://raw.githubusercontent.com/AlookB/qx/main/hj.yaml` | App 内购 / 会员解锁 |
| 🚫 去广告合集 | `https://raw.githubusercontent.com/AlookB/qx/main/Ad.yaml` | 小程序 & App 去广告 |

```text
Quantumult X → 配置 → 引用 → 添加 → 粘贴上方地址 → 开启 MitM 并信任证书
```

---

## 🔓 解锁清单

| 应用 | 效果 | 规则文件 |
| --- | --- | --- |
| 🗓️ 滴答清单 | Pro 会员（有效期至 2099） | `hj.yaml` |
| 📝 小日常 | VIP | `hj.yaml` + `xxg.js` |
| 🏮 西窗烛 | VIP | `hj.yaml` + `xcz.js` |
| 🎵 Spotify | 艺术家页 / 专辑 / Proto 增强 | `hj.yaml` |
| 🖼️ 边框水印大师 | VIP | `hj.yaml` + `bksy1.js` |
| 💬 微信 | 屏蔽 URL 解锁 | `hj.yaml` |
| 📖 读不舍手 | VIP（RevenueCat 改写） | `dbss.js` |
| 🥊 Knockout | AI VIP 内购解锁 | `Prokout.js` |

> Spotify 脚本引用自 [app2smile/rules](https://github.com/app2smile/rules)，微信解锁引用自 [zZPiglet/Task](https://github.com/zZPiglet/Task)。
> `dbss.js`、`Prokout.js` 为独立脚本，未包含在主订阅中，需在 `[rewrite_local]` 单独引用。

## 🚫 去广告清单

| 目标 | 效果 | 规则文件 |
| --- | --- | --- |
| 🚌 乘车码小程序 | 移除实时公交页打车广告卡片 | `Ad.yaml` |
| 📶 联通营业厅小程序 | 拦截推广接口 | `Ad.yaml` |
| 📰 IT之家 | 移除新闻流广告 | `Ad.yaml` |
| 🖼️ 边框水印大师 | 移除 Banner 广告 | `Ad.yaml` |

---

## 📁 目录结构

```text
.
├── hj.yaml        # 🐿️ 解锁合集（主订阅）
├── Ad.yaml        # 🚫 去广告合集（主订阅）
├── bksy1.js       # 边框水印大师 VIP（混淆版）
├── bksyds.js      # 边框水印大师 VIP（明文版）
├── dbss.js        # 读不舍手 VIP
├── Prokout.js     # Knockout AI VIP 内购解锁
├── xcz.js         # 西窗烛 VIP
├── xxg.js         # 小日常 VIP
└── icon/          # 图标资源
```

---

## 🛠️ 使用说明

**方式一 · 订阅引用（推荐）**：添加上方订阅地址，脚本随仓库自动更新。

**方式二 · 手动复制**：将 `hj.yaml` / `Ad.yaml` 内容并入配置的 `[rewrite_local]`、`[mitm]` 段落；独立脚本单独写入 `[rewrite_local]`。

> ⚠️ 必须开启 **MitM** 并在系统设置中信任证书，否则 HTTPS 改写不生效。

---

## ⚠️ 免责声明

1. 本仓库所有内容仅供 **学习交流**，请于下载后 **24 小时内删除**。
2. 脚本通过响应改写实现，仅用于技术研究，请支持正版。
3. 使用本仓库内容造成的任何后果由使用者自行承担。
4. 如侵犯您的权益，请提 Issue，将第一时间删除。

---

<div align="center">

**Made with ❤️ by 优雅老师**

[![GitHub](https://img.shields.io/badge/GitHub-AlookB-181717?logo=github&logoColor=white)](https://github.com/AlookB)

</div>
