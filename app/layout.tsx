import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { AppThemeProvider } from './_theme/ThemeContext'
import { NavigationBar } from './_components/NavigationBar'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'

const roboto = Roboto({ weight: ['300', '400', '500'], subsets: ['latin'] })

const authors: Author[] = [
  {
    name: 'usrmaia',
    url: 'github.com/usrmaia'
  },
]

export const metadata: Metadata = {
  title: 'Lovelace Lines',
  description: 'Desenvolvimento de software, tecnologia e ensino de programação',
  applicationName: 'Lovelace Lines',
  keywords: ['software', 'tecnologia', 'programação', 'ensino', 'desenvolvimento', 'Next.JS', 'React', 'TypeScript', '.Net', 'C#', 'CSharp'],
  authors: authors,
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/shortcut-icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppThemeProvider>
          <NavigationBar />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
