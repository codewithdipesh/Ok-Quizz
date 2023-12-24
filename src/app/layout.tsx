import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Provider from '@/components/ui/Provider'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ok-Quizz',
  description: 'Your Quiz Partner to sharpe your Knowledge about any topic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={
        cn(inter.className,
          'antialiased min-h-screen pt-16 ')
      }>
        <Provider>
        <Navbar/>
        {children}
        </Provider>
       
        </body>
    </html>
  )
}
