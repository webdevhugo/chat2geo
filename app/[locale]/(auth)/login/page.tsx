"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useTransition } from "react";

import { login } from "@/app/[locale]/(auth)/login/actions";
import { useUserStore } from "@/stores/use-user-profile-store";
import PrivacyPolicy from "@/components/notices/privacy-policy";
import TermsOfService from "@/components/notices/terms-of-services";
import { GithubSignIn } from "@/components/github-sign-in";
import { GoogleSignIn } from "@/components/google-sign-in";
import { useScopedI18n } from '@/locales/client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { setUserData } = useUserStore();
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const t = useScopedI18n('login')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
    } else {
      // Update user store with returned data
      setUserData(
        result.userName!,
        result.userEmail!,
        result.userRole!,
        result.userOrganization!,
        result.licenseStartString!,
        result.licenseEndString!
      );
      startTransition(() => {
        router.push("/");
      });
    }

    setLoading(false);
  };

  return (
    <>
      <TermsOfService open={openTerms} onOpenChange={setOpenTerms} />
      <PrivacyPolicy open={openPrivacy} onOpenChange={setOpenPrivacy} />

      {/* Main container for md+ screens */}
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left column with background and testimonial */}
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

        {/* Right column with the actual login form */}
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

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">{t('password')}</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    {t('forgotPassword')}
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t('passwordPlaceholder')}
                  autoComplete="current-password"
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
                disabled={loading || isPending}
                className="w-full"
              >
                {(loading || isPending) && <Loader2 className="animate-spin" />}
                {t('signInButton')}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {t('noAccount')} <Link href="/signup" className="text-primary hover:underline">{t('signUp')}</Link>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {t('orContinueWith')}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <GoogleSignIn />
              <GithubSignIn />
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
