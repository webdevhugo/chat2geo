import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get("code");
    const returnTo = request.nextUrl.searchParams.get("return_to");
    
    if (!code) {
      return NextResponse.redirect(`${request.nextUrl.origin}/login?error=no_code`);
    }

    // 核心功能: 交换授权码获取会话
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(`${request.nextUrl.origin}/login?error=${error.message}`);
    }

    // 处理重定向
    if (returnTo) {
      return NextResponse.redirect(`${request.nextUrl.origin}/${returnTo}`);
    }

    return NextResponse.redirect(request.nextUrl.origin);
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(`${request.nextUrl.origin}/login?error=unknown_error`);
  }
}