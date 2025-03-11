"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent, useTransition } from "react";
import { signup } from "@/app/[locale]/(auth)/signup/actions";
import PrivacyPolicy from "@/components/notices/privacy-policy";
import TermsOfService from "@/components/notices/terms-of-services";
import { useScopedI18n } from '@/locales/client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail } from "lucide-react";

export default function Signup() {
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState<string>('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const [openTerms, setOpenTerms] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const t = useScopedI18n('signup');
    const tVerify = useScopedI18n('verify');

    // 检查URL参数中是否有email,如果有则显示成功页面
    useState(() => {
        const email = searchParams.get('email');
        if (email) {
            setRegisteredEmail(email);
            setIsSuccess(true);
        }
    });

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
        const email = formData.get('email') as string;

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
                // 注册成功，切换到成功状态
                setRegisteredEmail(email);
                setIsSuccess(true);
                // 更新URL,但不刷新页面
                window.history.pushState({}, '', `/signup?email=${encodeURIComponent(email)}`);
            }
        } catch (err) {
            setError(t('networkError'));
        } finally {
            setLoading(false);
        }
    };

    // 成功状态的渲染内容
    if (isSuccess) {
        return (
            <>
                <TermsOfService open={openTerms} onOpenChange={setOpenTerms} />
                <PrivacyPolicy open={openPrivacy} onOpenChange={setOpenPrivacy} />

                <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                    {/* 左侧深色背景区域 */}
                    <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                        <div className="absolute inset-0 bg-gray-950" />
                        <div className="relative z-20 mt-auto">
                            <blockquote className="space-y-2">
                                <p className="text-lg">
                                    {tVerify('testimonial')}
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    {/* 右侧内容区域 */}
                    <div className="lg:p-8">
                        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                            <div className="flex flex-col items-center space-y-4">
                                {/* 邮件图标 */}
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-green-600" />
                                </div>

                                {/* 标题和邮箱信息 */}
                                <div className="flex flex-col space-y-2 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight">
                                        {tVerify('signUpSuccessful')}
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        {tVerify('confirmationSent')} <br />
                                        <span className="font-medium text-foreground">{registeredEmail}</span>
                                    </p>
                                </div>

                                {/* 下一步说明 */}
                                <div className="w-full space-y-4 mt-4">
                                    <p className="text-sm font-medium text-primary">{tVerify('nextSteps')}:</p>
                                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                                        <li>{tVerify('checkInbox')}</li>
                                        <li>{tVerify('completeVerification')}</li>
                                        <li>{tVerify('returnToLogin')}</li>
                                    </ol>
                                </div>

                                {/* 登录按钮 */}
                                <Button
                                    className="w-full mt-6"
                                    asChild
                                >
                                    <Link href="/login">
                                        {tVerify('goToLogin')}
                                    </Link>
                                </Button>

                                {/* 服务条款 */}
                                <p className="px-8 text-center text-sm text-muted-foreground">
                                    {tVerify('continueAgree')}{" "}
                                    <button
                                        className="underline underline-offset-4 hover:text-primary"
                                        onClick={() => setOpenTerms(true)}
                                    >
                                        {tVerify('termsOfService')}
                                    </button>{" "}
                                    {tVerify('and')}{" "}
                                    <button
                                        className="underline underline-offset-4 hover:text-primary"
                                        onClick={() => setOpenPrivacy(true)}
                                    >
                                        {tVerify('privacyPolicy')}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // 初始状态的注册表单
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