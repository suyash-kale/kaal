"use client";
import { FC, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

import { Message } from "@/components/common/message";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

// sign in provider
export const Provider: FC = () => {
  const { data } = useSession();

  // redirect to home page if user is already signed in
  useEffect(() => {
    if (data?.user) {
      redirect("/");
    }
  }, [data?.user]);

  return (
    <>
      <Button
        variant="secondary"
        className="w-full"
        onClick={() => signIn("google")}
      >
        <Message id="SIGN-IN-WITH-GOOGLE" />
      </Button>
      <div className="border-t my-3"></div>
      <Button variant="secondary" className="w-full">
        <Message id="SIGN-IN-WITH-MICROSOFT" />
      </Button>
    </>
  );
};
