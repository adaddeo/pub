import type { NextPage } from "next";
import Link from "next/link";
import { Page } from "../components/app/page/Page";

const Issues: NextPage = () => {
  return (
    <Page title="issues">
      <Link href="issues/1">#1</Link>
    </Page>
  );
};

export default Issues;
