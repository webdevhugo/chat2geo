"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useScopedI18n } from "@/locales/client";

import { Button } from "@/components/ui/button";

interface MaxDocsAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  maxDocs: number;
}

/**
 * A ShadCN AlertDialog that warns the user they have reached max docs.
 */
export default function MaxDocsAlertDialog({
  isOpen,
  onClose,
  maxDocs,
}: MaxDocsAlertDialogProps) {
  const t = useScopedI18n("knowledgeBase.maxDocsAlert");
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('description', { count: maxDocs })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>{t('button')}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
