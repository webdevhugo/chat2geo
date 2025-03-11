import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get("code");
    const returnTo = request.nextUrl.searchParams.get("return_to");
    
    // 从请求中获取实际的 origin
    const origin = request.headers.get('origin') || request.nextUrl.origin;
    
    if (!code) {
      return NextResponse.redirect(new URL('/login', origin));
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(new URL(`/login?error=${error.message}`, origin));
    }

    if (returnTo) {
      return NextResponse.redirect(new URL(`/${returnTo}`, origin));
    }

    // 重定向到首页
    return NextResponse.redirect(origin);
  } catch (error) {
    console.error('Auth callback error:', error);
    const origin = request.headers.get('origin') || request.nextUrl.origin;
    return NextResponse.redirect(new URL('/login?error=unknown_error', origin));
  }
}