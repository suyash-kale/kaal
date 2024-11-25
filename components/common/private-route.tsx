import { FC } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface PrivateRouteProps {
  children: React.ReactNode;
}

// make a private route
export const PrivateRoute: FC<PrivateRouteProps> = async ({ children }) => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/sign-in");
  }
  return <>{children}</>;
};
