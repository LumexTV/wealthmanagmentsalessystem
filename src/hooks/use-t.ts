import { useMemo } from "react";
import { dictionaries, type Locale, type Dict } from "../i18n";
import { useLocale } from "./use-locale";

export const useT = (): Dict => {
  const { locale } = useLocale();
  const dict = useMemo(() => dictionaries[locale as Locale], [locale]);
  return dict;
};

