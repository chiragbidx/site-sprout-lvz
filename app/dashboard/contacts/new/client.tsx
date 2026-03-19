import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewContactClient() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Add New Contact</h1>
      {/* Placeholder for future contact form */}
      <div className="rounded-lg border border-muted/30 bg-muted/30 p-8 mb-6 text-center">
        <p className="text-muted-foreground mb-4">Contact form coming soon.</p>
      </div>
      <Button asChild>
        <Link href="/dashboard/contacts">Save Contact</Link>
      </Button>
    </div>
  );
}