import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopBar from "@/components/top-bar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import SchemaMarkup from "@/components/schema-markup";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";
import { SITE_URL } from "@/constants/contact";

const SITE_TITLE = "Arden 360 | MSP, VoIP, Security & AV Solutions";
const SITE_DESCRIPTION =
  "Professional IT managed services, VoIP, network cabling, audio visual, and security solutions for your business.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Arden 360",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arden 360 enterprise technology services and managed IT solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/arden-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/arden-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/arden-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/arden-logo.png",
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NCTX6BLQ";
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-Y1DQKZ9LX5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <head>
        <Script
          id="ga-script-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-script-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <TopBar />
        <Header />
        <main className="flex-1 pt-[104px]">{children}</main>
        <Footer />
        <Analytics />
        <WebVitalsReporter />
      </body>
    </html>
  );
}
