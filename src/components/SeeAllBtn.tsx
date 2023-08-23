import Link from "next/link";

export default function SeeAllBtn({ href }: { href: string }) {
  return (
    <>
      <Link
        href={href}
        style={{ marginLeft: "5px" }}
        className="btn btn-default btn-sm text-danger"
      >
        See All
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </Link>
    </>
  );
}
