import React from "react";

export default function Security() {
  const items = [
    {
      title: "Data Boundary",
      text: "No training on customer data. All processing stateless in demo; production isolates tenant index layers.",
    },
    {
      title: "Field Level Redaction",
      text: "PII & secrets masked pre-embedding to prevent leakage while preserving semantic utility.",
    },
    {
      title: "Audit Evidence",
      text: "Every answer stores clause hash + offset range for reproducibility and chain-of-custody.",
    },
    {
      title: "Guardrails",
      text: "Policy validator checks reasoning JSON for unsupported claims & hallucination risk signals.",
    },
  ];
  return (
    <section id="security" className="relative border-t py-16 md:py-24 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl pb-10 text-center">
          <h2 className="font-nacelle text-2xl font-semibold text-gray-200 md:text-3xl mb-3">Built For Trust & Compliance</h2>
          <p className="text-indigo-200/65 text-lg">Security & governance principles embedded at every layer of the architecture.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((i, idx) => (
            <div key={idx} className="relative rounded-2xl p-6 bg-linear-to-br from-gray-900/60 via-gray-800/30 to-gray-900/60 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-700/40">
              <h3 className="mb-2 text-sm font-semibold text-indigo-300">{i.title}</h3>
              <p className="text-sm text-indigo-200/70 leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
