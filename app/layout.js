'use client'

import './globals.css'
import Script from 'next/script'
import { useEffect } from 'react'

export const metadata = {
  title: 'Cat Lagman - Product Designer',
  description: 'A multi-disciplinary UX/Product Designer and artist based in San Francisco, CA.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/site.webmanifest',
}

function MouseTracker() {
  useEffect(() => {
    let targetX = 50
    let targetY = 50
    let currentX = 50
    let currentY = 50
    let animationId

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 100
      targetY = (e.clientY / window.innerHeight) * 100
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      document.body.style.setProperty('--mouse-x', `${currentX}%`)
      document.body.style.setProperty('--mouse-y', `${currentY}%`)
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return null
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3KFEETBSX0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3KFEETBSX0');
          `}
        </Script>
      </head>
      <body>
        <MouseTracker />
        {children}
      </body>
    </html>
  )
}
