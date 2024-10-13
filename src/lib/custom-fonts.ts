import localFont from "next/font/local";

// Acorn fonts
export const acornRegular = localFont({
  src: "../app/fonts/acorn/Acorn-Regular.otf",
  variable: "--font-acorn-regular",
});

export const acornMedium = localFont({
  src: "../app/fonts/acorn/Acorn-Medium.otf",
  variable: "--font-acorn-medium",
});

export const acornBold = localFont({
  src: "../app/fonts/acorn/Acorn-Bold.otf",
  variable: "--font-acorn-bold",
});

// Product Sans fonts

export const productSansRegular = localFont({
  src: "../app/fonts/product-sans/Product-Sans-Regular.ttf",
  variable: "--font-product-sans-regular",
});

export const productSansItalic = localFont({
  src: "../app/fonts/product-sans/Product-Sans-Italic.ttf",
  variable: "--font-product-sans-italic",
});

export const productSansBold = localFont({
  src: "../app/fonts/product-sans/Product-Sans-Bold.ttf",
  variable: "--font-product-sans-bold",
});

export const productSansItalicBold = localFont({
  src: "../app/fonts/product-sans/Product-Sans-Bold-Italic.ttf",
  variable: "--font-product-sans-italic-bold",
});
