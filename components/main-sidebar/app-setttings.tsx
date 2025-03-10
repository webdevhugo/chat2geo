import React from "react";
import { IconSettings } from "@tabler/icons-react";
import { useButtonsStore } from "@/stores/use-buttons-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeModeToggle } from "@/components/ui/theme-mode-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { Label } from "@/components/ui/label";
import { Tooltip } from "react-tooltip";
import { useScopedI18n } from "@/locales/client";

const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

const AppSettings = () => {
  const t = useScopedI18n("settings");
  const isSidebarCollapsed = useButtonsStore(
    (state) => state.isSidebarCollapsed
  );

  return (
    <section className="z-[5000]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="px-4 py-2 pb-6 text-accent-foreground cursor-pointer text-sm font-normal">
            <div
              className={`flex items-center px-3 py-2 gap-4 w-full rounded-xl text-gray-100 hover:bg-muted dark:hover:bg-muted-foreground/20 hover:text-foreground ${isSidebarCollapsed ? "justify-center" : "justify-start"
                }`}
              data-tooltip-content={t('tooltips.settings')}
              data-tooltip-id="settings"
            >
              <button className="">
                <IconSettings stroke={1.5} className="h-7 w-7 flex-shrink-0" />
              </button>
              {!isSidebarCollapsed && <span>{t('title')}</span>}
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="left"
          align="end"
          className="w-64 dark:text-accent-foreground bg-background dark:bg-accent"
        >
          <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <div className="p-2">
              <h3 className="text-sm font-medium mb-1">{t('appearance.title')}</h3>
              <p className="text-xs text-muted-foreground mb-2">
                {t('appearance.description')}
              </p>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="theme-toggle" className="text-sm">
                  {t('appearance.theme')}
                </Label>
                <ThemeModeToggle />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-toggle" className="text-sm">
                  {t('appearance.language')}
                </Label>
                <LanguageToggle />
              </div>
            </div>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <div className="p-2 pt-1 text-xs text-muted-foreground">
            <p className="mb-1">
              {t('version')}: <strong>{appVersion}</strong>
            </p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <Tooltip
        id="settings"
        place="right"
        style={{
          backgroundColor: "white",
          color: "black",
          position: "fixed",
          zIndex: 9999,
          padding: "8px",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          fontWeight: "500",
        }}
        hidden={!isSidebarCollapsed}
      />
    </section>
  );
};

export default AppSettings;
