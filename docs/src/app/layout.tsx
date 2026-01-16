import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/cn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zypher.corespeed.io"),
  title: {
    default: "Zypher Agent Framework",
    template: "%s | Zypher Agent Framework",
  },
  description:
    "A minimal yet powerful framework for creating AI agents with full control over tools, providers, and execution flow.",
  keywords: [
    "AI agents",
    "agent framework",
    "agent development",
    "agent tools",
    "agent providers",
    "agent execution",
    "agent development",
  ],
  authors: [{ name: "CoreSpeed Team" }],
  creator: "CoreSpeed",
  publisher: "CoreSpeed",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zypher.corespeed.io",
    siteName: "Zypher Agent Framework",
    title: "Zypher Agent Framework",
    description:
      "A minimal yet powerful framework for creating AI agents with full control over tools, providers, and execution flow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zypher Agent Framework",
    description:
      "A minimal yet powerful framework for creating AI agents with full control over tools, providers, and execution flow.",
    creator: "@CoreSpeed_Inc",
  },
  category: "technology",
  alternates: {
    canonical: "https://zypher.corespeed.io",
  },
};
export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://static.corespeed.io/fonts/berkeley-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn("flex flex-col min-h-screen", inter.className)}>
        <RootProvider theme={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
