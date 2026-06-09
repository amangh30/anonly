import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

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
        </ThemeProvider>
        </body>
    </html>
  );
}
