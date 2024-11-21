import { FC, ReactNode } from "react";

interface PageMessageProps {
  children?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}

// displaying message for the entire page
export const PageMessage: FC<PageMessageProps> = ({
  title,
  description,
  children,
}) => (
  <div className="flex h-full items-center justify-center">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold">{title}</h2>
      {description && (
        <h4 className="text-lg font-light text-muted-foreground">
          {description}
        </h4>
      )}
      {children}
    </div>
  </div>
);
