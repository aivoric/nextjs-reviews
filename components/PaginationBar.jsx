import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PaginationBar({ page, pageCount, href }) {
  return (
    <div className="flex items-center gap-2">
      <PaginationLink enabled={page > 1} href={`${href}?page=${page - 1}`}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} or {pageCount}
      </span>
      <PaginationLink
        enabled={page < pageCount}
        href={`${href}?page=${page + 1}`}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, enabled, href }) {
  if (!enabled) {
    return (
      <span
        className="cursor-not-allowed rounded border text-sm text-slate-300"
        href={href}
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      className="rounded border text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
      href={href}
    >
      {children}
    </Link>
  );
}
