"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  title: string;
  subItems?: { id: string; title: string }[];
}

interface SideNavigationProps {
  items: NavItem[];
}

export function SideNavigation({ items }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
      item.subItems?.forEach((subItem) => {
        const subElement = document.getElementById(subItem.id);
        if (subElement) observer.observe(subElement);
      });
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden md:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto p-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block py-2 px-4 rounded-md transition-colors",
                activeSection === item.id
                  ? "bg-[#FD8000] text-white"
                  : "hover:bg-[#FD8000]/10",
              )}
            >
              {item.title}
            </a>
            {item.subItems && (
              <ul className="ml-4 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <a
                      href={`#${subItem.id}`}
                      className={cn(
                        "block py-1 px-4 rounded-md transition-colors text-sm",
                        activeSection === subItem.id
                          ? "bg-[#FFA500] text-white"
                          : "hover:bg-[#FFA500]/10",
                      )}
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
