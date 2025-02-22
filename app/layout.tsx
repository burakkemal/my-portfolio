import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Burak Kemal Koyuncu - Portfolio',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: '/guncelResimForIcon.jpg',
    apple: '/guncelResimForIcon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
