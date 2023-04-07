'use client'

import { roboto } from "./fonts";

import { NavBar, Footer } from "@/components/";

import '../styles/globals.css';

// const Body = styled.body`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;

// ` 

export default function RootLayout ({children}:{children:React.ReactNode;}) {
  return (
    <html lang="es">
      <head>
        <title>SETROC Blog</title>
      </head>
      <body className={`${roboto.className} m-0 p-0 box-border flex flex-col w-4/5 mx-auto min-h-screen`}>
        <NavBar />
        { children }
        <Footer />
      </body>
    </html>
  )
}