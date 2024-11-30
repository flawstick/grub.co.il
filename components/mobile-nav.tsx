"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Menu,
  Utensils,
  CreditCard,
  Building,
  Users,
  Clock,
  ChefHat,
  Download,
  LayoutDashboard,
  Store,
  Mail,
  Info,
  Star,
  Calendar,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { GrubIcon } from "./icons";

const navItems = [
  { title: "About", href: "/about", icon: Info },
  {
    title: "Features",
    href: "/features",
    icon: Star,
    subItems: [
      {
        title: "Easy Employee Meals",
        href: "/features/easy-employee-meals",
        icon: Utensils,
      },
      {
        title: "Low Restaurant Fees",
        href: "/features/low-restaurant-fees",
        icon: Building,
      },
      {
        title: "Integrated Payroll",
        href: "/features/integrated-payroll-deductions",
        icon: CreditCard,
      },
      {
        title: "Team Management",
        href: "/features/team-management",
        icon: Users,
      },
      {
        title: "Scheduled Orders",
        href: "/features/scheduled-orders",
        icon: Clock,
      },
      {
        title: "Customizable Menus",
        href: "/features/customizable-menus",
        icon: ChefHat,
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    icon: LayoutDashboard,
    subItems: [
      { title: "Download App", href: "/download", icon: Download },
      {
        title: "Company Console",
        href: "https://company.grubapp.co/",
        icon: LayoutDashboard,
      },
      {
        title: "Restaurant Console",
        href: "https://restaurant.grubapp.co/",
        icon: Store,
      },
      { title: "Contact", href: "/contact", icon: Mail },
    ],
  },
  { title: "Testimonials", href: "/testimonials", icon: Star },
  { title: "Book a Demo", href: "/book-demo", icon: Calendar },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    const initialOpenState = navItems.reduce(
      (acc, item) => {
        if (item.subItems) {
          acc[item.title] = true;
        }
        return acc;
      },
      {} as Record<string, boolean>,
    );
    setOpenItems(initialOpenState);
  }, []);

  // intersection observer for the sheet header
  const headerRef = React.useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.5 },
    );
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu style={{ width: "1.5rem", height: "1.5rem" }} />
        </Button>
      </SheetTrigger>
      <SheetTitle />
      <SheetContent side="left" className="pr-0 pl-0">
        <SheetHeader className="border-b px-4">
          <MobileLink
            href="/"
            className="flex items-center gap-2 mb-4"
            onOpenChange={setOpen}
          >
            <GrubIcon size={32} />
            <span className="font-bold text-[#FD8000] text-xl">Grub</span>
          </MobileLink>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pl-0 border-b">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.subItems ? (
                  <Collapsible
                    open={openItems[item.title]}
                    onOpenChange={(isOpen) =>
                      setOpenItems((prev) => ({
                        ...prev,
                        [item.title]: isOpen,
                      }))
                    }
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4 text-primary" />
                        {item.title}
                        <motion.div
                          className="ml-auto"
                          animate={{ rotate: openItems[item.title] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4 text-primary" />
                        </motion.div>
                      </Button>
                    </CollapsibleTrigger>
                    <AnimatePresence initial={false}>
                      {openItems[item.title] && (
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <CollapsibleContent className="ml-4 mt-2 space-y-2">
                            {item.subItems.map((subItem) => (
                              <MobileLink
                                key={subItem.title}
                                href={subItem.href}
                                onOpenChange={setOpen}
                                className="flex items-center"
                              >
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start"
                                >
                                  <subItem.icon className="mr-2 h-4 w-4 text-primary" />
                                  {subItem.title}
                                </Button>
                              </MobileLink>
                            ))}
                          </CollapsibleContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Collapsible>
                ) : (
                  <MobileLink
                    href={item.href}
                    onOpenChange={setOpen}
                    className="flex items-center"
                  >
                    <Button variant="ghost" className="w-full justify-start">
                      <item.icon className="mr-2 h-4 w-4 text-primary" />
                      {item.title}
                    </Button>
                  </MobileLink>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
