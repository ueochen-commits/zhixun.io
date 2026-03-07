'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageContext'

// 博客文章数据
const posts = [
  {
    slug: 'ai-solopreneur',
    title: '国企离职：我是如何用AI搭建"自我进化"的一人公司的？',
    titleEn: 'How I Built an AI-Powered Self-Evolving Solopreneur After Leaving the SOE',
    date: '2026-03-07',
    excerpt: '2026年的第一天，我决定离开体制。在体制内的三年，我什么都没有带走，反而感觉被剥夺了许多...',
    excerptEn: 'On the first day of 2026, I decided to leave the system. After three years in the SOE, I felt deprived of many things...',
    tags: ['AI', '创业', '国企', 'Solopreneur']
  },
  {
    slug: 'openclaw-minimax-api-config',
    title: 'OpenClaw 连接 MiniMax 国内版 API 避坑指南',
    titleEn: 'OpenClaw MiniMax API Configuration Guide',
    date: '2026-03-06',
    excerpt: '踩了无数坑后总结出的完整配置教程，看完这篇就够了',
    excerptEn: 'A complete configuration guide after countless pitfalls',
    tags: ['OpenClaw', 'MiniMax', 'API', '教程']
  },
  {
    slug: 'from-soe-to-solopreneur',
    title: '从国企离职到一人公司：我做了什么选择',
    titleEn: 'From SOE to Solopreneur: My Choice',
    date: '2026-03-05',
    excerpt: '离开国企3年后，我终于决定追随内心，开始一人公司的创业之路。',
    excerptEn: 'After 3 years in a state-owned enterprise, I finally decided to follow my heart and start a solopreneur journey.',
    tags: ['创业', '国企', 'Solopreneur']
  },
  {
    slug: 'ai-learning-journey',
    title: 'AI小白的学习之路：从0到1使用AI工具',
    titleEn: 'AI Learning Journey: From 0 to 1',
    date: '2026-03-04',
    excerpt: '作为一个完全不懂代码的人，我是如何开始学习AI工具的。',
    excerptEn: 'As someone with no coding background, how I started learning AI tools.',
    tags: ['AI', '学习', '工具']
  },
  {
    slug: 'trading-journal-launch',
    title: '我的第一个产品：AI交易复盘工具上线了',
    titleEn: 'My First Product: AI Trading Journal Launched',
    date: '2026-03-03',
    excerpt: '经过一段时间的开发，我的AI交易复盘工具终于上线了！',
    excerptEn: 'After some development, my AI trading journal tool is finally live!',
    tags: ['产品', '交易', '工具']
  }
]

export default function Blog() {
  const { language } = useLanguage() || { language: 'en' as const }

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

      <main className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'zh' ? '博客' : 'Blog'}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          {language === 'zh' 
            ? '记录我的学习、思考与成长' 
            : 'Recording my learning, thinking and growth'}
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-500">{post.date}</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                {language === 'zh' ? post.title : post.titleEn}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {language === 'zh' ? post.excerpt : post.excerptEn}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
