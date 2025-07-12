"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Award } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Publications", href: "#publications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/1-ARIjitS",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arijit-samal1",
    icon: Linkedin,
  },
  {
    name: "Devpost",
    href: "https://devpost.com/arijits19",
    icon: Award,
  },
  {
    name: "Email",
    href: "mailto:arijit.samal@student-cs.fr",
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                ARIJIT<span className="text-primary">.</span>
              </h3>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Building the future with AI, Data Science, and Machine Learning.
                Passionate about creating innovative solutions that make a difference.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Navigation</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Connect</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-background hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-lg transition-all duration-200 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Contact Info */}
              <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>📧 arijit.samal@student-cs.fr</p>
                <p>📱 +33 0755028593</p>
                <p>📍 Paris, Ile de France, France</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Arijit Samal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 