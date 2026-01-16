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
  metadataBase: new URL("https://docs.corespeed.io"),
  title: {
    default: "CoreSpeed Documentation",
    template: "%s | CoreSpeed",
  },
  description: "Documentation for CoreSpeed",
  keywords: [
    "CoreSpeed",
    "CoreSpeed Documentation",
    "CoreSpeed API",
    "CoreSpeed SDK",
    "CoreSpeed Library",
    "CoreSpeed Framework",
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
    url: "https://docs.corespeed.io",
    siteName: "CoreSpeed Documentation",
    title: "CoreSpeed Documentation",
    description: "Documentation for CoreSpeed",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreSpeed Documentation",
    description: "Documentation for CoreSpeed",
    creator: "@CoreSpeed_Inc",
  },
  category: "technology",
  alternates: {
    canonical: "https://docs.corespeed.io",
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
