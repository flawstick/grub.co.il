"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import {
  ExternalLink,
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
} from "lucide-react";
import { GrubIcon } from "./icons";
import { LocaleSwitcher } from "./locale-select";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/use-direction";

export function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const { direction } = useDirection();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background border-b transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="flex h-16 items-center px-4">
        <MobileNav />
        <Link href="/" className="ltr:mr-6 rtl:ml-6 flex items-center gap-x-2">
          <GrubIcon size={36} />
          <span className="text-2xl font-bold text-[#FD8000] dark:text-[#FFA500]">
            {t("grub")}
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex" dir={direction}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/about" && "bg-accent text-accent-foreground",
                  )}
                >
                  {t("about")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  pathname.startsWith("/features") &&
                    "bg-accent text-accent-foreground",
                )}
              >
                {t("features.title")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] grid-cols-2 grid-rows-3">
                  <ListItem
                    href="/features/easy-employee-meals"
                    title={t("features.easyEmployeeMeals")}
                    icon={Utensils}
                  >
                    {t("features.easyEmployeeMealsDescription")}
                  </ListItem>
                  <ListItem
                    href="/features/low-restaurant-fees"
                    title={t("features.lowRestaurantFees")}
                    icon={Building}
                  >
                    {t("features.lowRestaurantFeesDescription")}
                  </ListItem>
                  <ListItem
                    href="/features/integrated-payroll-deductions"
                    title={t("features.integratedPayroll")}
                    icon={CreditCard}
                  >
                    {t("features.integratedPayrollDescription")}
                  </ListItem>
                  <ListItem
                    href="/features/team-management"
                    title={t("features.teamManagement")}
                    icon={Users}
                  >
                    {t("features.teamManagementDescription")}
                  </ListItem>
                  <ListItem
                    href="/features/scheduled-orders"
                    title={t("features.scheduledOrders")}
                    icon={Clock}
                  >
                    {t("features.scheduledOrdersDescription")}
                  </ListItem>
                  <ListItem
                    href="/features/customizable-menus"
                    title={t("features.customizableMenus")}
                    icon={ChefHat}
                  >
                    {t("features.customizableMenusDescription")}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  pathname.startsWith("/resources") &&
                    "bg-accent text-accent-foreground",
                )}
              >
                {t("resources.title")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] grid-cols-2 grid-rows-2">
                  <ListItem
                    href="/download"
                    title={t("resources.downloadApp")}
                    icon={Download}
                  >
                    {t("resources.downloadAppDescription")}
                  </ListItem>
                  <ListItem
                    href="https://company.grub.co.il/"
                    title={t("resources.companyConsole")}
                    icon={LayoutDashboard}
                  >
                    {t("resources.companyConsoleDescription")}
                  </ListItem>
                  <ListItem
                    href="https://restaurant.grub.co.il/"
                    title={t("resources.restaurantConsole")}
                    icon={Store}
                  >
                    {t("resources.restaurantConsoleDescription")}
                  </ListItem>
                  <ListItem
                    href="/contact"
                    title={t("resources.contact")}
                    icon={Mail}
                  >
                    {t("resources.contactDescription")}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/testimonials" &&
                      "bg-accent text-accent-foreground",
                  )}
                >
                  {t("testimonials")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ltr:ml-auto rtl:mr-auto flex items-center gap-x-2">
          <ThemeToggle className="hidden md:flex" />
          <LocaleSwitcher />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white"
            >
              <Link href="/book-demo">{t("bookDemo")}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center mb-2">
            {Icon && (
              <Icon className="ltr:mr-2 rtl:ml-2 h-5 w-5 text-[#FD8000]" />
            )}
            {title}
            {props.href?.startsWith("http") && (
              <ExternalLink className="inline-block w-3 h-3 ltr:ml-1 rtl:mr-1 rtl:rotate-[270deg]" />
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
