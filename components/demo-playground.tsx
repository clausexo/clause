"use client";

import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";

interface UploadDocMeta {
  id: string;
  name: string;
  size: number;
  content: string; // simplified placeholder
}

interface QueryResult {
  id: string;
  query: string;
  answer: string;
  citations: { docId: string; snippet: string }[];
  decision?: "APPROVED" | "REQUIRES REVIEW" | "DENIED";
  confidence: number;
}

const sampleDocs: UploadDocMeta[] = [
  {
    id: "1",
    name: "Employment_Agreement.pdf",
    size: 523344,
    content:
      "The Employee will be entitled to 15 days paid vacation annually. Termination requires 30 days written notice. Confidentiality survives termination for a period of 2 years.",
  },
  {
    id: "2",
    name: "Policy_Manual.pdf",
    size: 73455,
    content:
      "All employees must complete security awareness training annually. Remote work is permitted up to 3 days per week with manager approval.",
  },
  {
    id: "3",
    name: "Insurance_Policy.txt",
    size: 18944,
    content:
      "Coverage includes general liability up to $2,000,000 aggregate. Exclusions apply to punitive damages and intentional acts.",
  },
];

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"]; 
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default function DemoPlayground() {
  const [docs, setDocs] = useState<UploadDocMeta[]>(sampleDocs);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<QueryResult[]>([]);
  const [activeResult, setActiveResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const newDocs: UploadDocMeta[] = Array.from(files).map((f, idx) => ({
      id: Date.now() + "-" + idx,
      name: f.name,
      size: f.size,
      content: "(Demo placeholder content — real system would parse this file)" ,
    }));
    setDocs((d) => [...newDocs, ...d]);
  }

  function simulateAnswer(q: string): QueryResult {
    // Very naive mock answer logic for demo screenshot purposes
    const lower = q.toLowerCase();
    let answer = "I analyzed the uploaded documents and generated a response.";
    let decision: QueryResult["decision"] = "REQUIRES REVIEW";
    let citations: QueryResult["citations"] = [];

    if (lower.includes("vacation")) {
      answer = "Employees are entitled to 15 days paid vacation annually per Employment_Agreement.pdf.";
      decision = "APPROVED";
      citations = [
        { docId: "1", snippet: "entitled to 15 days paid vacation annually" },
      ];
    } else if (lower.includes("remote") || lower.includes("work from home")) {
      answer = "Remote work is permitted up to 3 days per week with manager approval (Policy_Manual.pdf).";
      decision = "APPROVED";
      citations = [
        { docId: "2", snippet: "Remote work is permitted up to 3 days per week" },
      ];
    } else if (lower.includes("coverage") || lower.includes("liability")) {
      answer = "Coverage includes general liability up to $2,000,000 aggregate (Insurance_Policy.txt). Exclusions: punitive damages, intentional acts.";
      decision = "APPROVED";
      citations = [
        { docId: "3", snippet: "general liability up to $2,000,000 aggregate" },
      ];
    } else if (lower.includes("confidentiality")) {
      answer = "Confidentiality provisions survive termination for 2 years (Employment_Agreement.pdf).";
      decision = "APPROVED";
      citations = [
        { docId: "1", snippet: "Confidentiality survives termination for a period of 2 years" },
      ];
    } else if (lower.includes("training")) {
      answer = "Security awareness training must be completed annually (Policy_Manual.pdf).";
      decision = "APPROVED";
      citations = [
        { docId: "2", snippet: "must complete security awareness training annually" },
      ];
    } else {
      answer = "No direct clause match identified. Recommend human review.";
      decision = "REQUIRES REVIEW";
    }

    return {
      id: Date.now().toString(),
      query: q,
      answer,
      citations,
      decision,
      confidence: decision === "APPROVED" ? 0.92 : 0.63,
    };
  }

  async function runQuery(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    // Simulate network latency
    setTimeout(() => {
      const res = simulateAnswer(query.trim());
      setResults((r) => [res, ...r]);
      setActiveResult(res.id);
      setLoading(false);
    }, 700);
  }

  return (
    <section id="upload" className="relative border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl pb-10 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Live MVP Demo
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Ask Documents. Get Decisions.
          </h2>
          <p className="text-lg text-indigo-200/65">
            Upload documents (mocked for pitch) and query for instant, evidence-backed decisions with confidence scoring and clause-level citations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12" data-aos="fade-up">
          {/* Left: Upload & Docs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl p-5 bg-linear-to-br from-gray-900/60 via-gray-800/30 to-gray-900/60 backdrop-blur-xs relative before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-700/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-200">Documents</h3>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm px-3 py-1.5 rounded-md bg-indigo-600/90 hover:bg-indigo-500 text-white font-medium transition-colors"
                >
                  Upload
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>
              <ul className="space-y-2 max-h-64 overflow-auto pr-1">
                {docs.map((d) => (
                  <li key={d.id} className="group flex items-center justify-between gap-3 rounded-md border border-gray-700/30 bg-gray-800/40 px-3 py-2 text-sm">
                    <div className="flex flex-col w-full">
                      <span className="text-gray-200 truncate" title={d.name}>{d.name}</span>
                      <span className="text-[11px] text-indigo-300/60">{formatBytes(d.size)}</span>
                    </div>
                    <button
                      onClick={() => setDocs((prev) => prev.filter((x) => x.id !== d.id))}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-rose-400 transition-colors"
                      title="Remove"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-indigo-300/50">
                * Files stored locally in memory only for demo. Real system would extract structured embeddings & metadata securely.
              </p>
            </div>

            <form onSubmit={runQuery} className="rounded-2xl p-5 bg-linear-to-br from-gray-900/60 via-gray-800/30 to-gray-900/60 backdrop-blur-xs relative before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-700/40">
              <label className="block text-sm font-medium text-gray-300 mb-2">Ask a question</label>
              <div className="flex flex-col gap-3">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. What is the vacation entitlement?"
                  rows={3}
                  className="w-full resize-none rounded-md border border-gray-700/40 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <div className="flex items-center justify-between">
                  <div className="text-[11px] text-indigo-300/60">ClauseAI returns a decision with citations</div>
                  <button
                    disabled={loading || !query.trim()}
                    className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {loading && (
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    )}
                    Ask
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-2xl p-5 bg-linear-to-br from-gray-900/60 via-gray-800/30 to-gray-900/60 backdrop-blur-xs relative before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-700/40 min-h-[320px]">
              <h3 className="font-semibold text-gray-200 mb-4">Results</h3>
              {results.length === 0 && !loading && (
                <div className="text-sm text-indigo-300/60 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" /></svg>
                  Ask a question to see AI output here.
                </div>
              )}
              <div className="space-y-4">
                {results.map((r) => {
                  const decisionColor =
                    r.decision === "APPROVED"
                      ? "text-emerald-400"
                      : r.decision === "DENIED"
                        ? "text-rose-400"
                        : "text-amber-400";
                  return (
                    <div
                      key={r.id}
                      className={`rounded-lg border border-gray-700/40 bg-gray-900/50 p-4 text-sm cursor-pointer transition-colors ${activeResult === r.id ? "ring-1 ring-indigo-500/60" : "hover:border-gray-600"}`}
                      onClick={() => setActiveResult(r.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-medium text-indigo-200/90 line-clamp-2">{r.query}</div>
                        <div className={`text-[11px] font-semibold ${decisionColor}`}>{r.decision}</div>
                      </div>
                      <div className="mt-2 text-gray-300/90">
                        {r.answer}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <div className="text-[10px] rounded bg-gray-800/60 px-2 py-1 text-indigo-300/70">Confidence {(r.confidence * 100).toFixed(0)}%</div>
                        {r.citations.map((c, idx) => (
                          <span key={idx} className="text-[10px] rounded bg-indigo-500/15 px-2 py-1 text-indigo-300/80" title={c.snippet}>
                            {c.docId}:{idx + 1}
                          </span>
                        ))}
                      </div>
                      {activeResult === r.id && r.citations.length > 0 && (
                        <div className="mt-3 space-y-2 border-t border-gray-700/40 pt-3">
                          <div className="text-[11px] uppercase tracking-wide text-indigo-400/70">Citations</div>
                          {r.citations.map((c, idx) => (
                            <div key={idx} className="rounded bg-gray-800/60 p-2 text-[11px] text-indigo-200/80">
                              <span className="font-semibold text-indigo-300">{c.docId}</span>: {c.snippet}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 text-[11px]">
              <div className="rounded-lg bg-gray-900/60 border border-gray-700/40 p-3">
                <div className="text-gray-300 font-semibold mb-1 flex items-center gap-1">Decision Engine <span className="text-[10px] font-normal text-indigo-300/60">(Mock)</span></div>
                <p className="text-indigo-300/60">Transforms raw text into structured, auditable outcomes.</p>
              </div>
              <div className="rounded-lg bg-gray-900/60 border border-gray-700/40 p-3">
                <div className="text-gray-300 font-semibold mb-1">Citations</div>
                <p className="text-indigo-300/60">Every answer links to source clauses for trust.</p>
              </div>
              <div className="rounded-lg bg-gray-900/60 border border-gray-700/40 p-3">
                <div className="text-gray-300 font-semibold mb-1">Confidence</div>
                <p className="text-indigo-300/60">Surfaced scoring to prioritize review.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
