'use client'

import { useLanguage } from '@/components/LanguageContext'
import Link from 'next/link'

const projects = {
  'ai-trading-journal': {
    name: 'AI Trading Journal',
    nameZh: 'AI交易复盘工具',
    date: '2026',
    description: 'Using AI to help traders automatically analyze trading records, identify issues and provide improvement suggestions.',
    descriptionZh: '利用AI技术帮助交易者自动分析交易记录，识别问题并提供改进建议。',
    role: 'Full-Stack Developer',
    roleZh: '全栈开发者',
    tech: ['Next.js', 'React', 'TypeScript', 'OpenAI API', 'Supabase'],
    problem: 'Traders often struggle to analyze their trading history efficiently. Manual review is time-consuming and prone to missing patterns.',
    problemZh: '交易者经常难以高效分析他们的交易历史。手动复盘耗时且容易遗漏模式。',
    solution: 'Built an AI-powered trading journal that automatically analyzes trade records, identifies patterns, and provides actionable improvement suggestions.',
    solutionZh: '构建了一个AI驱动的交易复盘工具，自动分析交易记录，识别模式，并提供可操作的改进建议。',
    modules: [
      'Automated trade record analysis',
      'Pattern recognition and insights',
      'Performance metrics dashboard',
      'AI-powered improvement suggestions',
    ],
    modulesZh: [
      '自动化交易记录分析',
      '模式识别与洞察',
      '绩效指标仪表板',
      'AI驱动的改进建议',
    ],
    github: '',
  },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { language } = useLanguage() || { language: 'en' as const }
  const isZh = language === 'zh'
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/#projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl font-bold mt-8">Project not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zixun-900 dark:text-zinc-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/#projects" className="text-blue-600 dark:text-blue-400 hover:underline">
          {isZh ? '← 返回项目' : '← Back to Projects'}
        </Link>

        <h1 className="text-4xl font-bold mt-8 mb-2">
          {isZh ? project.nameZh : project.name}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">{project.date}</p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mb-8"
          >
            {isZh ? '查看源码' : 'View Source'}
          </a>
        )}

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          {isZh ? project.descriptionZh : project.description}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{isZh ? '角色' : 'Role'}</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            {isZh ? project.roleZh : project.role}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{isZh ? '技术栈' : 'Tech Stack'}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{isZh ? '问题' : 'Problem'}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isZh ? project.problemZh : project.problem}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{isZh ? '解决方案' : 'Solution'}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isZh ? project.solutionZh : project.solution}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{isZh ? '核心功能' : 'Key Features'}</h2>
          <ul className="space-y-2">
            {(isZh ? project.modulesZh : project.modules).map((m: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
