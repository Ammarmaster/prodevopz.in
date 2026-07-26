"use client";

import { Printer } from "lucide-react";

interface Props {
  label?: string;
}

export default function PrintButton({ label = "Save PDF / Print" }: Props) {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.print();
        }
      }}
      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity print:hidden"
    >
      <Printer className="w-4 h-4" /> {label}
    </button>
  );
}
