import React, { useState } from 'react';
import './Header.scss';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img 
            src="https://framerusercontent.com/modules/ep5NRmNv6qcNQn7IC5lJ/f5fbtiYACgLORPZENIga/assets/0mBgJmpKBfrVMW7TzdewceK3reg.png" 
            alt="WORKZE"
          />
        </div>

        <nav className="header__nav header__nav--desktop">
          <div className="header__nav-links">
            <a href="/find-jobs" className="header__nav-link">Find Jobs</a>
            <a href="/our-team" className="header__nav-link">Our Team</a>
            <a href="/about" className="header__nav-link">About</a>
            <a href="/contact-us" className="header__nav-link">Contact Us</a>
            <div 
              className="header__nav-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="header__nav-link header__nav-dropdown-trigger">
                All Pages
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="header__nav-dropdown-content">
                  <a href="/about" className="header__nav-dropdown-item">About us</a>
                  <a href="/career" className="header__nav-dropdown-item">Career</a>
                  <a href="/blog" className="header__nav-dropdown-item">Blog</a>
                  <a href="/faq" className="header__nav-dropdown-item">FAQ</a>
                  <a href="/review" className="header__nav-dropdown-item">Review</a>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="header__actions">
          <button className="header__search-btn">
            <Search size={20} />
          </button>
          <a href="/purchase" className="header__purchase-btn">Purchase</a>
        </div>

        <button 
          className="header__mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`header__nav-mobile ${isMobileMenuOpen ? 'header__nav-mobile--open' : ''}`}>
          <nav className="header__nav-mobile-content">
            <a href="/find-jobs" className="header__nav-mobile-link">Find Jobs</a>
            <a href="/our-team" className="header__nav-mobile-link">Our Team</a>
            <a href="/about" className="header__nav-mobile-link">About</a>
            <a href="/contact-us" className="header__nav-mobile-link">Contact Us</a>
            <div className="header__nav-mobile-dropdown">
              <div className="header__nav-mobile-dropdown-trigger">
                All Pages
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;