"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";
import React from "react";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/docs")) return null;

  let currentGroup = "";

  return (
    <div className="flex flex-col gap-3 mt-3 pr-2 pb-6">
      {ROUTES.map((item, index) => {
        const isNewGroup = Boolean(item.group && item.group !== currentGroup);
        if (isNewGroup) {
          currentGroup = item.group!;
        }

        const modifiedItems = {
          ...item,
          href: `/docs${item.href}`,
          level: 0,
          isSheet,
        };

        return (
          <React.Fragment key={item.title + index}>
            {isNewGroup && (
              <div
                className={`text-[11px] font-semibold tracking-wider text-muted-foreground/80 uppercase select-none ${
                  index > 0 ? "pt-5 mt-2 border-t border-border/40" : "pt-1"
                } pb-1 pl-1`}
              >
                {item.group}
              </div>
            )}
            <SubLink {...modifiedItems} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
