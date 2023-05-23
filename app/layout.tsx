import './styles/globals.css'

export const metadata = {
  title: 'Inspirational Quote Generator',
  description: 'Generated quotes just by clicking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
