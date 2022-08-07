import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import classNames from "classnames";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { displayHash } from "~lib/display";
import { useTransactionManager } from "../../lib/transactionManager/context";

export function TransactionView() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const { pendingTransactions } = useTransactionManager();

  function showX(hash: string) {
    if (dismissed[hash] === undefined) {
      return true;
    }

    return !dismissed[hash];
  }

  function dismissX(hash: string) {
    setDismissed({
      ...dismissed,
      [hash]: true,
    });
  }

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {pendingTransactions.map((transaction) => (
          <Transition
            show={showX(transaction.hash)}
            key={transaction.hash}
            as={Fragment}
            enter="transform ease-out duration-150 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div
                      className={classNames(
                        "h-6 w-6 rounded-full",
                        transaction.completed
                          ? "bg-gradient-to-br from-green-600 to-green-500 "
                          : "bg-gradient-to-br from-amber-500 to-amber-400 "
                      )}
                    ></div>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Transaction pending
                    </p>
                    <p>{displayHash(transaction.hash)}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        dismissX(transaction.hash);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
}
