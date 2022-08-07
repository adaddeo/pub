import type { NextPage } from "next";
import { Page } from "../components/app/page/Page";

const About: NextPage = () => {
  return (
    <Page title="about">
      <div className="py-8">curated publication</div>
    </Page>
  );
};

export default About;
