'use client'

import { useLanguage } from '@/components/LanguageContext'

export default function Contact() {
  const { language, t } = useLanguage()

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">{t('联系我', 'Contact Me')}</h1>
        
        <div className="space-y-8">
          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{t('微信', 'WeChat')}</h2>
            <p className="text-muted">c15718134769</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{t('邮箱', 'Email')}</h2>
            <a href="mailto:ueochen@gmail.com" className="text-accent hover:underline">
              ueochen@gmail.com
            </a>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{t('社交', 'Social')}</h2>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-accent hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-accent hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
