import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite'
})

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request, I18nMiddleware(request));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
