'use client'

import Link from 'next/link'
import { useLanguage, useTheme } from '@/components/LanguageContext'

export default function Home() {
  const { language, setLanguage, t } = useLanguage() || { language: 'en' as const, setLanguage: () => {}, t: (zh: string, en: string) => en }
  const { theme, toggleTheme } = useTheme() || { theme: 'light' as const, toggleTheme: () => {} }

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
            <a href="/blog" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a>
            <a href="#projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#about" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="text-sm px-2 py-1 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={toggleTheme}
              className="text-sm px-2 py-1 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
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
          <div className="flex gap-4">
            <a
              href="mailto:ueochen@gmail.com"
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {language === 'zh' ? '联系我' : 'Contact Me'}
            </a>
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
                {language === 'zh' ? 'AI交易复盘工具' : 'AI Trading Journal'}
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
