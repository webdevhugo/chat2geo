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

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsOfService({
  open,
  onOpenChange,
}: TermsOfServiceModalProps) {
  const t = useScopedI18n("legal.termsOfService");
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
          <p>{t('sections.intro')}</p>

          <h2 className="font-semibold">{t('sections.beta.title')}</h2>
          <p>
            <strong>{t('sections.beta.limitedAccess.title')}</strong>
            <br />
            {t('sections.beta.limitedAccess.content')}
          </p>
          <p>
            <strong>{t('sections.beta.features.title')}</strong>
            <br />
            {t('sections.beta.features.content')}
          </p>
          <p>
            <strong>{t('sections.beta.feedback.title')}</strong>
            <br />
            {t('sections.beta.feedback.content')}
          </p>

          <h2 className="font-semibold">{t('sections.accounts.title')}</h2>
          <p>
            <strong>{t('sections.accounts.creation.title')}</strong>
            <br />
            {t('sections.accounts.creation.content')}
          </p>
          <p>
            <strong>{t('sections.accounts.security.title')}</strong>
            <br />
            {t('sections.accounts.security.content')}
          </p>

          <h2 className="font-semibold">{t('sections.userData.title')}</h2>
          <p>
            <strong>{t('sections.userData.storage.title')}</strong>
            <br />
            {t('sections.userData.storage.content')}
          </p>
          <p>
            <strong>{t('sections.userData.ownership.title')}</strong>
            <br />
            {t('sections.userData.ownership.content')}
          </p>
          <p>
            <strong>{t('sections.userData.exclusiveUse.title')}</strong>
            <br />
            {t('sections.userData.exclusiveUse.content')}
          </p>

          <h2 className="font-semibold">{t('sections.license.title')}</h2>
          <p>
            <strong>{t('sections.license.grant.title')}</strong>
            <br />
            {t('sections.license.grant.content')}
          </p>
          <p>
            <strong>{t('sections.license.prohibited.title')}</strong>
            <br />
            {t('sections.license.prohibited.content')}
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>{t('sections.license.prohibited.item1')}</li>
            <li>{t('sections.license.prohibited.item2')}</li>
            <li>{t('sections.license.prohibited.item3')}</li>
            <li>{t('sections.license.prohibited.item4')}</li>
          </ul>

          <h2 className="font-semibold">{t('sections.intellectualProperty.title')}</h2>
          <p>{t('sections.intellectualProperty.content')}</p>

          <h2 className="font-semibold">{t('sections.disclaimers.title')}</h2>
          <p>
            <strong>{t('sections.disclaimers.beta.title')}</strong>
            <br />
            {t('sections.disclaimers.beta.content')}
          </p>
          <p>
            <strong>{t('sections.disclaimers.warranty.title')}</strong>
            <br />
            {t('sections.disclaimers.warranty.content')}
          </p>

          <h2 className="font-semibold">{t('sections.liability.title')}</h2>
          <p>{t('sections.liability.content')}</p>

          <h2 className="font-semibold">{t('sections.termination.title')}</h2>
          <p>
            <strong>{t('sections.termination.terminationPolicy.title')}</strong>
            <br />
            {t('sections.termination.terminationPolicy.content')}
          </p>
          <p>
            <strong>{t('sections.termination.dataRemoval.title')}</strong>
            <br />
            {t('sections.termination.dataRemoval.content')}
          </p>

          <h2 className="font-semibold">{t('sections.governing.title')}</h2>
          <p>{t('sections.governing.content')}</p>

          <h2 className="font-semibold">{t('sections.changes.title')}</h2>
          <p>{t('sections.changes.content')}</p>

          <p className="text-xs mt-4">{t('lastUpdated', { date: "January 06, 2025" })}</p>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
