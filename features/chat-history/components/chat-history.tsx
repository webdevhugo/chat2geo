"use client";

import { useCallback, useEffect, useState } from "react";
import ChatHistoryTable from "./chat-history-table";
import { useButtonsStore } from "@/stores/use-buttons-store";
import { fetchChatHistory } from "@/lib/fetchers/chat";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import useToastMessageStore from "@/stores/use-toast-message-store";
import { deleteChatById } from "@/lib/database/chat/queries";
import ConfirmationModal from "@/components/ui/confirmation-modal";
import { Trash2 } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

interface ChatHistory {
  chatId: string;
  title: string;
  createdAt: string;
}

export default function ChatHistory() {
  const t = useScopedI18n("chatHistory");
  const isSidebarCollapsed = useButtonsStore(
    (state) => state.isSidebarCollapsed
  );
  const setToastMessage = useToastMessageStore(
    (state) => state.setToastMessage
  );

  const [chats, setChats] = useState<ChatHistory[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedChatIds, setSelectedChatIds] = useState<string[]>([]);
  const [isConfirmMultiDeleteOpen, setIsConfirmMultiDeleteOpen] =
    useState(false);

  useEffect(() => {
    async function loadChats() {
      try {
        const fetchedChats = await fetchChatHistory();
        setChats(
          fetchedChats.map((chat: any) => ({
            chatId: chat.id,
            title: chat.chatTitle,
            createdAt: chat.createdAt,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch chat history", err);
      }
    }

    loadChats();
  }, []);

  // Single chat delete callback
  const handleDeleteChat = (deletedChatId: string) => {
    setChats((prevChats) =>
      prevChats.filter((chat) => chat.chatId !== deletedChatId)
    );
    // Also remove it from selected if it exists
    setSelectedChatIds((prev) => prev.filter((id) => id !== deletedChatId));
  };

  // Toggle single chat selection
  const handleToggleChatSelection = (chatId: string, selected: boolean) => {
    if (selected) {
      setSelectedChatIds((prev) => [...prev, chatId]);
    } else {
      setSelectedChatIds((prev) => prev.filter((id) => id !== chatId));
    }
  };

  // Toggle select/deselect all
  const handleToggleSelectAll = (selected: boolean) => {
    if (selected) {
      setSelectedChatIds(chats.map((chat) => chat.chatId));
    } else {
      setSelectedChatIds([]);
    }
  };

  // Multi-delete callback
  const handleDeleteSelectedChats = async () => {
    setIsDeleting(true);
    try {
      for (const chatId of selectedChatIds) {
        await deleteChatById(chatId);
      }
      // Remove from local state
      setChats((prev) =>
        prev.filter((chat) => !selectedChatIds.includes(chat.chatId))
      );
      // Clear selection
      setSelectedChatIds([]);
      setToastMessage(t('messages.deleteSuccess'), "success");
    } catch (error) {
      setToastMessage(t('messages.deleteError'), "error");
    } finally {
      setIsConfirmMultiDeleteOpen(false);
      setIsDeleting(false);
    }
  };

  return (
    <div
      className={`
        flex flex-col
        h-screen
        overflow-hidden
        flex-grow
        transition-all
        duration-300
        ${isSidebarCollapsed ? "ml-20" : "ml-64"}
      `}
    >
      <div className="container mx-auto py-16 max-w-6xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          {t('title')}
        </h1>
        <p className="mt-2 font-semibold text-muted-foreground">
          {t('description')}
        </p>

        <Separator className="mt-3 mb-6" />

        {chats.length === 0 ? (
          <p className="text-center text-muted-foreground">{t('empty')}</p>
        ) : (
          <ChatHistoryTable
            chats={chats}
            onDeleteChat={handleDeleteChat}
            selectedChatIds={selectedChatIds}
            onToggleChatSelection={handleToggleChatSelection}
            onToggleSelectAll={handleToggleSelectAll}
            // Pass a callback to open the multi-delete modal
            onDeleteSelectedClick={() => setIsConfirmMultiDeleteOpen(true)}
          />
        )}

        {/* Confirmation Modal for multi-delete */}
        <ConfirmationModal
          isOpen={isConfirmMultiDeleteOpen}
          title={t('deleteConfirm.title')}
          message={t('deleteConfirm.message')}
          cancelText={t('deleteConfirm.cancelButton')}
          confirmText={t('deleteConfirm.confirmButton')}
          confirmButtonClassName="bg-red-500 hover:bg-red-600"
          onCancel={() => setIsConfirmMultiDeleteOpen(false)}
          onConfirm={handleDeleteSelectedChats}
          isDeleting={isDeleting}
        />
      </div>
    </div>
  );
}
