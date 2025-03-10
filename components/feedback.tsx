"use client";

import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { Card } from "@/components/ui/card";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// Lucide icons
import { X, Send, Loader2 } from "lucide-react";
import { useScopedI18n } from "@/locales/client";
import useToastMessageStore from "@/stores/use-toast-message-store";

interface FeedbackFloatingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FeedbackFloating({ isOpen, onClose }: FeedbackFloatingProps) {
  const t = useScopedI18n("feedback");
  const [feedback, setFeedback] = useState("");

  // Track submit/loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setToastMessage = useToastMessageStore(
    (state) => state.setToastMessage
  );

  // Draggable + Resizable state for the popup
  const [panelPosition, setPanelPosition] = useState({ x: 300, y: 120 });
  const [panelSize, setPanelSize] = useState({ width: 400, height: 300 });

  if (!isOpen) return null;

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/sendfeedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: feedback }),
      });

      if (res.ok) {
        setToastMessage(t('messages.success'), "success");
        setFeedback("");
        onClose();
      } else {
        setToastMessage(t('messages.error.tryAgain'), "error");
      }
    } catch (err) {
      console.error(err);
      setToastMessage(t('messages.error.default'), "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Rnd
      position={panelPosition}
      size={{ width: panelSize.width, height: panelSize.height }}
      onDragStop={(e, d) => setPanelPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) => {
        setPanelSize({
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        });
        setPanelPosition({ x: pos.x, y: pos.y });
      }}
      minWidth={320}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="drag-handle"
      className="fixed z-[9999]"
    >
      <Card className="w-full h-full flex flex-col">
        <CardHeader
          className="
            drag-handle
            border-b border-stone-300 dark:border-stone-600
            px-4 py-2
          "
        >
          <div className="flex w-full items-center justify-between cursor-move">
            <CardTitle>{t('title')}</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-transparent text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-4 overflow-hidden flex flex-col min-h-0">
          <Textarea
            placeholder={t('placeholder')}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="
              flex-1 h-full w-full resize-none
              border-stone-300 dark:border-stone-600
            "
          />
        </CardContent>

        <CardFooter className="border-t border-stone-300 dark:border-stone-600 p-3 flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2"
          >
            {isSubmitting ? (
              // Spinner icon
              <Loader2 size={16} className="animate-spin" />
            ) : (
              // Normal send icon
              <Send size={16} />
            )}
            {isSubmitting ? t('sending') : t('submit')}
          </Button>
        </CardFooter>
      </Card>
    </Rnd>
  );
}
