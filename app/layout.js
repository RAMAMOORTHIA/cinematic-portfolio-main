import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL } from '@/lib/siteConfig';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ramamoorthi | Full Stack Developer',
    template: '%s | Ramamoorthi',
  },
  description:
  'Full Stack Developer with 2+ years of experience building scalable web applications, ticketing systems, and dynamic dashboards using Laravel, React, PHP, MySQL, and JavaScript. Available worldwide for freelance projects and collaborations.',

keywords: [
  'Ramamoorthi',
  'Full Stack Developer',
  'Laravel Developer',
  'PHP Developer',
  'React Developer',
  'JavaScript Developer',
  'MySQL',
  'Ticketing System',
  'Dashboard Development',
  'Web Application Developer',
  'Frontend Developer',
  'Backend Developer',
  'Portfolio',
  'India',
],
  authors: [{ name: 'Ramamoorthi', url: SITE_URL }],
  creator: 'Ramamoorthi',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Ramamoorthi',
    title: 'Ramamoorthi | Full Stack Developer',
    description:
  'Full Stack Developer with 2+ years of experience building scalable web applications, ticketing systems, and dynamic dashboards using Laravel, React, PHP, MySQL, and JavaScript. Available worldwide for freelance projects and collaborations.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ramamoorthi | Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramamoorthi | Full Stack Developer',
   description:
  'Full Stack Developer with 2+ years of experience building scalable web applications, ticketing systems, and dynamic dashboards using Laravel, React, PHP, MySQL, and JavaScript. Available worldwide for freelance projects and collaborations.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' },
      { url: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicons/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ramamoorthi',
              url: SITE_URL,
              email: 'ramayyanar2000@gmail.com',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/RAMAMOORTHIA',
                'https://www.linkedin.com/in/',
                'https://medium.com/',
                'https://www.instagram.com/ram_ayyanar_/',
                'https://www.youtube.com/',
              ],
            }),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
