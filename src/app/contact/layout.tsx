import Container from "@/components/common/container";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="pt-20"></div>
      {children}
    </Container>
  );
}
