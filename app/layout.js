import './globals.css'

export const metadata = {
  title: 'Catherine Lagman - Product Designer',
  description: 'A multi-disciplinary UX/Product Designer and artist based in San Francisco, CA.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
