import localFont from "next/font/local";
import "./styles.css";
import { Toaster } from "react-hot-toast";
import ToastMessage from "@/features/ui/toast-message";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { I18nProviderClient } from '@/locales/client'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata for the root layout
export const metadata = {
  title: "Login to Chat2Geo",
  description: "Login to access AI-powered geospatial analytics",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <ToastMessage />
            {children}
          </ThemeProvider>
        </I18nProviderClient>
        <Analytics />
      </body>
    </html>
  );
}
