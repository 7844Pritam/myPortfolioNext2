import { Inter } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/client-view/common-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pritam Portfolio",
  description: "Created by Pritam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Add any additional meta tags or links here if needed */}</head>
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
