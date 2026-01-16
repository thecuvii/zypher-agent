"use client";
import { usePathname } from "fumadocs-core/framework";
import Link from "fumadocs-core/link";
import { Check, ChevronsUpDown } from "lucide-react";
import { type ComponentProps, type ReactNode, useMemo, useState } from "react";
import { cn } from "../../../../lib/cn";
import { isActive, normalize } from "../../../../lib/urls";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { useSidebar } from "../base";
import type { SidebarTab } from "./index";

export interface SidebarTabWithProps extends SidebarTab {
  props?: ComponentProps<"a">;
}

export function SidebarTabsDropdown({
  options,
  placeholder,
  ...props
}: {
  placeholder?: ReactNode;
  options: SidebarTabWithProps[];
} & ComponentProps<"button">) {
  const [open, setOpen] = useState(false);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();

  const selected = useMemo(() => {
    return options.findLast((item) => isTabActive(item, pathname));
  }, [options, pathname]);

  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };

  const item = selected ? (
    <>
      <div className="size-9 shrink-0 empty:hidden md:size-5">
        {selected.icon}
      </div>
      <div>
        <p className="text-[13px] font-mono text-text-high">{selected.title}</p>
        <p className="text-xs text-text-low empty:hidden md:hidden">
          {selected.description}
        </p>
      </div>
    </>
  ) : (
    placeholder
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {item && (
        <PopoverTrigger
          {...props}
          className={cn(
            "flex items-center gap-2 px-4 py-3 py border-y mt-4 mb-8 bg-box-b0 text-start text-text-high transition-colors hover:bg-surface-s1 data-[state=open]:bg-box-b1/60 data-[state=open]:text-text-base",
            props.className,
          )}
        >
          {item}
          <ChevronsUpDown className="shrink-0 ms-auto size-4 text-text-high" />
        </PopoverTrigger>
      )}
      <PopoverContent className="flex flex-col shadow-xs divide-y divide-outline-low p-0 bg-white fd-scroll-container rounded-none">
        {options.map((item) => {
          const isActive = selected && item.url === selected.url;
          if (!isActive && item.unlisted) return;

          return (
            <Link
              key={item.url}
              href={item.url}
              onClick={onClick}
              {...item.props}
              className={cn(
                "flex items-center gap-2 m-0 px-3.5 py-3 hover:bg-surface-s1 hover:text-text-high",
                item.props?.className,
              )}
            >
              <div className="shrink-0 size-9 bg-surface-s0 md:mb-auto md:size-5 empty:hidden">
                {item.icon}
              </div>
              <div>
                <p className="text-[13px] font-mono font-medium text-text-high leading-none">
                  {item.title}
                </p>
                <p className="text-xs text-text-low mt-1.5 empty:hidden">
                  {item.description}
                </p>
              </div>

              <Check
                className={cn(
                  "shrink-0 ms-auto size-3.5 text-fd-primary",
                  !isActive && "invisible",
                )}
              />
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

export function isTabActive(tab: SidebarTab, pathname: string) {
  if (tab.urls) return tab.urls.has(normalize(pathname));

  return isActive(tab.url, pathname, true);
}
