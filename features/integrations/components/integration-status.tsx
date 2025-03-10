import React from "react";
import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";

interface IntegrationStatusProps {
  isConnected: boolean;
}

export const IntegrationStatus: React.FC<IntegrationStatusProps> = ({
  isConnected,
}) => {
  const t = useScopedI18n("integrations.status");
  if (!isConnected) return null;

  return (
    <span className="flex items-center text-sm">
      <Button variant="destructive" size="sm" onClick={() => { }}>
        {t('disconnect')}
      </Button>
    </span>
  );
};
