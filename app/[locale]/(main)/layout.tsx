import localFont from "next/font/local";
import "./styles.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "@blocknote/mantine/style.css";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { getUserProfile } from "./actions/get-user-profile";
import ClientWrapper from "@/components/client-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: "Chat2Geo",
  description: "AI-powered geospatial analyticse",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: authResults, error } = await supabase.auth.getUser();
  if (error || !authResults?.user) {
    redirect("/login");
  }
  const userProfile = await getUserProfile();
  return (
    <html lang={locale} suppressHydrationWarning>
      <TooltipProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans`}
        >
          <I18nProviderClient locale={locale}>
            <ClientWrapper userProfile={userProfile}>{children}</ClientWrapper>
          </I18nProviderClient>
          <Analytics />
        </body>
      </TooltipProvider>
    </html>
  );
}
