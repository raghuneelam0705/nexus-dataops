
import type { Metadata } from "next";
import QueryProvider from "@/components/providers/QueryProvider";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
export const metadata: Metadata = {
  title: "Nexus DataOps",
  description: "Enterprise Data Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <QueryProvider>
          <AppShell>
            {children}
          </AppShell>
        </QueryProvider>
      </body>
    </html>
  );
}
