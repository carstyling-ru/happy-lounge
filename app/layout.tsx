import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Montserrat } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

const brandFont = Montserrat({
  subsets: ['latin'],
  weight: ['200', '900'],
  variable: '--font-brand',
  display: 'swap',
})

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isProjectPagesRepo =
  process.env.GITHUB_ACTIONS === 'true' &&
  repoName.length > 0 &&
  !repoName.endsWith('.github.io')
const iconPath = isProjectPagesRepo ? `/${repoName}/icon.svg` : '/icon.svg'

export const metadata: Metadata = {
  title: 'Happy Lounge | Capsule Hotels in Tbilisi & Batumi',
  description:
    'Discover Happy Lounge capsule hotels in Tbilisi and Batumi, Georgia. Private capsules, free Wi-Fi, and a 24-hour front desk.',
  generator: 'v0.app',
  icons: {
    icon: iconPath,
    shortcut: iconPath,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${manrope.variable} ${brandFont.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
