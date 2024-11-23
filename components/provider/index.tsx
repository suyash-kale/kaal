import { FC } from "react";
import { getServerSession } from "next-auth";

import { SessionProvider } from "@/components/provider/session";
import { RecoilProvider } from "@/components/provider/recoil";
import { IntlProvider } from "@/components/provider/intl";

interface ProviderProps {
  children: React.ReactNode;
}

// root application provider
export const Provider: FC<ProviderProps> = async ({ children }) => {
  // getting the session from the server
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <RecoilProvider>
        <IntlProvider>{children}</IntlProvider>
      </RecoilProvider>
    </SessionProvider>
  );
};
