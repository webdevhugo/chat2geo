'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import PrivacyPolicy from "@/components/notices/privacy-policy";
import TermsOfService from "@/components/notices/terms-of-services";

export default function SignupSuccess() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const t = useScopedI18n('verify');
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

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
                {t('testimonial')}
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
                  {t('signUpSuccessful')}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {t('confirmationSent')} <br />
                  <span className="font-medium text-foreground">{email}</span>
                </p>
              </div>

              {/* 下一步说明 */}
              <div className="w-full space-y-4 mt-4">
                <p className="text-sm font-medium text-primary">{t('nextSteps')}:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>{t('checkInbox')}</li>
                  <li>{t('completeVerification')}</li>
                  <li>{t('returnToLogin')}</li>
                </ol>
              </div>

              {/* 登录按钮 */}
              <Button
                className="w-full mt-6"
                asChild
              >
                <Link href="/login">
                  {t('goToLogin')}
                </Link>
              </Button>

              {/* 服务条款 */}
              <p className="px-8 text-center text-sm text-muted-foreground">
                {t('continueAgree')}{" "}
                <button
                  className="underline underline-offset-4 hover:text-primary"
                  onClick={() => setOpenTerms(true)}
                >
                  {t('termsOfService')}
                </button>{" "}
                {t('and')}{" "}
                <button
                  className="underline underline-offset-4 hover:text-primary"
                  onClick={() => setOpenPrivacy(true)}
                >
                  {t('privacyPolicy')}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}