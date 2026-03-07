'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage, useTheme } from '@/components/LanguageContext'

// 首页展示的最新文章（按日期排序，最新在前）
const recentPosts = [
  {
    slug: 'ai-solopreneur',
    title: '国企离职：我是如何用AI搭建"自我进化"的一人公司的？',
    titleEn: 'How I Built an AI-Powered Solopreneur After Leaving the SOE',
    date: '2026-03-07'
  },
  {
    slug: 'openclaw-minimax-api-config',
    title: 'OpenClaw 连接 MiniMax 国内版 API 避坑指南',
    titleEn: 'OpenClaw MiniMax API Configuration Guide',
    date: '2026-03-06'
  },
  {
    slug: 'from-soe-to-solopreneur',
    title: '从国企离职到一人公司：我做了什么选择',
    titleEn: 'From SOE to Solopreneur: My Choice',
    date: '2026-03-05'
  },
  {
    slug: 'ai-learning-journey',
    title: 'AI小白的学习之路：从0到1使用AI工具',
    titleEn: 'AI Learning Journey: From 0 to 1',
    date: '2026-03-04'
  },
  {
    slug: 'trading-journal-launch',
    title: '我的第一个产品：AI交易复盘工具上线了',
    titleEn: 'My First Product: AI Trading Journal Launched',
    date: '2026-03-03'
  }
]

export default function Home() {
  const { language, setLanguage, t } = useLanguage() || { language: 'en' as const, setLanguage: () => {}, t: (zh: string, en: string) => en }
  const { theme, toggleTheme } = useTheme() || { theme: 'light' as const, toggleTheme: () => {} }
  const [showContact, setShowContact] = useState(false)

  const name = language === 'zh' ? '陈峙寻' : 'Zhixun Chen'
  const location = language === 'zh' ? '广州，中国' : 'Guangzhou, China'

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg">{name}</a>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#about" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <Link href="/blog" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="text-sm text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                // Moon icon - click to switch to dark mode
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                // Sun icon - click to switch to light mode
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'zh' ? '你好，我是' : "Hi! I'm"} <span className="text-blue-600 dark:text-blue-400">{name}</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">{location}</p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
            {t(
              '一人公司创始人 | Prop Firm自营交易员 | 自媒体博主',
              'Solopreneur | Prop Firm Trader | Content Creator'
            )}
          </p>
          <div className="flex flex-col items-start gap-2">
            <button
              onClick={() => setShowContact(!showContact)}
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {language === 'zh' ? '联系我' : 'Contact Me'}
            </button>
            {/* Contact Info Panel - expand below button */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showContact ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-2 space-y-2">
                <a href="mailto:ueochen@gmail.com" className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>ueochen@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  <span>WeChat: Timetravel_0</span>
                </div>
                <a href="https://instagram.com/scarlet_leopard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Instagram: Scarlet_Leopard</span>
                </a>
              </div>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-zinc-300 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-8">
            {language === 'zh' ? '当前项目' : 'Current Project'}
          </h2>
          
          <div className="mb-8">
            <Link href="/projects/ai-trading-journal" className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold mb-2">
                {language === 'zh' ? 'AI交易复盘工具-TradeGrail' : 'AI Trading Journal - TradeGrail'}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {t(
                  '利用AI技术帮助交易者自动分析交易记录，识别问题并提供改进建议。支持多种交易数据导入，智能生成复盘报告。',
                  'Using AI to help traders automatically analyze trading records, identify issues and provide improvement suggestions. Supports multiple trading data imports.'
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">AI</span>
                <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">Trading</span>
                <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">Productivity</span>
              </div>
            </Link>
          </div>

          <a href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            {language === 'zh' ? '更多项目敬请期待 →' : 'More Projects Coming Soon →'}
          </a>
        </section>

        {/* Latest Blog Posts */}
        <section id="blog" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-8">
            {language === 'zh' ? '最新文章' : 'Latest Posts'}
          </h2>
          
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      {language === 'zh' ? post.title : post.titleEn}
                    </h3>
                  </div>
                  <span className="text-sm text-zinc-500">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/blog" className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline">
            {language === 'zh' ? '查看更多文章 →' : 'View All Posts →'}
          </Link>
        </section>

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'zh' ? '关于' : 'About'}
          </h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            <p>
              {t(
                '曾留学英国10年，巅峰期运营50万粉丝账号，后入职国企3年。现离职创业，专注于自营交易与AI工具开发。',
                'Studied in the UK for 10 years. Once managed a 500K follower account. Worked at a state-owned enterprise for 3 years. Now pursuing entrepreneurship, focusing on proprietary trading and AI tools.'
              )}
            </p>
            <p>
              {t(
                '我相信一人公司的力量，相信AI可以大幅提升个人生产力。目前正在开发AI交易复盘工具，帮助交易者更高效地分析和改进交易策略。',
                'I believe in the power of solopreneurship and AI to dramatically boost individual productivity. Currently building an AI trading journal to help traders analyze and improve their strategies.'
              )}
            </p>
          </div>

          <a href="#about" className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline">
            {language === 'zh' ? '了解更多 →' : 'Learn More About Me →'}
          </a>
        </section>

        {/* Experience */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'zh' ? '经历' : 'Experience'}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium">{language === 'zh' ? '离职创业' : 'Entrepreneurship'}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{language === 'zh' ? '一人公司，专注自营交易与AI工具开发' : 'Building a solopreneur, focused on proprietary trading and AI tools'}</p>
              <p className="text-sm text-zinc-500">2023 - {language === 'zh' ? '现在' : 'Present'}</p>
            </div>
            <div>
              <h3 className="font-medium">{language === 'zh' ? '入职国企' : 'Corporate Job'}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{language === 'zh' ? '积累企业管理经验' : 'Gained enterprise management experience'}</p>
              <p className="text-sm text-zinc-500">2020 - 2023</p>
            </div>
            <div>
              <h3 className="font-medium">{language === 'zh' ? '50万粉丝博主' : '500K Follower Blogger'}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{language === 'zh' ? '自媒体内容创作' : 'Content creation on social media'}</p>
              <p className="text-sm text-zinc-500">{language === 'zh' ? '事业巅峰' : 'Peak'}</p>
            </div>
            <div>
              <h3 className="font-medium">{language === 'zh' ? '英国留学' : 'UK Education'}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{language === 'zh' ? '留学10年' : 'Studied in the UK for 10 years'}</p>
              <p className="text-sm text-zinc-500">{language === 'zh' ? '更早' : 'Earlier'}</p>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'zh' ? '当前专注' : 'Current Focus'}
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Prop Firm Trading</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">AI Product</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Content Creation</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Solopreneur</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p>© 2026 {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
