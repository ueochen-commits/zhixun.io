'use client'

import { useLanguage } from '@/components/LanguageContext'

const timeline = {
  zh: [
    { period: '现在', title: '离职创业', description: '创立一人公司，专注自营交易与AI工具开发' },
    { period: '3年前', title: '入职国企', description: '积累企业管理经验，理解组织运作' },
    { period: '事业巅峰', title: '50万粉丝博主', description: '在社交媒体平台积累了大量粉丝，内容创作能力得到验证' },
    { period: '更早', title: '英国留学10年', description: '在英国完成学业，对国际市场有深入理解' },
  ],
  en: [
    { period: 'Now', title: 'Entrepreneurship', description: 'Building a solopreneur, focused on proprietary trading and AI tools' },
    { period: '3 Years Ago', title: 'Corporate Job', description: 'Gained enterprise management experience, understood how organizations work' },
    { period: 'Peak', title: '500K Follower Blogger', description: 'Built a large following on social media, proven content creation ability' },
    { period: 'Earlier', title: 'UK Education', description: 'Studied in the UK for 10 years, deep understanding of international markets' },
  ],
}

export default function About() {
  const { language, t } = useLanguage()
  const lang = language as 'zh' | 'en'

  return (
    <div className="pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{t('关于我', 'About Me')}</h1>
        <p className="text-muted mb-12">{t('我的经历与故事', 'My story & journey')}</p>

        {/* Intro */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t('我是谁', 'Who I Am')}</h2>
          <div className="p-6 bg-card border border-border rounded-lg">
            <p className="text-muted leading-relaxed">
              {t(
                '我是陈峙寻（Zhixun Chen），现居广州。一个不安分的创业者，曾在英国留学10年，回国后做过自媒体（50万粉丝），也去过国企上班。现在选择裸辞创业，专注于自营交易和AI工具开发。',
                'I\'m Zhixun Chen, based in Guangzhou. A restless entrepreneur who studied in the UK for 10 years, returned to China to build a 500K follower content business, then worked at a state-owned enterprise. Now I\'ve quit to focus on proprietary trading and AI tool development.'
              )}
            </p>
            <p className="text-muted leading-relaxed mt-4">
              {t(
                '我相信一人公司的力量，相信AI可以大幅提升个人生产力。目前正在开发AI交易复盘工具，帮助交易者更高效地分析和改进交易策略。',
                'I believe in the power of solopreneurship and AI to dramatically boost individual productivity. I\'m currently building an AI trading journal to help traders analyze and improve their strategies more efficiently.'
              )}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">{t('经历', 'Experience')}</h2>
          <div className="space-y-4">
            {timeline[lang].map((item) => (
              <div key={item.period} className="flex gap-4">
                <div className="w-24 flex-shrink-0 text-sm text-accent font-medium">
                  {item.period}
                </div>
                <div className="flex-1 p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t('当前专注', 'Current Focus')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium mb-2">{t('自营交易', 'Proprietary Trading')}</h3>
              <p className="text-sm text-muted">
                {t('在Prop Firm进行自营交易，持续优化交易策略', 'Trading with Prop Firm capital, continuously optimizing trading strategies')}
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium mb-2">{t('AI产品开发', 'AI Product Development')}</h3>
              <p className="text-sm text-muted">
                {t('开发AI交易复盘工具，用技术解决交易痛点', 'Building AI trading journal tools to solve trader pain points')}
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium mb-2">{t('自媒体', 'Content Creation')}</h3>
              <p className="text-sm text-muted">
                {t('持续输出交易、创业相关的内容', 'Continuously creating content about trading and entrepreneurship')}
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium mb-2">{t('一人公司', 'Solopreneur')}</h3>
              <p className="text-sm text-muted">
                {t('探索最小化运营模式，用AI放大个人能力', 'Exploring minimal operation models, using AI to amplify personal capabilities')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
