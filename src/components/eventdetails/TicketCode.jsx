"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function TicketCode() {
  const ticketCode = "AFN-2026-7K4X";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ticketCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex items-center gap-2 ">
      <span className="font-semibold text-[#d94900] tracking-wide">
        {ticketCode}
      </span>

      <button
        onClick={handleCopy}
        className="text-[#123499]  hover:opacity-80 transition"
      >
        {copied ? (
          <Check size={16} className="text-green-600" />
        ) : (
          <Copy className="w-[18px] h-[18px] text-[#123499] border-[2.67px]" size={16} />
        )}
      </button>
    </div>
  );
}