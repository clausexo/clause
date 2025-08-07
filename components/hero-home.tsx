import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl">
          <div className="aspect-[1318/752] w-[82.375rem] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 opacity-25" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            {/* Announcement badge */}
            <div 
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200"
              data-aos="fade-up"
            >
              <svg className="h-4 w-4 fill-indigo-400" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 12H6V7h1v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
              </svg>
              New: AI-Powered Document Intelligence Platform
            </div>

            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-5xl font-bold text-transparent md:text-7xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Introducing Clause.
            </h1>
            <h2
              className="pb-6 font-nacelle text-3xl font-medium text-gray-300 md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Your Portal Through the Noise.
            </h2>
            
            <div className="mx-auto max-w-4xl">
              <p
                className="mb-4 text-xl text-indigo-200/80 md:text-2xl"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Turn your biggest information challenges into your greatest strengths.
              </p>
              <p
                className="mb-10 text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Whether you're assessing risk, verifying compliance, or analyzing contracts, ClauseAI delivers evidence-backed answers from complex documents in seconds, not hours.
              </p>
              
              {/* Enhanced CTA section */}
              <div className="mx-auto max-w-md sm:flex sm:max-w-none sm:justify-center sm:gap-4">
                <div data-aos="fade-up" data-aos-delay={500}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] px-8 py-4 text-lg font-semibold text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] hover:shadow-lg hover:shadow-indigo-500/25 sm:mb-0 sm:w-auto"
                    href="#upload"
                  >
                    <span className="relative inline-flex items-center">
                      <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16l13-8L7 4z" />
                      </svg>
                      Try the Demo
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] px-8 py-4 text-lg font-medium text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hover:text-white sm:w-auto"
                    href="#features"
                  >
                    <span className="relative inline-flex items-center">
                      <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Learn More
                    </span>
                  </a>
                </div>
              </div>

              {/* Trust indicators */}
              <div 
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-200/50"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Enterprise Security
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  90%+ Accuracy
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant Results
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="ClauseAI Demo Video"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
