import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "en" | "de";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale("en");
    localStorage.setItem("locale", "en");
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (l: Locale) => {
        setLocale(l);
        localStorage.setItem("locale", l);
      },
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
};
