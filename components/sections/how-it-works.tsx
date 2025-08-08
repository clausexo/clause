import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Ingest",
      text: "Upload contracts, policies, manuals. (OCR + text normalization pipeline in production; mocked here.)",
    },
    {
      title: "2. Enrich",
      text: "Chunking, semantic + structural embeddings, entity & clause tagging for retrieval precision.",
    },
    {
      title: "3. Reason",
      text: "Retriever + domain prompt templates + tool-augmented LLM produce structured decision JSON.",
    },
    {
      title: "4. Decide",
      text: "Decision layer applies guardrails, consistency rules & confidence scoring per policy logic.",
    },
    {
      title: "5. Explain",
      text: "Citation mapper links every answer fragment back to source clause & page for audit.",
    },
  ];
  return (
    <section id="how" className="relative border-t py-16 md:py-24 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-10 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">Pipeline</span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">How ClauseAI Works Under The Hood</h2>
          <p className="text-lg text-indigo-200/65">A production‑ready architecture designed for accuracy, auditability, and latency performance. Below is the simplified flow.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl p-5 bg-linear-to-br from-gray-900/60 via-gray-800/30 to-gray-900/60 backdrop-blur-xs before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-700/40">
              <div className="mb-2 text-sm font-semibold text-indigo-400">{s.title}</div>
              <p className="text-xs leading-relaxed text-indigo-200/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
