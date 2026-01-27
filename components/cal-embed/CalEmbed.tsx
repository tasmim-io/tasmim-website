"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type CalEmbedProps = {
  className?: string;
};

export const CalEmbed = ({ className }: CalEmbedProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#161616" },
          dark: { "cal-brand": "#f4f4f4" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="tasmim/30min"
      calOrigin="https://app.cal.eu"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      className={className}
      config={{
        layout: "month_view",
        theme: "dark",
      }}
    />
  );
};
