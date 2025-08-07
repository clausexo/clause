"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";

// Icons for different professional use cases
import InsuranceIcon from "@/public/images/client-logo-01.svg";
import LegalIcon from "@/public/images/client-logo-02.svg";
import HRIcon from "@/public/images/client-logo-03.svg";

const useCases = [
  {
    icon: InsuranceIcon,
    title: "Insurance Professionals",
    content:
      "Instantly verify policy coverage and exclusions for claims processing, reducing manual review time by over 90%.",
    category: "Insurance",
    categories: [1, 2],
  },
  {
    icon: LegalIcon,
    title: "Legal Teams",
    content:
      "Accelerate due diligence and contract review by finding precedents and critical clauses across thousands of pages in seconds.",
    category: "Legal",
    categories: [1, 3],
  },
  {
    icon: HRIcon,
    title: "HR Departments",
    content:
      "Get fast, accurate answers about internal company policies and employee contracts without ambiguity.",
    category: "Human Resources",
    categories: [1, 4],
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
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Designed for Demanding Professionals
          </h2>
          <p className="text-lg text-indigo-200/65">
            ClauseAI empowers professionals across industries to make faster, more informed decisions by instantly analyzing complex documents with AI precision.
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
  };
  children: React.ReactNode;
}) {
  return (
    <article className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src={useCase.icon} height={48} width={48} alt={`${useCase.category} icon`} />
          <h3 className="text-xl font-semibold text-gray-200 font-nacelle">
            {useCase.title}
          </h3>
        </div>
        <p className="text-indigo-200/65 text-lg leading-relaxed">
          {children}
        </p>
        <div className="text-sm font-medium text-indigo-400">
          {useCase.category}
        </div>
      </div>
    </article>
  );
}
