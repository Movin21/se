import Footer from "@/components/footer"

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-10 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary">What We Do</h1>
              <p className="mx-auto mt-2 max-w-[700px] text-base md:text-lg text-muted-foreground">
                Fostering innovation, building skills, and creating tomorrow's tech leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="w-full py-6 md:py-10 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row mb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-primary">Upcoming Events</h2>
              <p className="mt-1 text-sm text-muted-foreground">Join us at our upcoming events and activities</p>
            </div>
          </div>

          {/* Instagram-style posts layout */}
          <div className="mt-4">
            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory touch-pan-x">
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJwIZRsIOmM/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[calc(100vw-4rem)] max-w-[320px] flex-none snap-center"
              >
                <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                    <img
                      src="/images/events/agm-2025.png"
                      alt="Annual General Meeting 2025/26"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJfzSa7SbIL/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[calc(100vw-4rem)] max-w-[320px] flex-none snap-center"
              >
                <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                    <img
                      src="/images/events/women-in-tech.png"
                      alt="Women in Tech Workshop by Perituza"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJwIZRsIOmM/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                    <img
                      src="/images/events/agm-2025.png"
                      alt="Annual General Meeting 2025/26"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJfzSa7SbIL/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                    <img
                      src="/images/events/women-in-tech.png"
                      alt="Women in Tech Workshop by Perituza"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Projects Section */}
      <section id="csr-projects" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row mb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-primary">
                Corporate Social Responsibility
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Making a positive impact in our community through technology and innovation
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <div className="w-full overflow-hidden rounded-xl border border-border bg-background shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Image section */}
                <div className="md:w-2/5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <img
                      src="/images/csr/arthritis-connect.png"
                      alt="ArthritisConnect"
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute bottom-2 right-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                        Launching Soon
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="flex flex-col justify-between p-4 md:w-3/5 md:p-6">
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">ArthritisConnect</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In partnership with Rheumatology Department of Kurunegala General Hospital
                    </p>

                    <p className="mt-4">
                      An information hub for arthritis patients in Sri Lanka to gather information about their
                      conditions and contact doctors directly.
                    </p>
                    <div className="mt-4 space-y-4">
                      <p>
                        ArthritisConnect is a multilingual digital platform providing expert-verified information to
                        empower rheumatic patients in Sri Lanka. The platform offers free medical advice for rheumatic
                        conditions, making healthcare information more accessible to those who need it most.
                      </p>

                      <div>
                        <h4 className="font-medium">Impact:</h4>
                        <ul className="mt-2 space-y-1 pl-5 text-sm list-disc">
                          <li>
                            Providing accessible medical information to over 1.5 million Sri Lankans suffering from
                            arthritis
                          </li>
                          <li>Reducing hospital wait times by enabling online consultations</li>
                          <li>Empowering patients with knowledge about their conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a href="https://arthritis.lk" target="_blank" rel="noopener noreferrer">
                      <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                        Visit Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 h-3 w-3"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
