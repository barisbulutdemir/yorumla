import type { Metadata } from 'next'
import './globals.css'
import NavbarBase from '@/components/uiParts/navbar/NavbarBase'
import FooterBase from '@/components/uiParts/footer/FooterBase'
import { store } from '@/redux/store'
import Provider from '@/redux/provider'
import { Toaster } from '@/components/ui/toaster'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Provider >

      <div className="flex flex-col min-h-screen bg-slate-200/60">
          <NavbarBase />
          <main className="flex-grow">
            
          {children}
          </main>
          
          <FooterBase />
        </div>
        <Toaster />
        </Provider>

        </body>
    </html>
  )
}
