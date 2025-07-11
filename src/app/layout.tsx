import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arijit-samal.vercel.app"),
  title: "Arijit Samal | Data Scientist & AI Engineer",
  description: "Portfolio of Arijit Samal - Data Scientist, AI Engineer, and ML Expert. Explore my journey, projects, and expertise in machine learning, deep learning, and artificial intelligence.",
  keywords: ["Arijit Samal", "Data Scientist", "AI Engineer", "Machine Learning", "Deep Learning", "Portfolio", "BDMA", "Erasmus Mundus"],
  authors: [{ name: "Arijit Samal" }],
  creator: "Arijit Samal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arijit-samal.vercel.app",
    siteName: "Arijit Samal Portfolio",
    title: "Arijit Samal | Data Scientist & AI Engineer",
    description: "Explore the portfolio of Arijit Samal, featuring cutting-edge projects in AI, ML, and data science.",
    images: [
      {
        url: "/images/new_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Arijit Samal - Data Scientist & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arijit Samal | Data Scientist & AI Engineer",
    description: "Explore the portfolio of Arijit Samal, featuring cutting-edge projects in AI, ML, and data science.",
    images: ["/images/new_1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
