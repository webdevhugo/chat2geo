"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useTransition } from "react";

import { signup } from "@/app/[locale]/(auth)/signup/actions";
import PrivacyPolicy from "@/components/notices/privacy-policy";
import TermsOfService from "@/components/notices/terms-of-services";
import { useScopedI18n } from '@/locales/client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function Signup() {
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const [openTerms, setOpenTerms] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const t = useScopedI18n('signup')

    // 添加一个处理输入变化的函数
    const handleInputChange = () => {
        // 当用户开始输入时，清除错误消息
        if (error) {
            setError(null);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        // 添加密码强度验证
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError(t('passwordStrengthError'));
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError(t('passwordMismatch'));
            setLoading(false);
            return;
        }

        try {
            const result = await signup(formData);

            if (result?.error) {
                setError(result.error);
            } else if (result?.success) {
                // 注册成功，重定向到验证提示页面
                startTransition(() => {
                    // 将邮箱地址作为参数传递给验证页面
                    router.push(`/signup/success?email=${encodeURIComponent(result.email)}`);
                });
            }
        } catch (err) {
            setError(t('networkError'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <TermsOfService open={openTerms} onOpenChange={setOpenTerms} />
            <PrivacyPolicy open={openPrivacy} onOpenChange={setOpenPrivacy} />

            {/* Main container for md+ screens - Using same grid layout as login page */}
            <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {/* Left column with background and tagline - Matching login page style */}
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-gray-950" />
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                {t('tagline')}
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* Right column with the signup form - Matching login page style */}
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {t('title')}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {t('subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4" onChange={handleInputChange}>
                            {/* First Name */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="firstName">{t('firstName')}</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="John"
                                    required
                                    disabled={loading || isPending}
                                    onFocus={handleInputChange}
                                />
                            </div>

                            {/* Last Name */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="lastName">{t('lastName')}</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    required
                                    disabled={loading || isPending}
                                    onFocus={handleInputChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="email">{t('email')}</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    autoComplete="email"
                                    required
                                    disabled={loading || isPending}
                                    onFocus={handleInputChange}
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="password">{t('password')}</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    required
                                    disabled={loading || isPending}
                                    onFocus={handleInputChange}
                                    onChange={handleInputChange}
                                />
                                <p className="text-xs text-muted-foreground">
                                    {t('passwordRequirements')}
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="confirmPassword">{t('confirmPassword')}</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    required
                                    disabled={loading || isPending}
                                    onFocus={handleInputChange}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Error Alert */}
                            {error && (
                                <p className="text-destructive text-sm">
                                    <strong>{t('errorLabel')}</strong> {error}
                                </p>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={loading || isPending}
                                className="w-full"
                            >
                                {(loading || isPending) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {t('signUpButton')}
                            </Button>
                        </form>

                        {/* Sign in link */}
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                {t('alreadyHaveAccount')} <Link href="/login" className="text-primary hover:underline">{t('signIn')}</Link>
                            </p>
                        </div>

                        {/* Terms and Privacy - Matching login page style */}
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            {t('termsText')}{" "}
                            <button
                                className="underline underline-offset-4 hover:text-primary"
                                onClick={() => setOpenTerms(true)}
                            >
                                {t('termsLink')}
                            </button>{" "}
                            {t('andText')}{" "}
                            <button
                                className="underline underline-offset-4 hover:text-primary"
                                onClick={() => setOpenPrivacy(true)}
                            >
                                {t('privacyLink')}
                            </button>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}