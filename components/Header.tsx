"use client";

import Link from "next/link";
import { useState, CSSProperties } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const headerStyle: CSSProperties = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 1.5rem',
  };

  const headerContentStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  };

  const logoIconStyle: CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
  };

  const logoTextStyle: CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937',
    transition: 'color 0.2s ease',
  };

  const navDesktopStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  };

  const navLinkStyle: CSSProperties = {
    color: '#6b7280',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'color 0.2s ease',
    padding: '0.5rem',
  };

  const subscribeBtnStyle: CSSProperties = {
    background: '#3b82f6',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  };

  const mobileMenuBtnStyle: CSSProperties = {
    display: isMenuOpen ? 'none' : 'block',
    background: 'none',
    border: 'none',
    color: '#6b7280',
    padding: '0.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const mobileNavStyle: CSSProperties = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '0.75rem',
    paddingTop: '1rem',
    marginTop: '1rem',
    borderTop: '1px solid rgba(229, 231, 235, 0.5)',
  };

  const mobileNavLinkStyle: CSSProperties = {
    color: '#6b7280',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  };

  const responsiveStyle = `
    @media (min-width: 768px) {
      .mobile-menu-btn { display: none !important; }
      .mobile-nav { display: none !important; }
      .desktop-nav { display: flex !important; }
    }
    @media (max-width: 767px) {
      .desktop-nav { display: none !important; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={headerContentStyle}>
            {/* Logo */}
            <Link href="/" style={logoStyle}>
              <div style={logoIconStyle}>
                <span>B</span>
              </div>
              <span style={logoTextStyle}>BlogPage</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" style={navDesktopStyle}>
              <Link href="/" style={navLinkStyle}>
                Home
              </Link>
              <Link href="/about" style={navLinkStyle}>
                About
              </Link>
              <Link href="/contact" style={navLinkStyle}>
                Contact
              </Link>
              <button 
                type="button"
                style={subscribeBtnStyle}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#2563eb';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = '#3b82f6';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }}
              >
                Subscribe
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              style={mobileMenuBtnStyle}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = '#f3f4f6';
                (e.target as HTMLButtonElement).style.color = '#1f2937';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = 'none';
                (e.target as HTMLButtonElement).style.color = '#6b7280';
              }}
            >
              <svg 
                width="20" 
                height="20" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>

            {/* Close button for mobile menu */}
            {isMenuOpen && (
              <button
                type="button"
                onClick={closeMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="mobile-nav" style={mobileNavStyle}>
            <Link 
              href="/" 
              style={mobileNavLinkStyle}
              onClick={closeMenu}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = '#f9fafb';
                (e.target as HTMLAnchorElement).style.color = '#1f2937';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = 'transparent';
                (e.target as HTMLAnchorElement).style.color = '#6b7280';
              }}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              style={mobileNavLinkStyle}
              onClick={closeMenu}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = '#f9fafb';
                (e.target as HTMLAnchorElement).style.color = '#1f2937';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = 'transparent';
                (e.target as HTMLAnchorElement).style.color = '#6b7280';
              }}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              style={mobileNavLinkStyle}
              onClick={closeMenu}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = '#f9fafb';
                (e.target as HTMLAnchorElement).style.color = '#1f2937';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = 'transparent';
                (e.target as HTMLAnchorElement).style.color = '#6b7280';
              }}
            >
              Contact
            </Link>
            <button 
              type="button"
              style={{...subscribeBtnStyle, alignSelf: 'flex-start'}}
              onClick={closeMenu}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = '#2563eb';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = '#3b82f6';
              }}
            >
              Subscribe
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;