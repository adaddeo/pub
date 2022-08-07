import type { NextPage } from "next";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { Page } from "~components/app/page/Page";
import {
  NewIssueForm,
  NewIssueFormValues,
} from "~components/app/issue/NewIssueForm";
import { Publication__factory, Publication } from "~lib/typechain";
import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import { useTransactionManager } from "~lib/transactionManager";

const Issues: NextPage = () => {
  const [args, setArgs] = useState<any | null>(null);
  const { add } = useTransactionManager();

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: "0x86B9246a772d12DC72eE1E0371991a6BF5eA86f9",
    contractInterface: Publication__factory.createInterface(),
    functionName: "createIssue",
    args,
    enabled: args !== null,
  });

  const { write, writeAsync, isError, data, error } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  function handleChange(values: NewIssueFormValues) {
    console.log(values);
    setArgs([0, 1, parseEther(values.submissionFee.toString())]);
  }

  async function handleSubmit() {
    if (!writeAsync) {
      return;
    }

    const result = await writeAsync();
    add(result.hash);

    console.log("write", result);
    result.wait().then((re) => console.log("wait", re));
  }

  return (
    <Page title="New Issue">
      <div className="px-6 py-4 bg-white shadow-sm">
        <NewIssueForm onSubmit={console.log} onChange={handleChange} />
        <button
          className="px-4 disabled:text-gray-100"
          onClick={handleSubmit}
          disabled={!write || isLoading}
        >
          {isLoading ? "Creating issue..." : "Create new issue"}
        </button>
        {isSuccess && (
          <div>
            Created a new issue
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </div>
    </Page>
  );
};

export default Issues;
