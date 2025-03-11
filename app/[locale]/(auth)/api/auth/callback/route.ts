import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get("code");
    const returnTo = request.nextUrl.searchParams.get("return_to");
    
    // 确保 baseUrl 有值，并添加类型断言
    const baseUrl = process.env.BASE_URL as string;
    
    if (!baseUrl) {
      throw new Error('BASE_URL environment variable is not defined');
    }

    if (!code) {
      return NextResponse.redirect(new URL('/login', baseUrl));
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(new URL(`/login?error=${error.message}`, baseUrl));
    }

    if (returnTo) {
      return NextResponse.redirect(new URL(`/${returnTo}`, baseUrl));
    }

    return NextResponse.redirect(baseUrl);
  } catch (error) {
    console.error('Auth callback error:', error);
    const fallbackUrl = process.env.BASE_URL || 'http://localhost:3000';
    return NextResponse.redirect(new URL('/login?error=unknown_error', fallbackUrl));
  }
}