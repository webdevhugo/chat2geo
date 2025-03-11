'use server'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  try {
    const email = formData.get('email') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const password = formData.get('password') as string

    if (!firstName || !lastName || !email || !password) {
      return { error: "All fields are required" }
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    if (error) {
      if (error.message.includes('already registered')) {
        return { 
          error: "此邮箱已注册，请直接登录或检查邮箱完成验证",
          code: 'EMAIL_EXISTS'
        }
      }
      return { error: error.message }
    }

    // 注册成功，返回验证提示
    return { 
      success: true,
      requiresEmailVerification: true,
      email: email // 可以用来显示在验证页面
    }
  } catch (error) {
    console.error("Signup error:", error)
    return { error: "An unexpected error occurred" }
  }
}