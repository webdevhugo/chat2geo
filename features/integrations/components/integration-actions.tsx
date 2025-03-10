import React from "react";
import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";

interface IntegrationActionsProps {
  serviceId: ServiceType;
  isConnected: boolean;
  onConnect: (id: ServiceType) => void;
  onConfigure: (id: string) => void;
}

export const IntegrationActions: React.FC<IntegrationActionsProps> = ({
  serviceId,
  isConnected,
  onConnect,
  onConfigure,
}) => {
  const t = useScopedI18n("integrations.actions");
  return (
    <div className="flex items-center">
      {!isConnected && (
        <Button
          variant="default"
          size="sm"
          onClick={() => onConnect(serviceId)}
        >
          {t('connect')}
        </Button>
      )}
    </div>
  );
};
