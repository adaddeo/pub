import Link from "next/link";
import { routes } from "../../lib/routes";
import { AdminOnly } from "./AdminOnly";
import { Profile } from "./Profile";

export function Navigation() {
  return (
    <div className="px-4 text-gray-500">
      <div className="flex flex-col space-y-1">
        <Link href={routes.home}>
          <a className="text-lg font-bold mb-4">litpub</a>
        </Link>
        <Link href={routes.issues}>
          <a>magazine</a>
        </Link>
        <Link href={routes.about}>
          <a>about</a>
        </Link>
        <Link href={routes.submit}>
          <a>submit</a>
        </Link>
      </div>
      <div className="my-5">
        <Profile />
      </div>

      <AdminOnly>
        <div className="flex flex-col space-y-1">
          <div className="text-xs font-bold">Admin</div>
          <Link href={routes.issuesNew}>New Issue</Link>
        </div>
      </AdminOnly>
    </div>
  );
}
