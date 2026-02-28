'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from './LanguageContext'

const navItems = [
  { href: '/', labelZh: '首页', labelEn: 'Home' },
  { href: '/projects', labelZh: '项目', labelEn: 'Projects' },
  { href: '/about', labelZh: '关于', labelEn: 'About' },
  { href: '/contact', labelZh: '联系', labelEn: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage() || { language: 'en' as const, setLanguage: () => {}, t: (zh: string, en: string) => en }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          {t('陈峙寻', 'Zhixun Chen')}
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === item.href ? 'text-accent' : 'text-muted'
              }`}
            >
              {t(item.labelZh, item.labelEn)}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="text-sm px-2 py-1 border border-border rounded hover:bg-card transition-colors"
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </nav>
    </header>
  )
}
