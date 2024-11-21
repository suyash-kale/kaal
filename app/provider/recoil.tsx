"use client";
import { FC } from "react";
import { RecoilRoot } from "recoil";

interface RecoilProviderProps {
  children: React.ReactNode;
}

// recoil provider
export const RecoilProvider: FC<RecoilProviderProps> = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
