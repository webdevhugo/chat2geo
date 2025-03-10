import React from "react";
import {
  MousePointerClick,
  SquareMousePointer,
  Layers,
  BarChart3,
  Menu,
  Table2 as TableIcon,
} from "lucide-react";
import { useButtonsStore } from "@/stores/use-buttons-store";
import useMapDisplayStore from "@/features/maps/stores/use-map-display-store";
import useTableStore from "../../stores/use-table-store";
import AddressSearch from "../address-search";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScopedI18n } from "@/locales/client";

const MapCustomControls = () => {
  const t = useScopedI18n("mapControls.tooltips");
  const activeDrawingMode = useButtonsStore((state) => state.activeDrawingMode);
  const setDrawingMode = useButtonsStore((state) => state.setDrawingMode);
  const toggleMapLayersPanel = useMapDisplayStore(
    (state) => state.toggleMapLayersPanel
  );
  const toggleMapChartPanel = useMapDisplayStore(
    (state) => state.toggleMapChartPanel
  );
  const toggleTable = useTableStore((state) => state.toggleTable);
  const toggleBasemap = useButtonsStore((state) => state.toggleBasemap);

  const buttons = [
    {
      id: "toggle-layers-panel",
      onClick: toggleMapLayersPanel,
      tooltip: t('layersPanel'),
      icon: <Menu className="text-foreground" />,
      active: false,
    },
    {
      id: "draw-point",
      onClick: () => setDrawingMode("draw_point"),
      tooltip:
        activeDrawingMode === "draw_point"
          ? t('drawPoint.active')
          : t('drawPoint.inactive'),
      icon: <MousePointerClick className="text-foreground" />,
      active: activeDrawingMode === "draw_point",
    },
    {
      id: "draw-polygon",
      onClick: () => setDrawingMode("draw_polygon"),
      tooltip:
        activeDrawingMode === "draw_polygon"
          ? t('drawPolygon.active')
          : t('drawPolygon.inactive'),
      icon: <SquareMousePointer className="text-foreground" />,
      active: activeDrawingMode === "draw_polygon",
    },
    {
      id: "toggle-basemaps",
      onClick: toggleBasemap,
      tooltip: t('basemap'),
      icon: <Layers className="text-foreground" />,
      active: false,
    },
    {
      id: "toggle-table",
      onClick: toggleTable,
      tooltip: t('attributeTable'),
      icon: <TableIcon className="text-foreground" />,
      active: false,
    },
    {
      id: "toggle-chart-panel",
      onClick: toggleMapChartPanel,
      tooltip: t('chartPanel'),
      icon: <BarChart3 className="text-foreground" />,
      active: false,
    },
  ];

  const firstGroup = buttons.slice(0, 3);
  const secondGroup = buttons.slice(3);

  return (
    <div className="flex justify-center items-center gap-4 bg-foreground/30 border border-stone-600 w-fit p-2 h-fit rounded-2xl">
      {firstGroup.map((button) => (
        <Tooltip key={button.id}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="bg-background rounded-xl [&_svg]:size-5"
              onClick={button.onClick}
              disabled={button.active}
            >
              {button.icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">{button.tooltip}</TooltipContent>
        </Tooltip>
      ))}

      <AddressSearch />

      {secondGroup.map((button) => (
        <Tooltip key={button.id}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="bg-background rounded-xl [&_svg]:size-5"
              onClick={button.onClick}
              disabled={button.active}
            >
              {button.icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">{button.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default MapCustomControls;
