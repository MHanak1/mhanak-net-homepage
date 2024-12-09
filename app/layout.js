import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | MHanak.net",
    default: "MHanak.net",
  },
  description: "The personal website of Michał Hanak. It is place for me to showcase all my various projects",
  authors: {name: "Michał Hanak"},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
	  <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-800 bg-gray-300 dark:text-white text-black overflow-x-hidden font-[family-name:var(--font-geist-sans)]`}>
	   <ThemeProvider attribute="class"> {children} </ThemeProvider>
      </body>
    </html>
  );
}
