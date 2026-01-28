"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ValidCategories = "men" | "women" | "kid" | "uniforms";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  className?: string;
}

const CATEGORY_LABELS: Record<ValidCategories, string> = {
  men: "Hombre",
  women: "Mujer",
  kid: "Niños",
  uniforms: "Uniformes",
};

const ROUTE_LABELS: Record<string, string> = {
  productos: "Productos",
  nosotros: "Nosotros",
  contacto: "Contacto",
};

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();

  const breadcrumbs = generateBreadcrumbs(pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("py-4", className)}>
      <ol
        className="flex items-center gap-2 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <Fragment key={item.href}>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                {isLast ? (
                  <span
                    itemProp="name"
                    className="text-[#585858] font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-[#585858] hover:text-[#C70212] transition-colors"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>

              {!isLast && (
                <li aria-hidden="true" className="text-[#B8B8B8]">
                  {">"}
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "Inicio",
      href: "/",
    },
  ];

  let currentPath = "";

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    // Handle category routes
    if (segment === "category" && i + 1 < segments.length) {
      const categorySlug = segments[i + 1] as ValidCategories;

      breadcrumbs.push({
        label: CATEGORY_LABELS[categorySlug] ?? categorySlug,
        href: `/category/${categorySlug}`,
      });

      i++;
      currentPath = `/category/${categorySlug}`;
      continue;
    }

    // Handle known routes
    const label =
      ROUTE_LABELS[segment] ??
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    breadcrumbs.push({
      label,
      href: currentPath,
    });
  }

  return breadcrumbs;
}
