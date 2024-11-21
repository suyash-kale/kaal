"use client";
import { FC } from "react";

import { RecoilProvider } from "@/app/provider/recoil";
import { IntlProvider } from "@/app/provider/intl";

interface ProviderProps {
  children: React.ReactNode;
}

// root application provider
export const Provider: FC<ProviderProps> = ({ children }) => (
  <RecoilProvider>
    <IntlProvider>{children}</IntlProvider>
  </RecoilProvider>
);
