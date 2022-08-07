import { ReactNode } from "react";

type PageContentContainerProps = {
  children: ReactNode;
};

export function PageContentContainer({ children }: PageContentContainerProps) {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
}
