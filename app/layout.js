import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Nool',
  description: 'The Easiest Way to Find Any Book',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="w-full m-0 p-0 relative">
        <Navbar />
        </div>
        <div className='p-2'>
          {children}
        </div>
        <div className="w-full relative footer_bg mt-2">
       <Footer/>
        </div>
      </body>
    </html>
  )
}