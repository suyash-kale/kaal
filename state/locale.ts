import { atom } from "recoil";

import { eLocale } from "@/types/locale";

// variable will sync the current language of the application with the Recoil atom
export let locale = eLocale.English;

// atom is used to store the current language of the application
export const LocaleState = atom<eLocale>({
  key: "LocaleState",
  default: locale,
  effects: [
    ({ onSet }) => {
      onSet((l) => {
        locale = l;
      });
    },
  ],
});
