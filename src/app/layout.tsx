"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { metadata } from "./metadata";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandDialogDemo } from "@/components/command-dialog";
import { usePathname } from "next/navigation";  
import { AuthProvider } from "@/hooks/auth";

import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();  

  useEffect(() => {
    const token = localStorage.getItem("@linkEats:token");

    if (!token && pathname !== "/login") {
      router.push("/login");
    }
  }, [router, pathname]);

  return (
    <html lang="en">
      <head>
      <title>Link-Eats</title>
      <meta name="description" content={metadata.description ?? "Default description"} />

      </head>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}
      >

     <AuthProvider>
      <Toaster/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {pathname === "/login" ? (
            children
          ) : (
            <>
              <AppSidebar>{children}</AppSidebar>
              <CommandDialogDemo />
            </>
          )}
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
