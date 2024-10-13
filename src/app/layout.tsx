import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/nav-bar";
import Footer from "@/components/shared/footer";
import PageTransition from "@/components/framer-motion/transition";
import { cn } from "@/lib/utils";
import { productSansRegular } from "@/lib/custom-fonts";

export const metadata: Metadata = {
  title: "UX Enric",
  description: "Hej. I'm Enric. A Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `text-product-sans-regular antialiased flex flex-col text-white h-[100dvh] overflow-y-auto w-full overflow-x-hidden`,
          productSansRegular.className
        )}
      >
        <PageTransition className="flex flex-col items-center w-full">
          <NavBar />
          <main className="min-h-[100vh] w-full">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
