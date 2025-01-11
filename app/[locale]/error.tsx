"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-5">
        <h1 className="text-8xl font-bold text-primary">Oops!</h1>
        <p className="text-xl text-muted-foreground">Something went wrong.</p>
        <div className="flex space-x-4">
          <Button onClick={reset} variant="outline" className="group">
            <RefreshCcw className="w-4 h-4 mr-2 transition-all duration-300 ease-in-out group-hover:rotate-180" />
            Try again
          </Button>
          <Button asChild className="group">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span>Go back to home</span>
              <ArrowRight className="w-4 h-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
