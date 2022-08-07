import Link from "next/link";
import { useRouter } from "next/router";
import { Page } from "~components/app/page/Page";
import { SubmitForm } from "~components/app/SubmitForm";

const Issue = () => {
  const router = useRouter();
  const { issueId } = router.query;

  return (
    <Page title="Submit">
      <div className="py-10">
        <div className="border p-3 mb-5 text-sm">
          <div>submissions: open</div>
          <div>issue #: 1</div>
          <div>fee: 0.1 eth</div>
        </div>

        <SubmitForm onSubmit={console.log} />
      </div>
    </Page>
  );
};

export default Issue;
