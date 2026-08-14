import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
        <body className="min-h-full flex flex-col">
        <ThemeProvider attribute='class'>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
