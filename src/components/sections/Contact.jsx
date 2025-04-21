import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-lg mb-10">
            Feel free to reach out via email or LinkedIn. I'm always open to discussing new projects, ideas, or opportunities.
          </p>

          <div className="space-y-6 text-left text-gray-500">
            <div className="flex items-center gap-4 justify-center hover:text-blue-500 transition">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:your.email@example.com"
                className="hover:underline transition"
              >
                mandal.arnab.abc.224@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center hover:text-blue-500 transition">
              <Phone className="w-5 h-5" />
              <span>+91 9877574156</span>
            </div>

            <div className="flex items-center gap-4 justify-center hover:text-blue-500 transition">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/arnab224"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};