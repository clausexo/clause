import React from "react";

const faqs = [
  {
    q: "Is the demo using production inference?",
    a: "No. The playground mocks retrieval + reasoning with deterministic templates for pitch speed. Architecture is designed to swap to real pipeline with minimal changes.",
  },
  {
    q: "How are citations generated?",
    a: "In production we store token offsets and semantic chunk IDs; demo simulates by mapping heuristics over sample text snippets.",
  },
  {
    q: "Can we deploy on-prem?",
    a: "Yes. Vector store + model gateway abstracted behind interfaces for cloud or VPC deployment.",
  },
  {
    q: "How do you reduce hallucinations?",
    a: "Retriever constraints, answer schema validation, citation alignment checks, and refusal triggers on unsupported claims.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative border-t py-16 md:py-24 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl pb-10 text-center">
          <h2 className="font-nacelle text-2xl font-semibold text-gray-200 md:text-3xl mb-3">FAQ</h2>
          <p className="text-indigo-200/65 text-lg">Common questions from reviewers & early adopters.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-gray-700/40 bg-gray-900/40 p-5 transition-all">
              <summary className="cursor-pointer list-none select-none font-medium text-gray-200 flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-md bg-gray-800 text-xs text-indigo-300 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-indigo-200/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
