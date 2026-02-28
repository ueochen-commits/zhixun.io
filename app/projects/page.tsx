'use client'

import { useLanguage } from '@/components/LanguageContext'

const projects = {
  zh: [
    {
      name: 'AI交易复盘工具',
      description: '利用AI技术帮助交易者自动分析交易记录，识别问题并提供改进建议。支持多种交易数据导入，智能生成复盘报告。',
      tags: ['AI', '交易工具', '效率'],
      status: '开发中',
    },
  ],
  en: [
    {
      name: 'AI Trading Journal',
      description: 'Using AI to help traders automatically analyze trading records, identify issues and provide improvement suggestions. Supports multiple trading data imports, intelligently generates review reports.',
      tags: ['AI', 'Trading Tool', 'Productivity'],
      status: 'In Development',
    },
  ],
}

export default function Projects() {
  const { language, t } = useLanguage()
  const lang = language as 'zh' | 'en'

  return (
    <div className="pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{t('项目', 'Projects')}</h1>
        <p className="text-muted mb-12">{t('正在打造的产品与实验', 'Products and experiments I\'m building')}</p>

        <div className="space-y-6">
          {projects[lang].map((project: any) => (
            <div
              key={project.name}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                  {project.status}
                </span>
              </div>
              <p className="text-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-background border border-border rounded text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card/50 border border-border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{t('更多项目，敬请期待', 'More Projects Coming Soon')}</h2>
          <p className="text-muted">
            {t('作为一个持续创业者，我会有更多项目陆续推出。关注我了解更多动态。', 'As a continuous entrepreneur, I\'ll have more projects launching soon. Stay tuned for more updates.')}
          </p>
        </div>
      </section>
    </div>
  )
}
