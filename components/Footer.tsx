// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark_green text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2024 Fernando Durban. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/fdurban"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fernando-durban-brizio-3861741b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:ferbrizie@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
