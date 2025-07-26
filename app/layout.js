import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Grady",
  description: "Grady A Grade Analysis Tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
      <Toaster/>
      {children}</body>
    </html>
    <Analytics/>
    </ClerkProvider>
  );
}
