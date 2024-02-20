"use client";

import { I18nProviderClient, useCurrentLocale } from "@/locales/client";
import LenisScroll from "./lennis-scroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  const currentLocale = useCurrentLocale();
  return (
    <I18nProviderClient locale={currentLocale}>
      <LenisScroll>{children}</LenisScroll>
    </I18nProviderClient>
  );
}
