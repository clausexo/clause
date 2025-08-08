import React from "react";

export default function Metrics() {
  const metrics = [
    { value: "95%", label: "Clause Match Precision (target)" },
    { value: "<8s", label: "Avg Decision Latency (demo)" },
    { value: "100%", label: "Source Citations" },
    { value: "40%", label: "Manual Review Reduction" },
    { value: "2x", label: "Throughput vs Legacy" },
  ];
  return (
    <section id="metrics" className="relative border-t py-16 md:py-24 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl pb-10 text-center">
          <h2 className="font-nacelle text-2xl font-semibold text-gray-200 md:text-3xl mb-3">Results That Matter</h2>
          <p className="text-indigo-200/65 text-lg">Key performance targets driving ROI for underwriting, compliance and contract ops teams.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <div key={i} className="rounded-2xl bg-linear-to-br from-gray-900/60 via-gray-800/30 to-gray-900/60 p-6 text-center backdrop-blur-xs before:pointer-events-none before:absolute before:rounded-[inherit] before:border before:border-gray-700/40 relative">
              <div className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">{m.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-wide text-indigo-300/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
