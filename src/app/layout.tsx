import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/nav-bar";
import Footer from "@/components/shared/footer";
import PageTransition from "@/components/framer-motion/transition";
import { cn } from "@/lib/utils";
import { productSansRegular } from "@/lib/custom-fonts";
import Script from "next/script";
import GlassNavBar from "@/components/shared/glass-nav-bar";

export const metadata: Metadata = {
  title: "Hej. I'm Enric. A UX Designer.",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="17c66acb-f7a9-4176-a42f-8ee99cc17557"
        />
      )}
      <body
        className={cn(
          `text-product-sans-regular antialiased flex flex-col text-white h-[100dvh] overflow-y-auto w-full overflow-x-hidden`,
          productSansRegular.className
        )}
      >
        <PageTransition className="flex flex-col items-center w-screen overflow-x-clip">
          <GlassNavBar />
          <main className="min-h-[100vh] w-full">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
