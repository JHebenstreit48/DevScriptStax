import { useMemo } from "react";

type FooterBuildInfo = {
  year: number;
  lastUpdatedText: string;
};

function safeParseBuildDate(iso: string): Date | null {
  try {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
  } catch {
    return null;
  }
}

export function useFooterBuildInfo(): FooterBuildInfo {
  return useMemo(() => {
    const year = new Date().getFullYear();

    const buildDate = safeParseBuildDate(__BUILD_TIME_ISO__);

    const lastUpdatedText = buildDate
      ? `Last updated: ${buildDate.toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short",
        })}`
      : "Last updated: —";

    return { year, lastUpdatedText };
  }, []);
}