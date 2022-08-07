import Link from "next/link";
import { routes } from "../../lib/routes";

export function Navigation() {
  return (
    <div className="flex flex-col space-y-1 px-4 text-gray-500">
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
  );
}
