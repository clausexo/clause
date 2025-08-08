export const metadata = {
  title: "ClauseAI - Intelligent Document Decisions",
  description: "AI-powered document intelligence demo platform",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import DemoPlayground from "@/components/demo-playground";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import HowItWorks from "@/components/sections/how-it-works";
import Metrics from "@/components/sections/metrics";
import Security from "@/components/sections/security";
import Faq from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <DemoPlayground />
      <HowItWorks />
      <Metrics />
      <Workflows />
      <Features />
      <Security />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
