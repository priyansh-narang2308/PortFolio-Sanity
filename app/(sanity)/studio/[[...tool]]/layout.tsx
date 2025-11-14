import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Priyansh Narang | Sanity Studio",
  description: "This is the Studio part of Sanity Backend",
};

export default function SanityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
