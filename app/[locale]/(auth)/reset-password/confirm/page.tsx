"use client";

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import { useScopedI18n } from '@/locales/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import PrivacyPolicy from "@/components/notices/privacy-policy";
import TermsOfService from "@/components/notices/terms-of-services";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordConfirm() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isValidLink, setIsValidLink] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [openTerms, setOpenTerms] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const t = useScopedI18n('resetPassword.confirm');
    const searchParams = useSearchParams();

    useEffect(() => {
        const validateResetLink = async () => {
            // 检查URL中是否有错误参数
            const urlError = searchParams.get('error');
            const errorDescription = searchParams.get('error_description');
            
            if (urlError === 'access_denied') {
                // 使用错误描述（如果有）
                if (errorDescription) {
                    setError(errorDescription);
                }
                setIsValidLink(false);
                setLoading(false);
                return;
            }

            // 验证会话
            const supabase = createClient();
            const { data: { session } } = await supabase.auth.getSession();
            
            // 如果没有会话，说明链接无效或过期
            if (!session) {
                setIsValidLink(false);
                setLoading(false);
                return;
            }

            setIsValidLink(true);
            setLoading(false);
        };

        validateResetLink();
    }, [searchParams]);

    // 显示加载状态
    if (loading) {
        return (
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

                {/* 右侧加载状态 */}
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col items-center space-y-6">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            <p className="text-center text-sm text-muted-foreground">
                                {t('loading')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 显示链接无效的错误页面
    if (!isValidLink) {
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

                    {/* 右侧错误信息 */}
                    <div className="lg:p-8">
                        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                            <div className="flex flex-col items-center space-y-6">
                                <div className="rounded-full bg-red-50 p-3">
                                    <AlertCircle className="h-6 w-6 text-red-600" />
                                </div>

                                <div className="flex flex-col space-y-2 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight">
                                        {t('errors.invalidLink.title')}
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        {error || t('errors.invalidLink.message')}
                                    </p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full"
                                >
                                    <Link href="/reset-password">
                                        {t('errors.invalidLink.button')}
                                    </Link>
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
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        if (password !== confirmPassword) {
            setError(t('errors.passwordMismatch'));
            setLoading(false);
            return;
        }

        const supabase = createClient();

        try {
            const { error } = await supabase.auth.updateUser({
                password: password
            });

            if (error) {
                setError(error.message);
            } else {
                setIsSuccess(true);
            }
        } catch (err) {
            setError(t('errors.unknownError'));
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
                                        {t('successTitle')}
                                    </h1>
                                </div>

                                <div className="rounded-full bg-green-50 p-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>

                                <div className="w-full rounded-lg bg-muted/50 p-4">
                                    <p className="text-center text-sm text-muted-foreground">
                                        {t('successMessage')}
                                    </p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full"
                                >
                                    <Link href="/login">{t('loginButton')}</Link>
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

                {/* 右侧表单部分 */}
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

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                {/* 新密码输入框 */}
                                <div>
                                    <Label htmlFor="password" className="text-sm font-medium">
                                        {t('newPassword')}
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="mt-1 w-full"
                                    />
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {t('passwordRequirements')}
                                    </p>
                                </div>

                                {/* 确认密码输入框 */}
                                <div>
                                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                                        {t('confirmPassword')}
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        className="mt-1 w-full"
                                    />
                                </div>

                                {/* 错误提示 */}
                                {error && (
                                    <p className="text-destructive text-sm">
                                        <strong>{t('errorLabel')}</strong> {error}
                                    </p>
                                )}
                            </div>

                            {/* 重置密码按钮 */}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {t('resetButton')}
                            </Button>
                        </form>

                        {/* 服务条款和隐私政策 */}
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
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}