import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import LenisProvider from "@/components/common/lenis-provider";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <LenisProvider>
        <Navbar />
        {children}
        <Footer />
      </LenisProvider>
    </Suspense>
  );
}
