'use client'

import Link from "next/link"

import { sedgwick } from "@/app/fonts"

export const NavBar = () => {
  return (
    <nav className="flex justify-center py-4">
      <h1 className={`${sedgwick.className} text-4xl font-bold`}><Link href='/'>SETROC BLOG</Link></h1>
    </nav>
  )
}
