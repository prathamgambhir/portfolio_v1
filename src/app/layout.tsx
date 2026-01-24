import type { Metadata } from "next";
import { Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible while the font loads
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-poppins', // Define a CSS variable for Tailwind or CSS modules
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible while the font loads
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-space-mono', // Define a CSS variable for Tailwind or CSS modules
})

export const metadata: Metadata = {
  metadataBase: new URL("https://prathamgambhir.vercel.app"),
  title: {
    default: "Pratham Gambhir | Full-Stack Developer & Software Engineer",
    template: "%s | Pratham Gambhir",
  },
  description: "Pratham Gambhir is a full-stack developer and software engineer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. View my portfolio, projects, skills, and experience.",
  authors: {
    name: "Pratham Gambhir",
    url: "https://prathamgambhir.vercel.app",
  },
  creator: "Pratham Gambhir",
  publisher: "Pratham Gambhir",
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
  keywords: [
    "Pratham Gambhir",
    "full-stack developer",
    "software engineer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "portfolio",
    "web development",
    "frontend developer",
    "backend developer",
    "full stack web developer",
    "React portfolio",
    "Next.js portfolio",
    "software developer portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prathamgambhir.vercel.app",
    siteName: "Pratham Gambhir Portfolio",
    title: "Pratham Gambhir | Full-Stack Developer & Software Engineer",
    description: "Pratham Gambhir is a full-stack developer and software engineer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Pratham Gambhir - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prathamgambhir",
    creator: "@prathamgambhir",
    title: "Pratham Gambhir | Full-Stack Developer & Software Engineer",
    description: "Pratham Gambhir is a full-stack developer and software engineer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Pratham Gambhir - Full-Stack Developer",
      },
    ],
  },
  icons: [
    {
      url: "/avatar.jpeg",
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
    },
    {
      url: "/avatar.jpeg",
      rel: "apple-touch-icon",
      type: "image/jpeg",
      sizes: "180x180",
    },
  ],
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${spaceMono.className}`}>
      <body
        className={`antialiased`} //${geistSans.variable} ${geistMono.variable} 
      >
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
