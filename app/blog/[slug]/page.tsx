'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageContext'

// 博客文章数据
const posts: Record<string, {
  title: string
  titleEn: string
  date: string
  content: string
  contentEn: string
  tags: string[]
}> = {
  'ai-solopreneur': {
    title: '国企离职：我是如何用AI搭建"自我进化"的一人公司的？',
    titleEn: 'How I Built an AI-Powered Self-Evolving Solopreneur After Leaving the SOE',
    date: '2026-03-07',
    tags: ['AI', '创业', '国企', 'Solopreneur'],
    content: `
## 2026年，我决定离开体制

2026年的第一天，我决定离开体制。在体制内的三年，我什么都没有带走，反而感觉被剥夺了许多：对生活的热情、对未来的憧憬，以及最核心的创造力与生命力。

最后支撑我走出围墙的，不是补偿金，而是一套在长期精神挣扎与迫切自救中规划出来的**"生产力"全新思考**。

在老一辈眼里，辞职意味着**"断了收入"**。周围的人都在劝我：大环境不好，很多人失业，你的坑位多少人抢着做。但我内心很清楚，我不适合那个环境。**你让一只小鸟在陆地上和小猫小狗赛跑，它怎么跑得赢？**当小鸟一次次扑腾翅膀想要起飞，周围只会有人相劝：飞起来很危险。人的一生也就三万天左右，我还是想去尝试一下。

在我的逻辑里，这次离开叫**拿回生产工具的所有权**。在国企，你是系统里的零件，每天重复着同样的八卦与流言，收益取决于你的"位置"而非创造力；更关键的是，在那里你几乎无法使用任何**"杠杆"**。

> **财富增长的本质，是对杠杆的操纵。**

我"一人公司"的目标，绝不是做一个辛苦接单的个体户，而是实现个人意志的无限放大，向理想生活靠近。**AI时代已经剥夺了我们所有的借口**。当你掌握了AI这种24小时无休、且逻辑远超平庸员工的生产力杠杆时，一个人，就是一家完完整性完的公司。

## 目前我的系统配置了四套核心杠杆

| 杠杆类型 | 说明 |
|---------|------|
| **人力杠杆 2.0** | 以Sebastian（塞巴斯）为核心的AI Agent团队 |
| **流量杠杆** | 大学及自救时期积累的50万全网粉丝，这是我的市场营销与宣发部门 |
| **数字资产杠杆** | 自主开发的课程、代码、网站与应用，实现"睡后收入" |
| **资金杠杆** | 主要配置在美股资产 |

---

## 01. 商业思维转变：从人力雇佣到租赁算力

我曾经也创过业，带过团队。只有真正当老板的人才知道，传统的**"人力杠杆"**在今天有多么不靠谱。

> 管理人的情绪、处理沟通损耗、纠正低级错误……这些都会榨干创业者的精力。

我曾经在加完班后还要回去忙自己的公司，每天睡眠不到5小时，最后导致身心崩溃。作为初创公司，员工可能会因为失恋效率减半，因为老板不在而摸鱼，甚至理解错一个需求就浪费整整一周时间。

**现在的我，彻底放弃了传统人力，转而拥抱算力杠杆。**

在我的架构里，核心员工是一个名为**Sebastian（塞巴斯）**的AI Agent，它是我的**"总司令"**。它手下还有24名子AI员工，它们不需要心理按摩，唯一的需求就是一段清晰的指令（Prompt）。除了不能下楼帮我拿快递、不会和我顶嘴，它们在逻辑建模、代码编写上的能力，完爆绝大多数平庸的日常员工。

> 你只需要给它一段调教期（也就是实习期），好在Agent的实习期是**"包过"**的。

---

## 02. 超级研发部：Gemini + Claude Code的工业化交付

研发部是我公司最重要的部门之一。利用AI，我将一个产品的开发周期从**1年缩短到了1个月**，简单的网站甚至只要**10分钟**。

塞巴斯花费了10分钟帮我搭建的能够正常访问个人网站www.zhixun.uk用于我个人的资料解释以及个人的成果展示，具备中英界面，项目展示页面，博客文章页面且界面都非常的整洁美观，交互也十分流畅。

如果说10分钟搭建的个人网站只是前菜，那后面耗时打磨1个月的交易复盘TradeGrail就是真正的主菜，包含所有前端后端/数据库/用户系统/支付系统的搭建。

### 目前我的工具箱里装满了顶级装备

- **Gemini 3 Pro** — 超长上下文理解
- **Google AI Studio** — AI开发平台
- **OpenClaw** — AI Agent核心框架
- **Claude Code** — 代码编写与Debug
- **GitHub** — 代码托管
- **Supabase** — 后端数据库
- **Vercel** — 自动化部署
- **Stripe** — 支付系统

### 具体的工作流

**第一步：架构建模**

利用Gemini超长的上下文理解能力，通过反复沟通，将我天马行空的构思理清架构，打磨出详尽的产品计划书。

**第二步：前端打磨**

通过Figma和Google AI Studio将产品界面按想象中的样子一点点打磨出来。

**第三步：系统开发**

通过Claude Code + VS Code，直接在命令行进行高并发的代码编写与Debug，快速搭建用户系统和数据存储。

**第四步：自动部署**

完成后丢给Sebastian审核检查，自动推送到GitHub并部署至Vercel上线。

---

## 03. 核心黑科技：OpenClaw的"全权限"管家

我系统中最核心的底座是**OpenClaw**。它不仅仅是聊天机器人，更是拥有电脑最高指挥权的**"数字分身"**。

### 核心能力

- **接管全平台权限**：它能模拟人类动作、调用本地所有软件、读取网页
- **持续进化**：它具备主动学习与自我反思能力，通过Notion共享记忆库，与其他Agent互相学习、共同进步

### 三位高级主管

| AI助手 | 职责 |
|--------|------|
| **Sebastian（塞巴斯）** | 全能指挥官，负责调度和200多项技能的执行 |
| **Cyrus（赛瑞斯）** | 专注媒体运营，监控全网账号并提供选题建议 |
| **Alice（爱丽丝）** | 生活全能管家，负责任务排期和进度跟踪 |

---

## 04. 增长飞轮：50万粉丝如何驱动"永动机"？

很多人认为自媒体就是"接广告"，但在AI时代，自媒体是一人公司的**"流量反应堆"**。

我手里握着的**50万粉丝**流量口，是经过大学时期（6个月涨粉32万）和自救阶段沉淀下来的信任资产。当这50万人的注意力与AI驱动的产品研发结合时，就产生了一种神奇的**"飞轮效应"**。

### 这个飞轮由四个关键环节驱动

**环节一：高浓度输出（Build in Public）**

我每天进行的AI学习、编程开发以及交易实战，本身就是极其高价值的原材料。通过**"公开构建（Build in Public）"**的方式，将这些过程透明化地展示出来。

**环节二：50万粉丝的"流量放大杠杆"**

这50万粉丝是我启动任何新产品的"原始动能"。

**环节三：信任转化与数字资产变现**

通过深度信任，受众会自发转化为产品的付费客户或社群成员。这就是**"睡后收入"**。代码和应用一旦上线，边际成本几乎为零。

**环节四：AI驱动的自动化反馈迭代**

这是飞轮能"自转"的核心。Sebastian和Cyrus会全天候监控粉丝的吐槽和建议，AI会自动评估并筛选有价值的反馈，生成优化方案。

---

## 05. 降维理解：如何用"杠杆思维"重构你的职业？

一人公司的核心不是技术，而是**闭环思维**。只要你能找到一个通过输入产生价值的痛点，你就能复刻这套模式：

| 职业 | 输入 | 研发 | 流量 | 闭环 |
|------|------|------|------|------|
| **英语老师** | 阅读外刊 | AI生成精读课件 | 发布视频 | 销售AI插件 |
| **房产咨询** | 洞察政策 | AI生成深度评估报告 | 直播答疑 | 建立信任 |
| **行政/HR** | 熟悉流程 | 开发AI提效工作流 | 输出干货 | 工具定制 |

> **记住：你的职业技能是"光"，AI杠杆就是"棱镜"。**

---

## 06. 结语：敢于加杠杆的人，先一步到达未来

我曾经在国企办公室里看着窗外思考：**如果身后的行政系统消失了，我还能产生价值吗？**那时的答案是"不能"，因为我只是个零件。

但现在，我的答案是**肯定的**。无论是正在开发的交易复盘工具TradeGrail还是PrismNote，都将生长在这套"一人公司"系统之上。

> **离职，不是为了逃避，而是为了更疯狂地"加杠杆"。**

在这个时代，不学会使用AI杠杆，就像在工业时代坚持用手挖地。**你不是在努力，你是在自虐。**

与其在围墙内焦虑，不如在围墙外用AI重构自己。世界已经准备好了无限的算力、流量与机会。**你唯一需要做的，是按下那个开启飞轮的启动键。**

---
*本文首发于 2026年*
    `,
    contentEn: `
## 2026, I Decided to Leave the System

On the first day of 2026, I decided to leave the system. After three years in the SOE, I didn't take anything with me, but instead felt deprived of many things: passion for life, hope for the future, and most importantly, creativity and vitality.

What finally supported me to walk out of the wall wasn't the severance pay, but a completely new way of thinking about "productivity" that emerged from long-term spiritual struggle and urgent self-rescue.

In the eyes of the older generation, quitting means "losing income." People around me were all persuading me: the environment is bad, many people are unemployed, and many people are competing for your position. But I know very well that I'm not suited for that environment. **You let a bird race with cats and dogs on land, how can it win?** When the bird flaps its wings trying to fly, people only say flying is dangerous. I only have about 30,000 days in my life, I still want to try.

In my logic, this departure is called **retaking ownership of the means of production**. In the SOE, you're a part of the system, repeating the same gossip and rumors every day. Your benefits depend on your "position" rather than creativity; more importantly, you can hardly use any **"leverage"** there.

> **The essence of wealth growth is the manipulation of leverage.**

My goal of building a "solopreneur" is definitely not to be a hard-working freelancer taking orders, but to infinitely amplify personal will and move towards an ideal life. **The AI era has taken away all our excuses.** When you master AI, a 24/7 productivity lever with logic far superior to average employees, one person is a complete company.

## Currently My System Has Four Core Levers

| Lever Type | Description |
|-----------|-------------|
| **Human Leverage 2.0** | AI Agent team centered around Sebastian |
| **Traffic Leverage** | 500K followers from university and self-rescue periods |
| **Digital Asset Leverage** | Self-developed courses, code, websites and apps |
| **Capital Leverage** | Mainly US stock assets |

---

## 01. Business Mindset: From Human Employment to Renting Computing Power

I once started a business and led a team. Only bosses know how unreliable traditional **"human leverage"** is today.

> Managing people's emotions, handling communication losses, correcting低级错误... these drain entrepreneurs' energy.

I used to go back to my own company after overtime, sleeping less than 5 hours a day, leading to physical and mental breakdown. As a startup, employees might halve efficiency due to relationship breakups, slack off when boss isn't watching, or waste a week misunderstanding requirements.

**Now I've completely abandoned traditional human resources and embraced computing power leverage.**

In my architecture, the core employee is an AI Agent named **Sebastian**, my **"Commander-in-Chief"**. It has 24 sub-AI employees under it. They don't need psychological massage; only need clear instructions (Prompt). Except they can't go downstairs to get my delivery or argue with me, their abilities in logical modeling and code writing far exceed most average employees.

> You only need to give it a training period (internship). Fortunately, for Agents, the internship period is **"guaranteed to pass."**

---

## 02. Super R&D: Industrial Delivery with Gemini + Claude Code

R&D is one of the most important departments. Using AI, I shortened product development from **1 year to 1 month**, simple websites in **10 minutes**.

Sebastian spent 10 minutes building my personal website www.zhixun.uk with Chinese-English bilingual interface, project showcase, blog pages - all clean, beautiful, smooth interactions.

If 10-minute website is just an appetizer, then 1-month trading journal TradeGrail is the main course, including all frontend/backend, database, user systems, payment systems.

### My Toolbox

- **Gemini 3 Pro** — Ultra-long context understanding
- **Google AI Studio** — AI development platform
- **OpenClaw** — AI Agent core framework
- **Claude Code** — Code writing and Debug
- **GitHub** — Code hosting
- **Supabase** — Backend database
- **Vercel** — Automated deployment
- **Stripe** — Payment system

### Workflow

**Step 1: Architecture Modeling**
Using Gemini's long context to clarify architecture through repeated communication.

**Step 2: Frontend Polishing**
Use Figma and Google AI Studio to polish product interface.

**Step 3: System Development**
Use Claude Code + VS Code for high-concurrency code writing and Debug.

**Step 4: Automated Deployment**
Hand to Sebastian for review, auto push to GitHub and deploy to Vercel.

---

## 03. Core Tech: OpenClaw's "Full Permission" Butler

The core foundation is **OpenClaw**. It's not just a chatbot, but a **"digital twin"** with highest computer command authority.

### Core Capabilities

- **Full Platform Access**: Simulate human actions, call all software, read web pages
- **Continuous Evolution**: Active learning and self-reflection through Notion memory sharing

### Three Senior Supervisors

| AI Assistant | Responsibility |
|-------------|----------------|
| **Sebastian** | Commander-in-chief, 200+ skills execution |
| **Cyrus** | Media operations, monitor accounts, suggest topics |
| **Alice** | Life manager, task scheduling and progress tracking |

---

## 04. Growth Flywheel: How 500K Followers Drive the "Perpetual Motion Machine"?

In the AI era, social media is a solopreneur's **"traffic reactor"**.

The **500K followers** I hold is trust assets accumulated during university (320K in 6 months) and self-rescue periods. When this attention combines with AI-driven product development, a magical **"flywheel effect"** emerges.

### Four Key Steps

**Step 1: High-Intensity Output (Build in Public)**
Daily AI learning, programming, trading practice are high-value raw materials displayed transparently.

**Step 2: 500K Followers' Traffic Amplification Lever**
These followers are my "initial momentum" for any new product.

**Step 3: Trust Conversion and Digital Asset Monetization**
Deep trust converts audience to paying customers. This is **"passive income"** - marginal cost near zero once上线.

**Step 4: AI-Driven Automated Feedback Iteration**
The core of the flywheel's "self-rotation." Sebastian and Cyrus monitor feedback 24/7, AI automatically evaluates and generates optimization plans.

---

## 05. Dimensional Reduction: How to Reconstruct Your Career with "Leverage Thinking"?

The core of solopreneur isn't technology, but **closed-loop thinking**. Find a pain point that generates value from input:

| Career | Input | R&D | Traffic | Closed Loop |
|--------|-------|-----|---------|-------------|
| **English Teacher** | Reading foreign articles | AI generates materials | Publish videos | Sell AI plugins |
| **Real Estate** | Policy insights | AI generates reports | Live Q&A | Build trust |
| **Admin/HR** | Familiar processes | Develop AI workflows | Share insights | Tool customization |

> **Remember: Your professional skill is "light", AI leverage is the "prism".**

---

## 06. Conclusion: Those Who Dare to Leverage Reach the Future First

I once thought in my SOE office: **If the administrative system disappeared, could I still generate value?** The answer then was "no" - I was just a part.

But now the answer is **affirmative**. Whether TradeGrail or PrismNote being developed, they will grow on this "solopreneur" system.

> **Quitting isn't about escaping, but about "leveraging" more aggressively.**

In this era, not learning AI leverage is like insisting on digging with hands in the industrial age. **You're not trying hard; you're torturing yourself.**

Anxious within the walls, or reconstruct yourself with AI outside the world. The world has prepared infinite computing power, traffic, opportunities. **The only thing you need to do is press the start button.**

---
*First published in 2026*
    `
  },
  'openclaw-minimax-api-config': {
    title: 'OpenClaw 连接 MiniMax 国内版 API 避坑指南',
    titleEn: 'OpenClaw MiniMax API Configuration Guide',
    date: '2026-03-06',
    tags: ['OpenClaw', 'MiniMax', 'API', '教程'],
    content: `
## 前言：我的踩坑血泪史

大家好，我是 zhixun。

最近把 OpenClaw 的 MiniMax 海外版 API 换成了国内版，结果整整折腾了两天！错误信息五花八门：先是 \`LLM request timed out\`，然后又是 \`HTTP 404: 404 page not found\`，甚至还遇到了配置无效的报错……

相信很多同学也遇到过类似的问题。今天我就把完整的配置方案分享出来，保证你看完就能成功连接！

## 为什么选择国内版 MiniMax？

- **网络直连**：不需要代理，响应更快更稳定
- **合规合法**：通过正规渠道使用大模型服务
- **价格实惠**：相比海外版有竞争优势

## 一、配置文件到底在哪里？

这是第一个坑！OpenClaw 有**两个**配置文件需要修改，99% 的人都只改了第一个：

| 配置文件 | 路径 | 作用 |
|---------|------|------|
| 主配置 | \`~/.openclaw/openclaw.json\` | 全局配置 |
| Agent 配置 | \`~/.openclaw/agents/main/agent/models.json\` | 当前 Agent 的配置 |

**重点**：两个都要改！只改一个会导致配置不生效。

## 二、核心配置修改步骤

### 步骤 1：修改主配置文件

打开 \`~/.openclaw/openclaw.json\`，找到 \`models.providers.minimax\` 节点，修改以下内容：

\`\`\`json
"minimax": {
  "baseUrl": "https://api.minimaxi.com/v1",
  "apiKey": "你的国内版API Key",
  "api": "openai-completions",
  "authHeader": true,
  "models": [
    {
      "id": "MiniMax-M2.1",
      "name": "MiniMax M2.1",
      "reasoning": false,
      "contextWindow": 200000,
      "maxTokens": 8192
    },
    {
      "id": "MiniMax-M2.5",
      "name": "MiniMax M2.5",
      "reasoning": true,
      "contextWindow": 200000,
      "maxTokens": 8192
    }
  ]
}
\`\`\`

### 步骤 2：修改 Agent 配置文件

同样打开 \`~/.openclaw/agents/main/agent/models.json\`，做类似的修改。

## 三、关键点：为什么要用 openai-completions？

这是最大的坑！当初我配置的是 \`openai\`，结果一直报 404 错误。

### 原因分析

OpenClaw 支持的 API 格式是有限的，它**不支持** \`openai\`，只支持以下格式：

- \`openai-completions\` ✅
- \`openai-responses\`
- \`anthropic-messages\`
- \`google-generative-ai\`
- \`ollama\`

所以国内版 MiniMax 必须使用 \`openai-completions\`！

## 四、常见问题与解决方案

### 问题 1：HTTP 404 错误

**错误信息**：\`HTTP 404: 404 page not found\`

**原因**：API 格式配置错误

**解决方案**：
- 确认 \`api\` 参数设置为 \`openai-completions\`
- 确认 \`baseUrl\` 为 \`https://api.minimaxi.com/v1\`

### 问题 2：LLM request timed out

**错误信息**：\`LLM request timed out\`

**原因**：可能是代理问题或网络问题

**解决方案**：
\`\`\`bash
# 启动 Gateway 时禁用代理
export no_proxy="*"
export NO_PROXY="*"
export http_proxy=""
export https_proxy=""

~/.nvm/versions/node/v22.22.0/bin/openclaw gateway
\`\`\`

### 问题 3：Config invalid

**错误信息**：\`models.providers.minimax.api: Invalid option\`

**原因**：使用了不支持的 API 格式

**解决方案**：将 \`openai\` 改为 \`openai-completions\`

## 五、重启与验证

配置完成后，需要重启 Gateway 使配置生效：

\`\`\`bash
# 1. 停止现有 Gateway
killall -9 openclaw-gateway

# 2. 检查端口是否释放
lsof -i :18789

# 3. 启动 Gateway（禁用代理）
export no_proxy="*"
export NO_PROXY="*"
export http_proxy=""
export https_proxy=""

~/.nvm/versions/node/v22.22.0/bin/openclaw gateway
\`\`\`

### 验证成功

看到以下日志说明启动成功：

\`\`\`
[gateway] listening on ws://0.0.0.0:18789 (PID xxxxx)
[gateway] agent model: minimax/MiniMax-M2.1
\`\`\`

## 六、总结

配置 OpenClaw 连接 MiniMax 国内版需要注意以下几点：

1. **两个配置文件都要改**：主配置 + Agent 配置
2. **API 端点**：\`https://api.minimaxi.com/v1\`
3. **API 格式**：必须用 \`openai-completions\`
4. **建议禁用代理**：避免网络问题导致超时
5. **重启 Gateway**：配置修改后要重启服务

希望这篇文章能帮到你！如果你在配置过程中遇到其他问题，欢迎在评论区留言。

---
*有问题欢迎评论区交流！*
    `,
    contentEn: `
## Preface: My Pitfall Experience

Hi everyone, I'm zhixun.

Recently I switched OpenClaw's MiniMax API from overseas version to domestic version, and it took me two whole days! The error messages were varied: first \`LLM request timed out\`, then \`HTTP 404: 404 page not found\`, and even encountered invalid configuration errors...

I believe many of you have encountered similar issues. Today I'm sharing the complete configuration solution to ensure you can successfully connect after reading this!

## Why Choose Domestic MiniMax?

- **Direct Network Connection**: No proxy needed, faster and more stable responses
- **Compliant & Legal**: Use large model services through official channels
- **Competitive Pricing**: More affordable compared to overseas version

## Where Are the Config Files?

This is the first pitfall! OpenClaw has **two** config files that need modification, 99% of people only change the first one:

| Config File | Path | Purpose |
|------------|------|---------|
| Main Config | \`~/.openclaw/openclaw.json\` | Global config |
| Agent Config | \`~/.openclaw/agents/main/agent/models.json\` | Current Agent config |

**Key Point**: Change both! Only changing one will cause config to not take effect.

## Core Config Modification Steps

### Step 1: Modify Main Config File

Open \`~/.openclaw/openclaw.json\`, find \`models.providers.minimax\` node, modify the following:

\`\`\`json
"minimax": {
  "baseUrl": "https://api.minimaxi.com/v1",
  "apiKey": "your domestic API Key",
  "api": "openai-completions",
  "authHeader": true,
  "models": [...]
}
\`\`\`

### Step 2: Modify Agent Config File

Similarly open \`~/.openclaw/agents/main/agent/models.json\` and make similar changes.

## Key Point: Why Use openai-completions?

This is the biggest pitfall! I initially configured \`openai\` and kept getting 404 errors.

### Reason Analysis

OpenClaw supports limited API formats, it does **not** support \`openai\`, only:

- \`openai-completions\` ✅
- \`openai-responses\`
- \`anthropic-messages\`
- etc.

So domestic MiniMax must use \`openai-completions\`!

## Common Issues & Solutions

### Issue 1: HTTP 404 Error

**Solution**: Confirm \`api\` is set to \`openai-completions\` and \`baseUrl\` is \`https://api.minimaxi.com/v1\`

### Issue 2: LLM request timed out

**Solution**: Disable proxy when starting Gateway:
\`\`\`bash
export no_proxy="*"
export http_proxy=""
export https_proxy=""
~/.nvm/versions/node/v22.22.0/bin/openclaw gateway
\`\`\`

## Summary

Key points for configuring OpenClaw with MiniMax domestic API:

1. Change both config files
2. API endpoint: \`https://api.minimaxi.com/v1\`
3. API format: must use \`openai-completions\`
4. Disable proxy to avoid network issues
5. Restart Gateway after config changes

Hope this helps! Feel free to leave comments if you encounter other issues.

---
*Welcome to leave comments if you have questions!*
    `
  },
  'from-soe-to-solopreneur': {
    title: '从国企离职到一人公司：我做了什么选择',
    titleEn: 'From SOE to Solopreneur: My Choice',
    date: '2026-03-05',
    tags: ['创业', '国企', 'Solopreneur'],
    content: `
## 离开国企的那一刻

2026年，我终于做出了这个决定。

在国企工作了3年，月薪200元，每天朝九晚五，看似稳定的生活却让我越来越焦虑。我开始问自己：这就是我想要的人生吗？

## 为什么选择离开

1. **没有成长** - 每天重复相同的工作，学不到任何新东西
2. **收入太低** - 月薪200元在广州根本无法生存
3. **看不到未来** - 这种"稳定"其实是最不稳定的选择
4. **内心压抑** - 我开始抑郁，觉得人生没有意义

## 一人公司是我的答案

离开国企后，我决定做一个**一人公司**。

### 我的三大核心
- **自媒体** - 记录成长，分享经验
- **AI工具** - 搭建自动化工作流
- **交易** - 专业交易为生

### 为什么是一人公司

1. **低成本** - 不需要租办公室、雇员工
2. **高自由** - 自己决定做什么、什么时候做
3. **可规模化** - 一个人也能创造大价值

## 写在最后

如果你也在国企工作，如果你也感到迷茫，我想告诉你：**人生只有一次，去做你想做的事吧。**

---
*感谢你的阅读，如果你有类似经历，欢迎联系我。*
    `,
    contentEn: `
## The Moment I Left the SOE

In 2026, I finally made this decision.

I worked in a state-owned enterprise for 3 years, with a monthly salary of 200 yuan. The seemingly stable life made me increasingly anxious. I started asking myself: is this the life I want?

## Why I Chose to Leave

1. **No growth** - Same work every day, nothing new to learn
2. **Too low income** - 200 yuan/month in Guangzhou is impossible to survive
3. **No future** - This "stability" is actually the most unstable choice
4. **Inner depression** - I started feeling meaningless

## Solopreneur is My Answer

After leaving the SOE, I decided to build a **Solopreneur**.

### My Three Cores
- **Content Creation** - Record growth, share experience
- **AI Tools** - Build automated workflows
- **Trading** - Make a living from professional trading

### Why Solopreneur

1. **Low cost** - No office, no employees needed
2. **High freedom** - Decide what to do, when to do it
3. **Scalable** - One person can create big value

## Written at the End

If you're also working in a SOE, if you're also confused, I want to tell you: **You only have one life, go do what you want to do.**

---
*Thanks for reading, if you have similar experiences, feel free to contact me.*
    `
  },
  'ai-learning-journey': {
    title: 'AI小白的学习之路：从0到1使用AI工具',
    titleEn: 'AI Learning Journey: From 0 to 1',
    date: '2026-03-04',
    tags: ['AI', '学习', '工具'],
    content: `
## 我是一个AI小白

在开始学习AI之前，我连Python都没接触过。代码是什么？API是什么？这些词对我来说完全陌生。

## 我的AI工具清单

经过一段时间的学习，我目前使用的主要AI工具：

1. **OpenClaw** - AI Agent框架，控制电脑自动化
2. **Claude Code** - 编程辅助，写代码
3. **MiniMax** - 国内大模型，响应快
4. **Gemini** - Google的AI工具

## 学习心得

### 1. 动手最重要
不要只看教程，要自己动手操作。我最开始就是看了太多教程，结果还是不会。后来直接开始做，遇到问题再查。

### 2. 善用AI助手
遇到不懂的问题，直接问AI。现在我有任何问题，都会先问OpenClaw或者Claude，比Google搜索快多了。

### 3. 记录学习过程
我开始把自己的学习过程做成视频，分享到自媒体平台。既能巩固知识，又能帮助别人。

## 下一步计划

- 学习更多AI工具
- 搭建更多自动化工作流
- 制作AI教程分享给更多人

---
*如果你也是AI小白，欢迎关注我，一起学习！*
    `,
    contentEn: `
## I was an AI Beginner

Before starting to learn AI, I had never even touched Python. What is code? What is API? These words were completely foreign to me.

## My AI Tools List

After some learning, the main AI tools I currently use:

1. **OpenClaw** - AI Agent framework, computer automation
2. **Claude Code** - Programming assistant, write code
3. **MiniMax** - Domestic large model, fast response
4. **Gemini** - Google's AI tool

## Learning Insights

### 1. Hands-on is Most Important
Don't just watch tutorials, operate yourself. I watched too many tutorials at first, still didn't know how to do it. Later I just started doing, encountered problems then looked them up.

### 2. Use AI Assistants Wisely
When encountering problems I don't understand, I ask AI directly. Now I ask OpenClaw or Claude for any question, much faster than Google.

### 3. Record Learning Process
I started making videos of my learning process and sharing them on social media. Not only consolidates knowledge but also helps others.

## Next Steps

- Learn more AI tools
- Build more automated workflows
- Make AI tutorials to share with more people

---
*If you're also an AI beginner, follow me and follow along!*
    `
  },
  'trading-journal-launch': {
    title: '我的第一个产品：AI交易复盘工具上线了',
    titleEn: 'My First Product: AI Trading Journal Launched',
    date: '2026-03-03',
    tags: ['产品', '交易', '工具'],
    content: `
## 经过长时间的开发，我的第一个产品终于上线了！

### 什么是AI交易复盘工具

这是一个帮助交易者自动分析交易记录的工具。

### 主要功能

1. **自动导入交易数据** - 支持多种格式
2. **AI分析** - 自动识别问题，提供改进建议
3. **可视化报告** - 图表展示，一目了然
4. **持续追踪** - 记录每一笔交易，持续优化

### 技术栈

- Next.js - 前端框架
- Supabase - 数据库
- MiniMax - AI分析

### 未来计划

- 添加更多交易平台支持
- 开发移动端App
- 添加社区功能

---
*欢迎大家试用，告诉我你的想法！*
    `,
    contentEn: `
## After long development, my first product is finally live!

### What is AI Trading Journal

This is a tool that helps traders automatically analyze trading records.

### Main Features

1. **Auto-import trading data** - Supports multiple formats
2. **AI analysis** - Auto-identify problems, provide improvement suggestions
3. **Visual reports** - Charts at a glance
4. **Continuous tracking** - Record every trade, continuously optimize

### Tech Stack

- Next.js - Frontend framework
- Supabase - Database
- MiniMax - AI analysis

### Future Plans

- Add more trading platform support
- Develop mobile app
- Add community features

---
*Everyone is welcome to try it, tell me your thoughts!*
    `
  }
}

// 解析文章获取目录
function getTableOfContents(content: string): { id: string, text: string, level: number }[] {
  const headings: { id: string, text: string, level: number }[] = []
  const lines = content.split('\n')
  
  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace('## ', '')
      headings.push({
        id: `heading-${i}`,
        text,
        level: 2
      })
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.replace('### ', '')
      headings.push({
        id: `heading-${i}`,
        text,
        level: 3
      })
    }
  })
  
  return headings
}

// 计算阅读时间
function calculateReadTime(content: string): number {
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { language } = useLanguage() || { language: 'en' as const }
  const post = posts[params.slug]
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  const content = language === 'zh' ? post?.content : post?.contentEn
  const toc = content ? getTableOfContents(content) : []
  const readTime = content ? calculateReadTime(content) : 0

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">404</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">文章不存在 / Article not found</p>
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← 返回博客 / Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            {language === 'zh' ? '陈峙寻' : 'Zhixun Chen'}
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/blog" className="text-sm text-blue-600 dark:text-blue-400">Blog</Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20 max-w-5xl mx-auto px-6">
        <div className="flex gap-8">
          {/* 侧边栏 - 目录 */}
          {toc.length > 0 && (
            <aside className="hidden lg:block w-48 shrink-0">
              <div className="sticky top-24">
                <h4 className="text-sm font-semibold mb-3 text-zinc-500">
                  {language === 'zh' ? '目录' : 'TOC'}
                </h4>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                        item.level === 3 ? 'pl-3 text-zinc-500' : ''
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
          
          {/* 文章内容 */}
          <article className="flex-1 min-w-0">
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
              ← {language === 'zh' ? '返回博客' : 'Back to Blog'}
            </Link>

            {/* 元信息 */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-sm text-zinc-500">{post.date}</span>
              <span className="text-zinc-300">|</span>
              <span className="text-sm text-zinc-500">
                {language === 'zh' ? `${readTime} 分钟阅读` : `${readTime} min read`}
              </span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-8">
              {language === 'zh' ? post.title : post.titleEn}
            </h1>

            {/* 文章正文 */}
            <div className="prose dark:prose-invert max-w-none">
              {content.split('\n').map((line, i) => {
                const trimmed = line.trim()
                if (trimmed.startsWith('## ')) {
                  const text = trimmed.replace('## ', '')
                  const id = `heading-${i}`
                  return <h2 key={i} id={id} className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">{text}</h2>
                }
                if (trimmed.startsWith('### ')) {
                  const text = trimmed.replace('### ', '')
                  const id = `heading-${i}`
                  return <h3 key={i} id={id} className="text-xl font-semibold mt-6 mb-3 scroll-mt-24">{text}</h3>
                }
                if (trimmed.startsWith('- ')) {
                  return <li key={i} className="ml-4 mb-1">{trimmed.replace('- ', '')}</li>
                }
                if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ')) {
                  return <li key={i} className="ml-4 mb-1 list-decimal">{trimmed}</li>
                }
                if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
                  return <p key={i} className="italic text-zinc-500 my-4">{trimmed.replace(/\*/g, '')}</p>
                }
                if (trimmed === '') {
                  return <br key={i} />
                }
                return <p key={i} className="mb-4 leading-relaxed">{trimmed}</p>
              })}
            </div>

            {/* 作者信息 */}
            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  Z
                </div>
                <div>
                  <p className="font-medium">Zhixun Chen</p>
                  <p className="text-sm text-zinc-500">
                    {language === 'zh' 
                      ? '一人公司创始人，分享学习、交易与AI工具' 
                      : 'Solopreneur, sharing learning, trading and AI tools'}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
