import { IconDatabase } from "@tabler/icons-react";
import React from "react";
import { useScopedI18n } from "@/locales/client";

interface OpenDatabaseInChatInputBtnProps {
  onOpenAssetSrouces: () => void;
}

const OpenDatabaseInChatInputBtn = ({
  onOpenAssetSrouces,
}: OpenDatabaseInChatInputBtnProps) => {
  const t = useScopedI18n("chatInput.mapTools.buttons.openDatabase");
  return (
    <button
      className="flex p-2 hover:bg-accent rounded-lg w-full text-left cursor-pointer"
      onClick={onOpenAssetSrouces}
    >
      <span className="flex items-start gap-2 antialiased">
        <IconDatabase stroke={2} size={20} className="mt-1" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{t('title')}</span>
          <span className="text-sm text-muted-foreground">
            {t('description')}
          </span>
        </div>
      </span>
    </button>
  );
};

export default OpenDatabaseInChatInputBtn;
