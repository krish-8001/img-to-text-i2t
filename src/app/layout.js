import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "image to text converter ",
  description: "image to text converter ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
        <link rel="shortcut icon" type="image/png" href="../../public/text-to-speech.png" />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
