// import type { Metadata } from "next";

// import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background min-h-screen relative">
      <Header />
      <main className="flex-1 flex-col flex min-h-[calc(100dvh-1dvh)] pt-[74px]">
        {children}
        <div className="h-[100px]" />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
