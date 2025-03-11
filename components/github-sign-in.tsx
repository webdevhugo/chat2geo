"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useScopedI18n } from '@/locales/client';

export function GithubSignIn() {
    const [isLoading, setLoading] = useState(false);
    const supabase = createClient();
    const searchParams = useSearchParams();
    const returnTo = searchParams.get("return_to");
    const t = useScopedI18n('auth');

    const handleSignIn = async () => {
        setLoading(true);

        const redirectTo = new URL("/api/auth/callback", window.location.origin);

        if (returnTo) {
            redirectTo.searchParams.append("return_to", returnTo);
        }

        redirectTo.searchParams.append("provider", "github");

        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: redirectTo.toString(),
            },
        });
    };

    return (
        <Button
            onClick={handleSignIn}
            className="active:scale-[0.98] bg-primary px-6 py-4 text-secondary font-medium flex space-x-2 h-[40px] w-full"
        >
            {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <>
                    <IconBrandGithubFilled />
                    <span>{t('continueWithGithub')}</span>
                </>
            )}
        </Button>
    );
}
