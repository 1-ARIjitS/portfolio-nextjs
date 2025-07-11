"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin, Award } from "lucide-react";
import { ReactTyped as Typed } from "react-typed";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/1-ARIjitS",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arijit-samal1",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Devpost",
    href: "https://devpost.com/arijits19",
    icon: Award,
    color: "hover:text-yellow-600",
  },
  {
    name: "Email",
    href: "mailto:arijit.samal@student-cs.fr",
    icon: Mail,
    color: "hover:text-red-600",
  },
];

const techStack = [
  "ML", "AI", "NLP", "DL", "Gen-AI", "LLM", "Big Data"
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume/ARIJIT_RESUME.pdf";
    link.download = "Arijit_Samal_Resume.pdf";
    link.click();
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Container and item variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                🚀 ARIJIT SAMAL
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mt-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                I&apos;m a{" "}
                <span className="text-gradient">
                  {isMounted ? (
                    <Typed
                      strings={["Data Scientist", "AI Engineer", "ML Engineer", "Software Engineer"]}
                      typeSpeed={100}
                      backSpeed={80}
                      backDelay={2000}
                      loop
                    />
                  ) : (
                    "Data Scientist"
                  )}
                </span>
              </h1>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="mt-6">
              <div className="border-t-2 border-b-2 border-primary/30 py-4 inline-block">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="text-primary font-medium text-lg tracking-wide"
                    >
                      {tech}
                      {index < techStack.length - 1 && <span className="text-muted-foreground mx-2">|</span>}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>



            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="mailto:arijit.samal@student-cs.fr"
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                Hire Me
              </motion.a>
              
              <motion.button
                onClick={handleDownloadCV}
                className="btn-outline flex items-center justify-center gap-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Simple Animated Circle */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-96 h-96 sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]">
                  {/* Simple Glow Effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110" />
                  
                  {/* Simple Circle Container */}
                  <motion.div 
                    className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary/30"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/new_1.jpeg"
                      alt="Arijit Samal - Data Scientist & AI Engineer"
                      fill
                      className="object-cover rounded-full"
                      priority
                      sizes="(max-width: 640px) 384px, (max-width: 768px) 450px, 500px"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 