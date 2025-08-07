"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";

// Icons for different professional use cases
import InsuranceIcon from "@/public/images/insurance-icon.svg";
import LegalIcon from "@/public/images/legal-icon.svg";
import HRIcon from "@/public/images/hr-icon.svg";

const useCases = [
  {
    icon: InsuranceIcon,
    title: "Insurance Professionals",
    content:
      "Transform claims processing with instant policy analysis. Verify coverage, identify exclusions, and process claims with 95% accuracy in seconds instead of hours. Never miss critical policy details again.",
    category: "Insurance & Risk",
    categories: [1, 2],
    highlight: "95% faster claims processing",
  },
  {
    icon: LegalIcon,
    title: "Legal Teams",
    content:
      "Revolutionize legal research and due diligence. Find precedents, analyze contracts, and extract critical clauses from massive document sets instantly. Turn weeks of review into minutes of precise analysis.",
    category: "Legal & Compliance",
    categories: [1, 3],
    highlight: "Weeks to minutes analysis",
  },
  {
    icon: HRIcon,
    title: "HR Departments",
    content:
      "Streamline policy compliance and employee relations. Get instant, accurate answers about company policies, employment contracts, and benefits. Ensure consistent policy interpretation across your organization.",
    category: "Human Resources",
    categories: [1, 4],
    highlight: "Consistent policy clarity",
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Professional Solutions
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Designed for Demanding Professionals
          </h2>
          <p className="text-lg text-indigo-200/65">
            ClauseAI empowers professionals across industries to make faster, more informed decisions by instantly analyzing complex documents with enterprise-grade AI precision. Trusted by teams who can't afford to miss critical details.
          </p>
        </div>

        <div>
          {/* Cards */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-1 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <UseCase useCase={useCase}>
                  {useCase.content}
                </UseCase>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={testimonial.clientImg} height={36} alt="Client logo" />
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function UseCase({
  useCase,
  children,
}: {
  useCase: {
    icon: StaticImageData;
    title: string;
    content: string;
    category: string;
    categories: number[];
    highlight: string;
  };
  children: React.ReactNode;
}) {
  return (
    <article className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs transition-all duration-300 hover:scale-[1.02] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:before:[background:linear-gradient(to_right,rgba(79,70,229,0.2),rgba(124,58,237,0.2),rgba(79,70,229,0.2))_border-box]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image src={useCase.icon} height={48} width={48} alt={`${useCase.category} icon`} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 font-nacelle mb-1">
              {useCase.title}
            </h3>
            <div className="text-sm font-medium text-indigo-400">
              {useCase.category}
            </div>
          </div>
        </div>
        <p className="text-indigo-200/65 text-lg leading-relaxed">
          {children}
        </p>
        <div className="pt-2 border-t border-gray-700/50">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {useCase.highlight}
          </div>
        </div>
      </div>
    </article>
  );
}
