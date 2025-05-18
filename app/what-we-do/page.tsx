"use client"

import { useEffect } from "react"
import Footer from "@/components/footer"

export default function WhatWeDoPage() {
  // Force styles to be applied after page load and refresh
  useEffect(() => {
    // Add a class to the body to indicate the page is loaded
    document.body.classList.add("what-we-do-page-loaded")

    // Force a repaint to ensure styles are applied
    document.body.style.display = "none"
    document.body.offsetHeight // Force a reflow
    document.body.style.display = ""

    return () => {
      document.body.classList.remove("what-we-do-page-loaded")
    }
  }, [])

  const styles = {
    heroSection: {
      width: "100%",
      padding: "2.5rem 0 4rem",
      backgroundColor: "rgba(30, 58, 138, 0.05)",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0 1rem",
    },
    heroTitle: {
      fontSize: "2.25rem",
      fontWeight: "700",
      lineHeight: "1.2",
      color: "hsl(231, 48%, 28%)",
      marginBottom: "0.5rem",
    },
    heroSubtitle: {
      fontSize: "1.125rem",
      color: "hsl(215.4, 16.3%, 46.9%)",
      maxWidth: "700px",
      margin: "0.5rem auto 0",
    },
    sectionTitle: {
      fontSize: "1.875rem",
      fontWeight: "700",
      lineHeight: "1.2",
      color: "hsl(231, 48%, 28%)",
      marginBottom: "0.5rem",
    },
    sectionSubtitle: {
      fontSize: "0.875rem",
      color: "hsl(215.4, 16.3%, 46.9%)",
      marginTop: "0.25rem",
    },
    eventsSection: {
      width: "100%",
      padding: "1.5rem 0 2.5rem",
      backgroundColor: "white",
    },
    csrSection: {
      width: "100%",
      padding: "3rem 0 6rem",
      backgroundColor: "hsl(210, 40%, 96.1%)",
    },
    card: {
      borderRadius: "0.75rem",
      border: "1px solid hsl(214.3, 31.8%, 91.4%)",
      overflow: "hidden",
      backgroundColor: "white",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "9999px",
      padding: "0.25rem 0.625rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      backgroundColor: "hsl(231, 48%, 28%)",
      color: "white",
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.375rem",
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      backgroundColor: "hsl(231, 48%, 28%)",
      color: "white",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      cursor: "pointer",
    },
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div>
              <h1 style={styles.heroTitle}>What We Do</h1>
              <p style={styles.heroSubtitle}>
                Fostering innovation, building skills, and creating tomorrow's tech leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" style={styles.eventsSection}>
        <div style={styles.container}>
          <div style={{ marginBottom: "1rem" }}>
            <h2 style={styles.sectionTitle}>Upcoming Events</h2>
            <p style={styles.sectionSubtitle}>Join us at our upcoming events and activities</p>
          </div>

          {/* Instagram-style posts layout */}
          <div style={{ marginTop: "1rem" }}>
            {/* Mobile: Horizontal scroll */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                overflowX: "auto",
                paddingBottom: "1rem",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="md:hidden"
            >
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJwIZRsIOmM/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flexShrink: 0,
                  width: "calc(100vw - 4rem)",
                  maxWidth: "320px",
                  scrollSnapAlign: "center",
                }}
              >
                <div style={styles.card}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      width: "100%",
                      overflow: "hidden",
                      backgroundColor: "hsl(210, 40%, 96.1%)",
                    }}
                  >
                    <img
                      src="/images/events/agm-2025.png"
                      alt="Annual General Meeting 2025/26"
                      style={styles.cardImage}
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJfzSa7SbIL/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flexShrink: 0,
                  width: "calc(100vw - 4rem)",
                  maxWidth: "320px",
                  scrollSnapAlign: "center",
                }}
              >
                <div style={styles.card}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      width: "100%",
                      overflow: "hidden",
                      backgroundColor: "hsl(210, 40%, 96.1%)",
                    }}
                  >
                    <img
                      src="/images/events/women-in-tech.png"
                      alt="Women in Tech Workshop by Perituza"
                      style={styles.cardImage}
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop: Grid layout */}
            <div
              style={{
                display: "none",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
              className="md:grid"
            >
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJwIZRsIOmM/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block" }}
              >
                <div style={{ ...styles.card, transition: "box-shadow 0.2s" }}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      width: "100%",
                      overflow: "hidden",
                      backgroundColor: "hsl(210, 40%, 96.1%)",
                    }}
                  >
                    <img
                      src="/images/events/agm-2025.png"
                      alt="Annual General Meeting 2025/26"
                      style={styles.cardImage}
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/sliit.sesc/p/DJfzSa7SbIL/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block" }}
              >
                <div style={{ ...styles.card, transition: "box-shadow 0.2s" }}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      width: "100%",
                      overflow: "hidden",
                      backgroundColor: "hsl(210, 40%, 96.1%)",
                    }}
                  >
                    <img
                      src="/images/events/women-in-tech.png"
                      alt="Women in Tech Workshop by Perituza"
                      style={styles.cardImage}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Projects Section */}
      <section id="csr-projects" style={styles.csrSection}>
        <div style={styles.container}>
          <div style={{ marginBottom: "1rem" }}>
            <h2 style={styles.sectionTitle}>Corporate Social Responsibility</h2>
            <p style={styles.sectionSubtitle}>
              Making a positive impact in our community through technology and innovation
            </p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <div style={{ ...styles.card, marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  "@media (min-width: 768px)": {
                    flexDirection: "row",
                  },
                }}
                className="md:flex-row"
              >
                {/* Image section */}
                <div style={{ width: "100%", "@media (min-width: 768px)": { width: "40%" } }} className="md:w-2/5">
                  <div style={{ position: "relative", aspectRatio: "3/4", width: "100%", overflow: "hidden" }}>
                    <img src="/images/csr/arthritis-connect.png" alt="ArthritisConnect" style={styles.cardImage} />
                    <div style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}>
                      <span style={styles.badge}>Launching Soon</span>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    width: "100%",
                    "@media (min-width: 768px)": {
                      width: "60%",
                      padding: "1.5rem",
                    },
                  }}
                  className="md:w-3/5 md:p-6"
                >
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "black", marginBottom: "0.25rem" }}>
                      ArthritisConnect
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "hsl(215.4, 16.3%, 46.9%)", marginTop: "0.25rem" }}>
                      In partnership with Rheumatology Department of Kurunegala General Hospital
                    </p>

                    <p style={{ marginTop: "1rem" }}>
                      An information hub for arthritis patients in Sri Lanka to gather information about their
                      conditions and contact doctors directly.
                    </p>
                    <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <p>
                        ArthritisConnect is a multilingual digital platform providing expert-verified information to
                        empower rheumatic patients in Sri Lanka. The platform offers free medical advice for rheumatic
                        conditions, making healthcare information more accessible to those who need it most.
                      </p>

                      <div>
                        <h4 style={{ fontWeight: "500" }}>Impact:</h4>
                        <ul
                          style={{
                            marginTop: "0.5rem",
                            paddingLeft: "1.25rem",
                            fontSize: "0.875rem",
                            listStyleType: "disc",
                          }}
                        >
                          <li style={{ marginBottom: "0.25rem" }}>
                            Providing accessible medical information to over 1.5 million Sri Lankans suffering from
                            arthritis
                          </li>
                          <li style={{ marginBottom: "0.25rem" }}>
                            Reducing hospital wait times by enabling online consultations
                          </li>
                          <li>Empowering patients with knowledge about their conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <a href="https://arthritis.lk" target="_blank" rel="noopener noreferrer">
                      <button style={styles.button}>
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
                          style={{ marginLeft: "0.25rem", width: "0.75rem", height: "0.75rem" }}
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
    </div>
  )
}
