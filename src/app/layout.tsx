import type { Metadata } from 'next'
import './globals.css'
import { GlobalProvider } from '@/context/GlobalContext'

export const metadata: Metadata = {
  title: 'Fernando Medellin Portfolio',
  description: 'Portfolio'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}
