"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import { changelog } from "@/lib/changelog";
import { useScopedI18n } from "@/locales/client";

export default function ChangelogModal() {
  const t = useScopedI18n("changelog");
  const [hasMounted, setHasMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if (changelog.length > 0) {
      const newest = changelog[0];
      const storedVersion = localStorage.getItem("changelog_last_seen_version");
      if (storedVersion !== newest.version) {
        setOpen(true);
      }
    }
  }, []);

  if (!hasMounted) return null;

  const latestEntry = changelog[0];
  if (!latestEntry) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) {
          localStorage.setItem(
            "changelog_last_seen_version",
            latestEntry.version
          );
        }
      }}
    >
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            {t('title', { version: latestEntry.version, date: latestEntry.date })}
          </DialogTitle>
        </DialogHeader>

        <ReactMarkdown className="prose dark:prose-invert max-w-none">
          {t('useContent') === 'true'
            ? t('content')
            : latestEntry.content}
        </ReactMarkdown>
      </DialogContent>
    </Dialog>
  );
}
