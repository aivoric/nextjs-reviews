"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href, prefetch }) {
  const pathname = usePathname();
  if (pathname === href) {
    return <a className="text-orange-800">{children}</a>;
  }

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="text-orange-800 hover:underline"
    >
      {children}
    </Link>
  );
}

export default NavLink;
