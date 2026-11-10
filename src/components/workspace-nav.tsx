"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Dashboard", href: "/" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Characters", href: "/characters" },
  { label: "Sessions", href: "/sessions" },
];

export default function WorkspaceNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Workspace navigation">
      <ul className="space-y-2">
        {navigation.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`block rounded-lg px-4 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e1bf83] ${
                  active
                    ? "bg-[#393325] font-semibold text-[#f4d496]"
                    : "text-[#d6cebe] hover:bg-[#272936] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
