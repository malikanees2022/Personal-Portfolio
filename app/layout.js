import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { ThemeProvider } from "./context/themeContext";
import Main from "./Main";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Anees Ur Rehman – Full Stack Developer",
  description: "Professional web developer with 3+ years of experience in React, Next.js, and MERN stack.",

  openGraph: {
    title: "Anees Ur Rehman – Full Stack Developer",
    description: "Professional web developer with 3+ years of experience in React, Next.js, and MERN stack.",
    url: "https://aneesurrehman.vercel.app/portfolio",
    siteName: "Anees Portfolio",
    images: [
      {
        url: "https://aneesurrehman.vercel.app/cover.png", 
        width: 1200,
        height: 630,
        alt: "Anees Ur Rehman Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anees Ur Rehman – Full Stack Developer",
    description: "Professional web developer with 3+ years of experience in React, Next.js, and MERN stack.",
    images: ["https://aneesurrehman.vercel.app/cover.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <Main>
        <Navbar/>
        {children}
        <Footer/>
        </Main>
        </ThemeProvider>
         <Toaster position="top-right" />
        </body>
    </html>
  );
}
