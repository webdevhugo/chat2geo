import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const next = url.searchParams.get("next");
    const error = url.searchParams.get("error");
    const error_description = url.searchParams.get("error_description");
    
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    // 处理密码重置流程
    if (next === '/reset-password/confirm') {
      // 如果有错误，重定向到confirm页面并带上错误参数
      if (error) {
        return NextResponse.redirect(
          `${baseUrl}/reset-password/confirm?error=${error}&error_description=${encodeURIComponent(error_description || '')}`
        );
      }
      
      // 如果有code，处理验证
      if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          console.error('Session exchange error:', error);
          return NextResponse.redirect(
            `${baseUrl}/reset-password/confirm?error=${error.code || 'unknown'}&error_description=${encodeURIComponent(error.message)}`
          );
        }

        // 验证成功，重定向到confirm页面
        return NextResponse.redirect(`${baseUrl}/reset-password/confirm`);
      }

      // 没有code也没有error，重定向到confirm页面并带上错误参数
      return NextResponse.redirect(`${baseUrl}/reset-password/confirm?error=no_code&error_description=No verification code provided`);
    }
    
    // 非密码重置流程
    if (code) {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error('Session exchange error:', error);
        return NextResponse.redirect(`${baseUrl}/login?error=${error.message}`);
      }

      // 如果有next参数，重定向到指定页面
      if (next) {
        return NextResponse.redirect(`${baseUrl}${next}`);
      }

      // 默认重定向到首页
      return NextResponse.redirect(baseUrl);
    }

    // 没有code的情况，重定向到登录页
    return NextResponse.redirect(`${baseUrl}/login?error=no_code&error_description=No verification code provided`);

  } catch (error: any) {
    console.error('Auth callback error:', error);
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    return NextResponse.redirect(
      `${baseUrl}/login?error=unknown_error&error_description=${encodeURIComponent(error?.message || 'An unknown error occurred')}`
    );
  }
}