"use client";

import * as React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useUserStore } from "@/stores/use-user-profile-store";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

export function CapabilitiesBanner() {
  const t = useScopedI18n("capabilities");
  const userName = useUserStore((state) => state.userName);
  const maxArea = useUserStore((state) => state.maxArea);
  const maxDocs = useUserStore((state) => state.maxDocs);
  const userRole = useUserStore((state) => state.userRole);

  return (
    <div className="w-full flex justify-center my-6">
      <div className="max-w-lg w-full">
        <Alert
          variant="default"
          className={cn(
            "border border-border rounded-lg p-4 shadow-sm",
            "bg-secondary dark:bg-neutral-900"
          )}
        >
          <AlertTitle className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight">
                {t('greeting', { name: userName.split(" ")[0] || "there" })}
              </span>
            </div>
          </AlertTitle>

          <AlertDescription className="mt-3 text-sm leading-relaxed text-center text-foreground/80 space-y-4">
            <p>
              {t('overview')}
            </p>

            {/* Group 1: Platform Capabilities */}
            <div className="text-left">
              <p className="font-semibold mb-1">{t('platformCapabilities.title')}</p>
              <ul className="list-none space-y-2 pl-4">
                <li>
                  <span className="mr-2">⚡</span>{t('platformCapabilities.realTime')}
                </li>
                <li>
                  <span className="mr-2">📚</span>{t('platformCapabilities.knowledgeBase')}
                </li>
                <li>
                  <span className="mr-2">📝</span>{t('platformCapabilities.reports')}
                </li>
              </ul>
            </div>

            {/* Group 2: Geospatial Analyses */}
            <div className="text-left">
              <p className="font-semibold mb-1">{t('geospatialAnalyses.title')}</p>
              <ul className="list-none space-y-2 pl-4">
                <li>
                  <span className="mr-2">🗺️</span>{t('geospatialAnalyses.landUse')}
                </li>
                <li>
                  <span className="mr-2">🔄</span>{t('geospatialAnalyses.change')}
                </li>
                <li>
                  <span className="mr-2">🏙️</span>{t('geospatialAnalyses.urban')}
                </li>
                <li>
                  <span className="mr-2">🌫️</span>{t('geospatialAnalyses.pollution')}
                </li>
              </ul>
            </div>

            {/* Group 3: Google Earth Engine Data Loading */}
            <div className="text-left">
              <p className="font-semibold mb-1">
                {t('geeData.title')}
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li>
                  <span className="mr-2">🌍</span>{t('geeData.raster')}
                </li>

                <li>
                  <span className="mr-2">🔍</span>{t('geeData.access')}
                </li>
              </ul>
            </div>

            {/* Key Notes */}
            <div className="pt-2 text-left">
              <p className="font-semibold">{t('keyNotes.title')}</p>
              <ul className="list-disc list-inside text-sm text-foreground/70 mt-1 space-y-1">
                <li>
                  <strong>{t('keyNotes.role')}</strong> {userRole || "USER"}
                </li>
                <li>
                  {t('keyNotes.docsLimit', { maxDocs: <strong>{maxDocs || "N/A"}</strong> })}
                </li>
                <li>
                  {t('keyNotes.futureYear', { year: <strong>2025</strong> })}
                </li>
                <li>
                  {t('keyNotes.areaLimit', { maxArea: <strong>{maxArea || "N/A"}</strong> })}
                </li>
                <li>
                  {t('keyNotes.startYear', { year: <strong>2015</strong> })}
                </li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
