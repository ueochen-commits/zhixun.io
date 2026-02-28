'use client'

import { useLanguage } from '@/components/LanguageContext'

export default function About() {
  const { language, t } = useLanguage() || { language: 'en', t: () => '' }
  const lang = language

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">My story and journey</p>
        <p>Content coming soon...</p>
      </div>
    </div>
  )
}
