import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "../styles/about.css";
import "../styles/footer.css";
import "../styles/courses.css";
import "../styles/alumni.css";
import "../styles/news.css";
import "../styles/explorers.css";
import"../styles/register.css";
import "../styles/magazine.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Citizenship and Leadership Training Centre",
  description: "Training responsible and respectable Nigerian citizens and leaders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <Script src="/js/header.js" strategy="lazyOnload" />
        <Script src="/js/slide.js" strategy="lazyOnload" />
        <Script src="/js/news.js" strategy="lazyOnload" />
        <Script src="/js/back.js" strategy="lazyOnload" />

        <button id="back-to-top" title="Back to Top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </body>
    </html>
  );
}