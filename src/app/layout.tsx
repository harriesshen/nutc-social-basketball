import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "../../components/Header";
import navList from "./navList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NUTCIM Basketball",
  description: "NUTCIM Basketball ,NUTC,Basketball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header navList={navList} />
        <div className={styles.children}>{children}</div>
      </body>
    </html>
  );
}
