"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink, Utensils, CreditCard, Building, Users, Clock, ChefHat, Download, LayoutDashboard, Store, Mail } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background border-b transition-transform duration-300",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#FD8000] dark:text-[#FFA500]">Grub</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] grid-cols-2 grid-rows-3">
                  <ListItem href="/features/easy-employee-meals" title="Easy Employee Meals" icon={Utensils}>
                    Simplify meal ordering for your entire team.
                  </ListItem>
                  <ListItem href="/features/low-restaurant-fees" title="Low Restaurant Fees" icon={Building}>
                    Partner with local restaurants at competitive prices.
                  </ListItem>
                  <ListItem href="/features/integrated-payroll-deductions" title="Integrated Payroll" icon={CreditCard}>
                    Seamless payroll deductions for meals.
                  </ListItem>
                  <ListItem href="/features/team-management" title="Team Management" icon={Users}>
                    Manage teams and meal preferences easily.
                  </ListItem>
                  <ListItem href="/features/scheduled-orders" title="Scheduled Orders" icon={Clock}>
                    Set up recurring orders for your team.
                  </ListItem>
                  <ListItem href="/features/customizable-menus" title="Customizable Menus" icon={ChefHat}>
                    Create custom menus for your team.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] grid-cols-2 grid-rows-2">
                  <ListItem href="/download" title="Download App" icon={Download}>
                    Get the Grub app for iOS and Android devices.
                  </ListItem>
                  <ListItem href="https://company.grubapp.co/" title="Company Console" icon={LayoutDashboard}>
                    Manage your company's meal program and employee accounts.
                  </ListItem>
                  <ListItem href="https://restaurant.grubapp.co/" title="Restaurant Console" icon={Store}>
                    For restaurant partners to manage menus and orders.
                  </ListItem>
                  <ListItem href="/contact" title="Contact" icon={Mail}>
                    Get in touch with our support team for assistance.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white">
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
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
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center mb-2">
            {Icon && <Icon className="mr-2 h-5 w-5 text-[#FD8000]" />}
            {title}
            {props.href?.startsWith('http') && <ExternalLink className="inline-block w-3 h-3 ml-1" />}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

