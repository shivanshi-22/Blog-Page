"use client";

import Link from "next/link";
import { useState, CSSProperties } from "react";

interface FooterProps {}

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
  hoverColor: string;
}

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

const Footer: React.FC<FooterProps> = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleNewsletterSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      href: "#",
      hoverColor: "#1da1f2",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      hoverColor: "#333",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      hoverColor: "#0077b5",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      hoverColor: "#ff0000",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Web Development", href: "/category/web-dev" },
        { name: "React & Next.js", href: "/category/react" },
        { name: "TypeScript", href: "/category/typescript" },
        { name: "CSS & Design", href: "/category/css" },
        { name: "JavaScript", href: "/category/javascript" },
      ],
    },

  ];

  const footerStyle: CSSProperties = {
    background:
      "linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95))",
    backdropFilter: "blur(20px)",
    marginTop: "4rem",
    padding: "3rem 0",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle: CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  };

  const gradientTextStyle: CSSProperties = {
    background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const newsletterStyle: CSSProperties = {
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    padding: "1.5rem",
    marginBottom: "2rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const inputStyle: CSSProperties = {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    width: "100%",
    marginBottom: "0.75rem",
  };

  const buttonStyle: CSSProperties = {
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "0.75rem 1.5rem",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    transform: "translateY(0)",
  };

  const successStyle: CSSProperties = {
    background: "rgba(34, 197, 94, 0.1)",
    border: "1px solid rgba(34, 197, 94, 0.3)",
    borderRadius: "8px",
    padding: "0.75rem",
    color: "#22c55e",
    fontSize: "14px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Brand Section */}
          <div style={{ gridColumn: "span 1" }}>
            <h3 style={gradientTextStyle}>MyBlog</h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
                fontSize: "14px",
              }}
            >
              Your go-to source for the latest web development insights,
              tutorials, and industry trends. Join thousands of developers who
              trust our content to stay ahead in their careers.
            </p>

            {/* Newsletter Signup */}
            <div style={newsletterStyle}>
              <h4
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  fontSize: "16px",
                }}
              >
                Stay Updated
              </h4>
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor =
                        "rgba(59, 130, 246, 0.5)";
                      (e.target as HTMLInputElement).style.background =
                        "rgba(255, 255, 255, 0.15)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor =
                        "rgba(255, 255, 255, 0.2)";
                      (e.target as HTMLInputElement).style.background =
                        "rgba(255, 255, 255, 0.1)";
                    }}
                    required
                  />
                  <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.transform =
                        "translateY(-2px)";
                      (e.target as HTMLButtonElement).style.boxShadow =
                        "0 8px 25px rgba(59, 130, 246, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.transform =
                        "translateY(0)";
                      (e.target as HTMLButtonElement).style.boxShadow = "none";
                    }}
                  >
                    Subscribe Now
                  </button>
                </form>
              ) : (
                <div style={successStyle}></div>
              )}
            </div>

            
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  fontSize: "16px",
                }}
              >
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {section.links.map((link) => (
                  <li key={link.name} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      href={link.href}
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s ease",
                        display: "block",
                        padding: "0.25rem 0",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "white";
                        (e.target as HTMLAnchorElement).style.paddingLeft =
                          "0.5rem";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.color =
                          "rgba(255, 255, 255, 0.7)";
                        (e.target as HTMLAnchorElement).style.paddingLeft = "0";
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "14px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color =
                      "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to top button */}
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255, 255, 255, 0.7)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background =
                  "rgba(255, 255, 255, 0.2)";
                (e.target as HTMLButtonElement).style.color = "white";
                (e.target as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background =
                  "rgba(255, 255, 255, 0.1)";
                (e.target as HTMLButtonElement).style.color =
                  "rgba(255, 255, 255, 0.7)";
                (e.target as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
              aria-label="Back to top"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
