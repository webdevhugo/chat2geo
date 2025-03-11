import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // 直接从 URL 中获取 code
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const returnTo = url.searchParams.get("return_to");
    
    // 使用当前请求的 host 构建基础 URL
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;
    
    if (!code) {
      return NextResponse.redirect(`${baseUrl}/login?error=no_code`);
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Session exchange error:', error);
      return NextResponse.redirect(`${baseUrl}/login?error=${error.message}`);
    }

    if (returnTo) {
      return NextResponse.redirect(`${baseUrl}/${returnTo}`);
    }

    return NextResponse.redirect(baseUrl);
  } catch (error) {
    console.error('Auth callback error:', error);
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    return NextResponse.redirect(`${baseUrl}/login?error=unknown_error`);
  }
}