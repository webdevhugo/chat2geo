"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyPolicy({
  open,
  onOpenChange,
}: PrivacyPolicyModalProps) {
  const t = useScopedI18n("legal.privacyPolicy");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            <strong>{t('effectiveDate', { date: "January 06, 2025" })}</strong>
          </p>
          <p>
            {t('sections.intro')}
          </p>

          <h2 className="font-semibold">{t('sections.infoCollect.title')}</h2>
          <p>
            <strong>{t('sections.infoCollect.personal.title')}</strong>
            <br />
            {t('sections.infoCollect.personal.content')}
          </p>
          <p>
            <strong>{t('sections.infoCollect.uploaded.title')}</strong>
            <br />
            {t('sections.infoCollect.uploaded.content')}
          </p>
          <p>
            <strong>{t('sections.infoCollect.interaction.title')}</strong>
            <br />
            {t('sections.infoCollect.interaction.content')}
          </p>

          <h2 className="font-semibold">{t('sections.usage.title')}</h2>
          <p>
            <strong>{t('sections.usage.service.title')}</strong>
            <br />
            {t('sections.usage.service.content')}
          </p>
          <p>
            <strong>{t('sections.usage.improvement.title')}</strong>
            <br />
            {t('sections.usage.improvement.content')}
          </p>
          <p>
            <strong>{t('sections.usage.communication.title')}</strong>
            <br />
            {t('sections.usage.communication.content')}
          </p>

          <h2 className="font-semibold">{t('sections.sharing.title')}</h2>
          <p>
            <strong>{t('sections.sharing.providers.title')}</strong>
            <br />
            {t('sections.sharing.providers.content')}
          </p>
          <p>
            <strong>{t('sections.sharing.legal.title')}</strong>
            <br />
            {t('sections.sharing.legal.content')}
          </p>
          <p>
            <strong>{t('sections.sharing.business.title')}</strong>
            <br />
            {t('sections.sharing.business.content')}
          </p>

          <h2 className="font-semibold">{t('sections.retention.title')}</h2>
          <p>
            <strong>{t('sections.retention.storage.title')}</strong>
            <br />
            {t('sections.retention.storage.content')}
          </p>
          <p>
            <strong>{t('sections.retention.deletion.title')}</strong>
            <br />
            {t('sections.retention.deletion.content')}
          </p>

          <h2 className="font-semibold">{t('sections.security.title')}</h2>
          <p>{t('sections.security.content')}</p>

          <h2 className="font-semibold">{t('sections.children.title')}</h2>
          <p>{t('sections.children.content')}</p>

          <h2 className="font-semibold">{t('sections.changes.title')}</h2>
          <p>{t('sections.changes.content')}</p>

          <p className="text-xs mt-4">{t('lastUpdated', { date: "January 06, 2025" })}</p>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
