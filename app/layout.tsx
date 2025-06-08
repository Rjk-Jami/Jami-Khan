import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raihan Jami Khan - Full Stack Developer',
  description: 'Professional MERN Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Building scalable and responsive web applications.',
  keywords: 'Full Stack Developer, MERN Stack, React.js, Next.js, Node.js, JavaScript, TypeScript, Web Developer',
  authors: [{ name: 'Raihan Jami Khan' }],
  creator: 'Raihan Jami Khan',
  openGraph: {
    title: 'Raihan Jami Khan - Full Stack Developer',
    description: 'Professional MERN Stack Developer specializing in modern web technologies',
    url: 'https://raihan-jami-khan.vercel.app',
    siteName: 'Raihan Jami Khan Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dpphpbkkz/image/upload/v1739048399/IMG_0653_3-min_dojsxy.png',
        width: 1200,
        height: 630,
        alt: 'Raihan Jami Khan - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raihan Jami Khan - Full Stack Developer',
    description: 'Professional MERN Stack Developer specializing in modern web technologies',
    images: ['https://res.cloudinary.com/dpphpbkkz/image/upload/v1739048399/IMG_0653_3-min_dojsxy.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}