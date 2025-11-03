import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background min-h-screen relative overflow-x-hidden">
      <Header />
      <main className="flex-1 flex-col flex min-h-[calc(100dvh-1dvh)] pt-[74px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
