import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";

interface AddGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  newGroupName: string;
  setNewGroupName: (name: string) => void;
  handleAddGroup: () => void;
}

const AddGroupModal: React.FC<AddGroupModalProps> = ({
  isOpen,
  onClose,
  newGroupName,
  setNewGroupName,
  handleAddGroup,
}) => {
  const t = useScopedI18n("knowledgeBase.addGroup");
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
        </DialogHeader>

        <Input
          placeholder={t('placeholder')}
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
        />

        <DialogFooter className="gap-2">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {t('buttons.cancel')}
          </Button>
          <Button
            onClick={handleAddGroup}
            className="bg-green-500 hover:bg-green-600"
            size="sm"
          >
            {t('buttons.add')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddGroupModal;
