"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin, Award, GraduationCap } from "lucide-react";
import { ReactTyped as Typed } from "react-typed";
import { Button } from "@/components/ui/button";

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
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=ePzEMRMAAAAJ&hl=en&authuser=1",
    icon: GraduationCap,
    color: "hover:text-blue-700",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center min-h-screen py-24 sm:py-28 lg:py-0">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-primary/20">
                🚀 ARIJIT SAMAL
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mt-4 sm:mt-5 lg:mt-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-heading text-foreground leading-[1.1] sm:leading-tight">
                I&apos;m a{" "}
                <span className="text-gradient inline-block min-h-[1.2em]">
                  {isMounted ? (
                    <Typed
                      strings={["Data Scientist", "AI Engineer", "ML Engineer", "Software Engineer"]}
                      typeSpeed={80}
                      backSpeed={60}
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
            <motion.div variants={itemVariants} className="mt-4 sm:mt-5 lg:mt-6">
              <div className="border-t-2 border-b-2 border-primary/30 py-2.5 sm:py-3 lg:py-4 inline-block w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <div className="flex flex-wrap gap-x-1 gap-y-0.5 sm:gap-x-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.08 }}
                      className="text-primary font-medium text-xs sm:text-sm lg:text-base tracking-wide whitespace-nowrap"
                    >
                      {tech}
                      {index < techStack.length - 1 && <span className="text-muted-foreground mx-0.5 sm:mx-1">|</span>}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-5 sm:mt-6 lg:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              <Button asChild size="lg" className="h-11 sm:h-12 px-5 sm:px-6 lg:px-8 rounded-xl text-sm sm:text-base">
                <a href="mailto:arijit.samal@student-cs.fr">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  Hire Me
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="h-11 sm:h-12 px-5 sm:px-6 lg:px-8 rounded-xl text-sm sm:text-base"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 flex gap-2.5 sm:gap-3 lg:gap-4 justify-center lg:justify-start flex-wrap"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 sm:p-3 rounded-xl bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-200 shadow-sm ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated Container */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
                  {/* Image Container */}
                  <motion.div
                    className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/new_1.jpeg"
                      alt="Arijit Samal - Data Scientist & AI Engineer"
                      fill
                      className="object-cover rounded-2xl sm:rounded-3xl"
                      priority
                      sizes="(max-width: 475px) 192px, (max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 420px"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-1 sm:gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs sm:text-sm font-medium">Scroll Down</span>
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
