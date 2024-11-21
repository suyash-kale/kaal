import { createIntl } from "react-intl";

import { eLocale } from "@/types/locale";

// creating a global intl object
export let intl = createIntl({ locale: eLocale.English, messages: {} });

// setting the intl object with the locale and messages
export const setIntl = (locale: eLocale, messages: Record<string, string>) => {
  intl = createIntl({ locale, messages });
  return intl;
};
