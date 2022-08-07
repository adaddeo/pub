import Head from "next/head";
import { ReactNode } from "react";
import { Navigation } from "../Navigation";

type PageProps = {
  title: string;
  pageTitle?: string;
  children?: ReactNode;
};

export function Page({ title, pageTitle, children }: PageProps) {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <Head>
        <title>{pageTitle || title}</title>
        <meta name="description" content="web3 publishing" />
      </Head>
      <div className="h-full flex">
        <div className="flex-none w-64">
          <Navigation />
        </div>
        <div className="flex-1 max-w-screen-md">
          <h1 className="text-lg font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
