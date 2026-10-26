import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],             
  weight: ["400", "600", "700"],   
  variable: "--font-poppins",                    
  display: "swap",                 
});


export const metadata: Metadata = {
  title: {
    default: "Wixyl_Code | Brand Designer & Full-Stack Developer", 
    template: "%s | Wixyl_Code", 
  },
  description:
    "Brand identity, UI/UX, web and mobile app development by Wixyl_Code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
   
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}