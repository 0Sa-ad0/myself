"use client";

import { Linkedin, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SAAD. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/saadsaadsaad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://t.me/pytash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Send size={24} />
            </a>
            <a
              href="https://github.com/0Sa-ad0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
