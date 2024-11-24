"use client";
import { FC } from "react";
import { FormattedMessage } from "react-intl";

interface MessageProps {
  id: string;
}

// client component for text internationalization
export const Message: FC<MessageProps> = ({ id }) => (
  <FormattedMessage id={id} />
);
