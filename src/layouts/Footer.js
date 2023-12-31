// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="text-zinc-200 bg-slate-800 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-wide">
          <p>&copy; {new Date().getFullYear()} My React App</p>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
