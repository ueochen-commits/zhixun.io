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
