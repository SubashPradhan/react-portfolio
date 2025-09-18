import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="container-width text-center">
        <p className="text-[var(--color-text-secondary)]">
          © {currentYear} Subash Pradhan. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;