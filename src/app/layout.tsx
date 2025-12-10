import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Epic Campus - Learn Japanese & Korean in Sri Lanka",
  description: "Sri Lanka's premier platform for Japanese and Korean language learning. Expert instructors, live classes, and flexible payments in LKR.",
  keywords: "Japanese course Sri Lanka, Korean language learning, JLPT preparation, TOPIK, live classes, online language school",
  authors: [{ name: "Epic Campus" }],
  openGraph: {
    title: "Epic Campus - Learn Japanese & Korean in Sri Lanka",
    description: "Master Japanese and Korean with native speakers. Live interactive classes, JLPT & TOPIK prep, and flexible LKR payments.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EpicCampusLK",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
