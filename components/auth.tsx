"use client";
import { FC } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "./ui/button";

export const Auth: FC = () => {
  const { data } = useSession();

  if (data) {
    return (
      <>
        <div>Authenticated, {data?.user?.name}</div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  } else {
    return (
      <>
        <div>Not authenticated</div>
        <Button onClick={() => signIn("google")}>Sign in</Button>
      </>
    );
  }
};
