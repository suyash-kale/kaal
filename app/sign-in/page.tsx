import { FC } from "react";
import Image from "next/image";

import Logo from "@/assets/logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Message } from "@/components/common/message";
import { Provider } from "@/app/sign-in/provider";

// sign in page
const Page: FC = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="flex p-3">
        <CardHeader className="flex-1 p-3">
          <Image src={Logo} alt="Kaal Logo" height={60} />
          <CardDescription className="mt-3">
            <Message id="APP-DESCRIPTION" />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-3">
          <CardTitle className="mb-3">
            <Message id="SIGN-IN" />
          </CardTitle>
          <Provider />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
