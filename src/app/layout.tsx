import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avi Gupta",
  description: "Avi Gupta's personal website",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
