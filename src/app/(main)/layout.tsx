import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import LenisProvider from "@/components/common/lenis-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LenisProvider>
        <Navbar />
        {children}
        <Footer />
      </LenisProvider>
    </>
  );
}
