import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OverviewPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <div className="rounded-lg border border-muted/30 bg-muted/30 p-8 text-center mb-6">
        <p className="text-muted-foreground mb-2">
          Get insights on your sales pipeline and client growth.
        </p>
        <p className="text-muted-foreground mb-4">
          Add your first contact or deal to start tracking your CRM activity.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/dashboard/contacts/new">Add Contact</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/dashboard/deals/new">Create Deal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}