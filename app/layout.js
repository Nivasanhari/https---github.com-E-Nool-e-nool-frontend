import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Nool',
  description: 'The Easiest Way to Find Any Book',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <div className="footer_bg">
       {/* <Footer/> */}
        </div>
      </body>
    </html>
  )
}