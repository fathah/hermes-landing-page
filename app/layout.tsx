import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono, Silkscreen } from "next/font/google";
import Script from "next/script";
import ToastProvider from "./components/ToastProvider";
import { SITE_URL, GITHUB_URL } from "./data/content";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TITLE = "Hermes One - Your AI Agent, Always Improving";
const DESCRIPTION =
  "Hermes One is a self-improving AI assistant with tool use, multi-platform messaging, and a closed learning loop. Free, open source, and available for macOS, Windows, and Linux.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Hermes One",
  },
  description: DESCRIPTION,
  applicationName: "Hermes One",
  keywords: [
    "Hermes One",
    "AI agent",
    "autonomous agent",
    "self-improving AI",
    "AI assistant",
    "open source AI",
    "local AI agent",
    "tool use",
    "agent platform",
    "macOS",
    "Windows",
    "Linux",
  ],
  authors: [{ name: "Hermes One" }],
  creator: "Hermes One",
  publisher: "Hermes One",
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    type: "website",
    siteName: "Hermes One",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/thumb.png",
        width: 1200,
        height: 630,
        alt: "Hermes One - Your AI Agent, Always Improving",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@HermesOneApp",
    creator: "@HermesOneApp",
    images: ["/thumb.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmMono.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V55J8Z2MT2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V55J8Z2MT2');
        `}
      </Script>
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Hermes One",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "macOS, Windows, Linux",
            url: SITE_URL,
            description: DESCRIPTION,
            image: `${SITE_URL}/thumb.png`,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            license: "https://opensource.org/licenses/MIT",
            sameAs: [
              GITHUB_URL,
              "https://x.com/HermesOneApp",
              "https://discord.gg/HAxktyvy",
            ],
          }),
        }}
      />
      <body className="min-h-full flex flex-col">
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
