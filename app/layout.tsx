import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono, Silkscreen } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "Hermes One - Your AI Agent, Always Improving",
  description:
    "Hermes is a self-improving AI assistant with tool use, multi-platform messaging, and a closed learning loop. Available for macOS, Windows, and Linux.",

  openGraph: {
    images: ["https://hermesagents.cc/thumb.png"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
