import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BaseLayout } from "@/components/layout/base-layout";

export default function NotFound() {
  return (
    <BaseLayout locale="en">
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="text-center space-y-5">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <p className="text-xl text-muted-foreground">Oops! Page not found.</p>
          <Button
            asChild
            className="group hover:scale-105 duration-300 transition-all ease-in-out"
          >
            <Link href="/en" className="inline-flex items-center">
              <span>Go back to home</span>
              <ArrowRight className="w-5 h-5 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
}
