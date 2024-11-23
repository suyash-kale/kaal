"use client";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { LocaleState } from "@/state/locale";
import { intl, setIntl } from "@/utility/intl";
import { PageMessage } from "@/components/template/page-message";

interface IntlProviderProps {
  children: React.ReactNode;
}

// internationalization provider
export const IntlProvider: FC<IntlProviderProps> = ({ children }) => {
  // the current language of the application
  const lang = useRecoilValue(LocaleState);

  // the messages for the current language
  const [messages, setMessages] = useState<null | Record<string, string>>(null);

  // loading the messages for the current language
  useEffect(() => {
    const main = async () => {
      // resetting the messages in the state
      setMessages(null);
      // loading the json message file for the language
      const response = await (await fetch(`/locale/${lang}.json`)).json();
      // setting the intl object for the current language and messages
      setIntl(lang, response);
      // updating the title of the document with the application name in the current language
      document.title = intl.formatMessage({ id: "APP-NAME" });
      // updating the messages in the state
      setMessages(response);
    };
    main();
  }, [lang]);

  // if the messages are not loaded yet, show a loading message
  if (!messages) {
    return (
      <PageMessage
        title="Relax!"
        description="We are getting thing ready for you .."
      />
    );
  }

  return <>{children}</>;
};
