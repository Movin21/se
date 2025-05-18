export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
              {[
                {
                  id: "agm-2025",
                  title: "Annual General Meeting 2025/26",
                  image: "/images/events/agm-2025.png",
                  link: "https://www.instagram.com/sliit.sesc/p/DJwIZRsIOmM/",
                },
                {
                  id: "women-in-tech",
                  title: "Women in Tech Workshop by Perituza",
                  image: "/images/events/women-in-tech.png",
                  link: "https://www.instagram.com/sliit.sesc/p/DJfzSa7SbIL/",
                },
              ].map((event) => (
                <a
                  key={event.id}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[calc(100vw-4rem)] max-w-[320px] flex-none snap-center"
                >
                  <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {[
                {
                  id: "agm-2025",
                  title: "Annual General Meeting 2025/26",
                  image: "/images/events/agm-2025.png",
                  link: "https://www.instagram.com/sliit.sesc/p/DJwIZRsIOmM/",
                },
                {
                  id: "women-in-tech",
                  title: "Women in Tech Workshop by Perituza",
                  image: "/images/events/women-in-tech.png",
                  link: "https://www.instagram.com/sliit.sesc/p/DJfzSa7SbIL/",
                },
              ].map((event) => (
                <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </a>
              ))}
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
            {[
              {
                id: "arthritis-connect",
                title: "ArthritisConnect",
                partner: "Rheumatology Department of Kurunegala General Hospital",
                status: "Launching Soon",
                description:
                  "An information hub for arthritis patients in Sri Lanka to gather information about their conditions and contact doctors directly.",
                longDescription:
                  "ArthritisConnect is a multilingual digital platform providing expert-verified information to empower rheumatic patients in Sri Lanka. The platform offers free medical advice for rheumatic conditions, making healthcare information more accessible to those who need it most.",
                image: "/images/csr/arthritis-connect.png",
                link: "https://arthritis.lk",
                impact: [
                  "Providing accessible medical information to over 1.5 million Sri Lankans suffering from arthritis",
                  "Reducing hospital wait times by enabling online consultations",
                  "Empowering patients with knowledge about their conditions",
                ],
              },
            ].map((project, index) => (
              <div
                key={project.id}
                className="w-full overflow-hidden rounded-xl border border-border bg-background shadow-sm mb-8"
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-6`}
                >
                  {/* Image section */}
                  <div className="md:w-2/5">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-contain"
                      />
                      <div className="absolute bottom-2 right-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex flex-col justify-between p-4 md:w-3/5 md:p-6">
                    <div>
                      <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">In partnership with {project.partner}</p>

                      <p className="mt-4">{project.description}</p>
                      <div className="mt-4 space-y-4">
                        <p>{project.longDescription}</p>

                        <div>
                          <h4 className="font-medium">Impact:</h4>
                          <ul className="mt-2 space-y-1 pl-5 text-sm list-disc">
                            {project.impact.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
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
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-20 bg-primary/5 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/logo.png"
                  alt="SLIIT SEC Logo"
                  width="120"
                  height="60"
                  className="hover:opacity-90 transition-opacity"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Welcome to SLIIT Software Engineering Student Community. We're a group of passionate students dedicated
                to the growth of software engineering knowledge and skills.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/sliit.sesc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/sesc-sliit/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sliitsesc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:sliitsecommunity@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-medium">Useful Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/#hero" className="text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#vision-mission" className="text-muted-foreground hover:text-primary">
                    Vision & Mission
                  </a>
                </li>
                <li>
                  <a href="/#board" className="text-muted-foreground hover:text-primary">
                    Board Members
                  </a>
                </li>
                <li>
                  <a href="/#partners" className="text-muted-foreground hover:text-primary">
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.sliitsesc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="mailto:sliitsecommunity@gmail.com" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-medium">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/sliitsesc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sliit.sesc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/sesc-sliit/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.sliitsesc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#vision-mission" className="text-muted-foreground hover:text-primary">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-medium">Subscribe</h4>
              <p className="text-sm text-muted-foreground">Don't miss out on our latest news, events, and updates.</p>
              <form className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} SLIIT Software Engineering Student Community. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
