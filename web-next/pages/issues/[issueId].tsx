import Link from "next/link";
import { useRouter } from "next/router";
import { Page } from "../../components/app/page/Page";

const Issue = () => {
  const router = useRouter();
  const { issueId } = router.query;

  return (
    <Page title={`Issue #${issueId}`}>
      <div className="py-10">
        <Link href="/features/1">
          {"A u n t N a t a l i a H a g g l e s f o r t h e B l a c k E e l"}
        </Link>
      </div>
    </Page>
  );
};

export default Issue;
