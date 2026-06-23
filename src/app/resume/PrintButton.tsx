"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-2xl bg-[#009ffb] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#008ad9]"
    >
      Download PDF ↓
    </button>
  );
}
