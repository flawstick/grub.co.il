import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-5">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Oops! Page not found.</p>
        <Button asChild className="group hover:scale-105">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span>Go back to home</span>
            <ArrowRight className="w-4 h-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
