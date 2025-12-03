import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Index from "./Index";
import { useLocale } from "../hooks/use-locale";

const LangPage = () => {
  const params = useParams();
  const { setLocale } = useLocale();
  const lang = (params.lang === "de" ? "de" : "en");
  useEffect(() => { setLocale(lang); }, [lang, setLocale]);
  return <Index />;
};

export const RootRedirect = () => <Navigate to="/en" replace />;

export default LangPage;

