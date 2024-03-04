import type { Metadata } from "next";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "./globals.css";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title:
    "AcademicAtlas - Замовлення курсових, дипломних, бакалавських, магітерських робіт та інше",
  description:
    "AcademicAtlas - це сайт, який займається виробництвом курсових робіт, дипломів та інших видів наукових робіт на замовлення. Наш сервіс допомагає студентам отримувати якісні та оригінальні матеріали для своїх академічних потреб.",
  keywords:
    "AcademicAtlas, замовлення курсових робіт, замовлення дипломних робіт, наукові роботи, курсові роботи, дипломні роботи, студентські роботи, виробництво на замовлення",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
