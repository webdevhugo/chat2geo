import { Separator } from "@/components/ui/separator";
import React from "react";
import { useScopedI18n } from "@/locales/client";

interface MapBadgeProps {
  type?: "drawing" | "query_layer";
  heading?: string;
  secondaryText?: string;
}

const MapBadge: React.FC<MapBadgeProps> = ({
  type = "drawing",
  heading,
  secondaryText,
}) => {
  const t = useScopedI18n("map.badge");
  const defaultHeading = type === "drawing" ? t('roiDrawingMode') : t('queryLayer');
  return (
    <>
      {(heading || defaultHeading) && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[5000]">
          <div
            className={`${type === "drawing"
                ? "bg-warning text-gray-900"
                : "bg-info text-white"
              } prose prose-sm text-center text-md font-bold w-full h-full p-2 rounded-lg text-nowrap`}
            style={{
              textShadow:
                type === "drawing"
                  ? undefined
                  : "0px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Primary text */}
            {heading || defaultHeading}

            {/* Secondary text (renders only if secondaryText is provided) */}
            {secondaryText && (
              <>
                <Separator />
                <div className="pt-1 text-sm font-medium text-center">
                  {secondaryText}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MapBadge;
