"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import clsx from "clsx";

export const NavMenu = ({ orientation = "horizontal", className }) => {
  const isVertical = orientation === "vertical";

  return (
    <NavigationMenu
      className={clsx(
        "relative z-50",
        isVertical
          ? "flex flex-col items-start justify-start"
          : "flex flex-row items-center justify-center",
        className
      )}
    >
      <NavigationMenuList
        className={clsx(
          "gap-4",
          isVertical
            ? "flex-col items-start justify-start"
            : "flex-row items-center justify-center"
        )}
      >
        {[
          { href: "/#home", label: "Home" },
          { href: "/#ecologia", label: "Ecologia" },
          { href: "/sobre", label: "Sobre Nós" },
          { href: "/blog", label: "Blog" },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="text-lg transition-colors text-foreground"
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
