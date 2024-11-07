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
  title: "MHanak\'s website",
  description: "A place for me to showcase all the various projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
	  <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
	   <ThemeProvider attribute="class"> {children} </ThemeProvider>
      </body>
    </html>
  );
}
