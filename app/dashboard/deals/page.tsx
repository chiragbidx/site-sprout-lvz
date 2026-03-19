import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DealsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Deals</h1>
        <Button asChild>
          <Link href="/dashboard/deals/new">Create Deal</Link>
        </Button>
      </div>
      <div className="rounded-lg border border-dashed border-muted p-8 text-center text-muted-foreground">
        <p className="mb-4">No deals in your pipeline.</p>
        <Button asChild>
          <Link href="/dashboard/deals/new">Create Deal</Link>
        </Button>
      </div>
    </div>
  );
}