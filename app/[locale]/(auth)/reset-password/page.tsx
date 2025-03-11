"use client";

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import { useScopedI18n } from '@/locales/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle } from "lucide-react";
import PrivacyPolicy from "@/components/notices/privacy-policy";
import TermsOfService from "@/components/notices/terms-of-services";
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [openTerms, setOpenTerms] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [sentEmail, setSentEmail] = useState<string>('');
    const t = useScopedI18n('resetPassword');
    const searchParams = useSearchParams();

    useEffect(() => {
        // 处理 URL 中的错误参数
        const urlError = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');
        
        if (urlError === 'expired') {
            // 如果有错误描述，优先使用错误描述
            setError(errorDescription || t('confirm.errors.linkExpired'));
        } else if (urlError) {
            // 处理其他类型的错误
            setError(errorDescription || urlError);
        }
    }, [searchParams, t]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const supabase = createClient();

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/api/auth/callback?next=/reset-password/confirm`,
        });

        if (error) {
            setError(error.message);
        } else {
            setSentEmail(email);
            setIsSuccess(true);
        }

        setLoading(false);
    };

    // 成功状态的渲染内容
    if (isSuccess) {
        return (
            <>
                <TermsOfService open={openTerms} onOpenChange={setOpenTerms} />
                <PrivacyPolicy open={openPrivacy} onOpenChange={setOpenPrivacy} />

                <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                    {/* 左侧背景部分 */}
                    <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                        <div className="absolute inset-0 bg-gray-950" />
                        <div className="relative z-20 mt-auto">
                            <blockquote className="space-y-2">
                                <p className="text-lg">{t('testimonial')}</p>
                            </blockquote>
                        </div>
                    </div>

                    {/* 右侧成功信息 */}
                    <div className="lg:p-8">
                        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                            <div className="flex flex-col items-center space-y-6">
                                <div className="flex flex-col space-y-2 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight">
                                        {t('success.title')}
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        {t('success.description')}
                                    </p>
                                </div>

                                <div className="rounded-full bg-green-50 p-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>

                                <div className="w-full rounded-lg bg-muted/50 p-4">
                                    <p className="text-center text-sm text-muted-foreground">
                                        {t('success.emailSentMessage', { email: sentEmail })}
                                    </p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full"
                                >
                                    <Link href="/login">{t('success.backToLogin')}</Link>
                                </Button>
                            </div>

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

    // 初始状态的重置密码表单
    return (
        <>
            <TermsOfService open={openTerms} onOpenChange={setOpenTerms} />
            <PrivacyPolicy open={openPrivacy} onOpenChange={setOpenPrivacy} />

            <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {/* 左侧背景部分 */}
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-gray-950" />
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">{t('testimonial')}</p>
                        </blockquote>
                    </div>
                </div>

                {/* 右侧重置密码表单 */}
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {t('title')}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {t('description')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Field */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="email">{t('email')}</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder={t('emailPlaceholder')}
                                    autoComplete="email"
                                    required
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
                                disabled={loading}
                                className="w-full"
                            >
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {t('sendLink')}
                            </Button>
                        </form>

                        <div className="text-center">
                            <Link
                                href="/login"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline"
                            >
                                {t('backToLogin')}
                            </Link>
                        </div>

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