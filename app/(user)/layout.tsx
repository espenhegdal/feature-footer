import NarrowHeader from 'components/shared/NarrowHeader'
import WideHeader from 'components/shared/WideHeader'
import footer from 'components/shared/footer'
import '../../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <WideHeader />
        <NarrowHeader />
        <footer />
        {children}
      </body>
    </html>
  )
}
