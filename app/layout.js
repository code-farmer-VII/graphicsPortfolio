import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Link from "next/link";





export const metadata = {
  title: "Temesgen Gonfa",
  description: "I am graphics designer. I am temesgen gonfa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
