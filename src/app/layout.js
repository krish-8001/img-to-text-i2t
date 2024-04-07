import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image To Text Converter",
  description: "Convert images to text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
        <link rel="shortcut icon" type="image/png" href="https://image-to-text-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimaging.eb7d2204.png&w=64&q=75" />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
