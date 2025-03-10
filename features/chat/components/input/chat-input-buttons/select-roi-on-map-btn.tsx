import { IconSquareRoundedPlus2 } from "@tabler/icons-react";
import useROIStore from "@/features/maps/stores/use-roi-store";
import useBadgeStore from "@/features/maps/stores/use-map-badge-store";
import React from "react";
import { useScopedI18n } from "@/locales/client";

interface SelectRoiOnMapBtnProps {
  setIsDropupOpen: (isOpen: boolean) => void;
}

const SelectRoiOnMapBtn = ({ setIsDropupOpen }: SelectRoiOnMapBtnProps) => {
  const t = useScopedI18n("chatInput.mapTools.buttons.selectRoi");
  const isROIDrawingActive = useROIStore((state) => state.isROIDrawingActive);
  const setIsROIDrawingActive = useROIStore(
    (state) => state.setIsROIDrawingActive
  );

  function handleClick() {
    setIsROIDrawingActive(!isROIDrawingActive);
    useBadgeStore.getState().reset();
    setIsDropupOpen(false);
  }

  return (
    <>
      <button
        className="flex p-2 hover:bg-accent rounded-lg w-full text-left cursor-pointer"
        onClick={handleClick}
      >
        <span className="flex items-start gap-2 antialiased">
          <IconSquareRoundedPlus2 stroke={2} size={20} className="mt-1" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{t('title')}</span>
            <span className="text-sm text-muted-foreground">
              {t('description')}
            </span>
          </div>
        </span>
      </button>
    </>
  );
};

export default SelectRoiOnMapBtn;
