import { en } from "./en";
import { de } from "./de";

export type Locale = "en" | "de";

export const dictionaries = { en, de };

export type Dict = typeof en;

