import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider, ThemeProvider } from '@/components/LanguageContext'

export const metadata: Metadata = {
  title: 'Zhixun Chen | 陈峙寻',
  description: 'Solopreneur | Prop Firm Trader | Content Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
