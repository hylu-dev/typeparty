import type { NextPage } from 'next'
import Navbar from './navbar'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-[1000px] h-screen p-2 md:p-12 mx-auto">
      <Navbar />
      <div className="grow p-4">
        {children}
      </div>

    </div>
  )
}

export default Layout