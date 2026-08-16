<div align="center">

# 🐿️ QX Rules

**优雅老师自用小仓库 · Quantumult X 解锁 & 去广告规则集**

![License](https://img.shields.io/badge/license-MIT-green) ![Platform](https://img.shields.io/badge/platform-Quantumult_X-black) ![Update](https://img.shields.io/badge/update-2026--08-blue)

> ⚠️ 仅供学习交流使用,请于下载后 24 小时内删除,禁止用于商业用途。

</div>

---

## 📖 简介

本仓库是优雅老师的 **Quantumult X(圈 X)** 自用规则集,包含:

- 🔓 **App 解锁脚本** — 内购/会员响应改写,解锁 VIP 功能
- 🚫 **去广告规则** — 小程序 & App 广告屏蔽
- 🎵 **流媒体增强** — Spotify 等增强脚本

---

## 🎯 规则订阅

| 规则 | 订阅地址 | 说明 |
|---|---|---|
| 🐿️ 解锁合集 | `https://raw.githubusercontent.com/AlookB/qx/main/hj.yaml` | 各类 App VIP 解锁 |
| 🚫 去广告合集 | `https://raw.githubusercontent.com/AlookB/qx/main/Ad.yaml` | 小程序 & App 去广告 |

**Quantumult X 添加方法**:`配置 → 引用(订阅) → 添加` → 粘贴上方订阅地址。

---

## 🔓 解锁清单

| App | 功能 | 规则文件 |
|---|---|---|
| 🗓️ 滴答清单 | Pro 会员(至 2099) | `hj.yaml` |
| 📝 小日常 | VIP | `hj.yaml` + `xxg.js` |
| 🏮 西窗烛 | VIP | `hj.yaml` + `xcz.js` |
| 🎵 Spotify | 增强(艺术家页/专辑/Proto) | `hj.yaml` |
| 🖼️ 边框水印大师 | VIP | `hj.yaml` + `bksy1.js` / `bksyds.js` |
| 💬 微信 | 屏蔽 URL 解锁 | `hj.yaml` |
| 📖 读不舍手 | VIP | `dbss.js` |
| 🥊 Knockout | AI VIP 内购解锁 | `Prokout.js` |

---

## 🚫 去广告清单

| 目标 | 说明 | 规则文件 |
|---|---|---|
| 🚌 乘车码小程序 | 去打车广告卡片 | `Ad.yaml` |
| 📶 联通营业厅小程序 | 去广告 | `Ad.yaml` |
| 📰 IT之家 | 去新闻流广告 | `Ad.yaml` |
| 🖼️ 边框水印大师 | 去 Banner 广告 | `Ad.yaml` |

---

## 📁 目录结构

```
.
├── hj.yaml          # 🐿️ 解锁合集(主订阅)
├── Ad.yaml          # 🚫 去广告合集(主订阅)
├── Prokout.js       # Knockout AI VIP 内购解锁
├── bksy1.js         # 边框水印大师 VIP(混淆版)
├── bksyds.js        # 边框水印大师 VIP(明文版)
├── dbss.js          # 读不舍手 VIP(RevenueCat 改写)
├── xcz.js           # 西窗烛 VIP
├── xxg.js           # 小日常 VIP
└── icon/            # 图标资源
```

---

## 🛠️ 使用说明

### 单文件安装(以解锁合集为例)

**方式一:订阅引用(推荐)**

```
Quantumult X → 配置 → 引用 → 添加:
https://raw.githubusercontent.com/AlookB/qx/main/hj.yaml
```

**方式二:手动复制**

将 `hj.yaml` 内容复制到 `[rewrite_local]` / `[mitm]` 对应段落,并开启 **MitM**、安装信任证书。

> 💡 MitM 证书需在设置中信任,否则 HTTPS 改写不生效。

---

## ⚠️ 免责声明

1. 本仓库所有内容仅供 **学习交流** 使用,请于下载后 **24 小时内删除**
2. 解锁脚本通过响应改写实现,仅用于技术研究,请支持正版
3. 使用本仓库内容造成的任何后果由使用者自行承担
4. 如侵犯您的权益,请提 Issue,将第一时间删除

---

## 📜 更新日志

### 2026-08
- ✨ 仓库全新改版,新增完整 README 与规则说明

---

<div align="center">

**Made with ❤️ by 优雅老师**

[![GitHub](https://img.shields.io/badge/GitHub-AlookB-181717?logo=github)](https://github.com/AlookB)

</div>
