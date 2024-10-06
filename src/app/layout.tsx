import type { Metadata } from 'next'
import { Suspense } from 'react'
import localFont from 'next/font/local'
import Providers from '@/lib/providers/RQProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Loading from './loading'
import '@/styles/globals.css'
import ScrollTop from '@/components/layout/ScrollTop'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: 'League Of Legends',
  description: 'Riot API를 활용한 리그 오브 레전드 정보 앱 만들기'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/icons/lol.png" sizes="any" />
      <Providers>
        <body className={`${pretendard.variable} antialiased bg-background text-foreground`}>
          <Suspense fallback={<Loading />}>
            <div className="wrap">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </Suspense>
          <ScrollTop />
        </body>
      </Providers>
    </html>
  )
}
