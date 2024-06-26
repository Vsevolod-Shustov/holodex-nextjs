import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holodex Nextjs',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='app dark'>
          <div className='styles-wrapper dark:bg-slate-900 dark:text-slate-100'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
