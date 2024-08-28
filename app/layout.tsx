import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { GoogleOAuthProvider } from '@react-oauth/google';

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const inter = Inter({ subsets: ["latin"] });

const clientId: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <html lang="en">
      <body className={`${epilogue.className} ${inter.className} font-epilogue`}>
        <Navbar/>
        <div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
    </GoogleOAuthProvider>
  );
}
