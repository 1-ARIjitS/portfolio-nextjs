"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ExternalLink, Github, Code, Award, Zap } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  period: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  achievements: string[];
  links: {
    github?: string;
    demo?: string;
    consumerApp?: string;
    vendorApp?: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  type: string;
  image?: string;
}

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      }
    });
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        paginate(1); // Swipe left -> next
      } else {
        paginate(-1); // Swipe right -> prev
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-advance slides every 10 seconds (only on desktop)
  useEffect(() => {
    if (isMobile) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 10000);

    return () => clearInterval(timer);
  }, [paginate, isMobile]);

  const currentProject = projects[currentIndex];
  const Icon = currentProject.icon;

  return (
    <div className="relative w-full max-w-7xl mx-auto" ref={containerRef}>
      {/* Navigation Arrows - Hidden on mobile, shown as overlay buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Left Arrow - Hidden on small mobile, visible on larger screens */}
        <button
          onClick={() => paginate(-1)}
          className="hidden sm:flex flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-background/80 backdrop-blur-sm border border-border rounded-full items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </button>

        {/* Main Slider Container */}
        <div 
          className="flex-1 relative overflow-hidden rounded-2xl md:rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
            >
              <Card className="border-border/50 shadow-2xl bg-gradient-to-br from-background via-card to-secondary/20 overflow-hidden">
                <CardContent className="p-0">
                  {/* Mobile Layout */}
                  <div className="block lg:hidden">
                    <ScrollArea className="h-[520px] sm:h-[560px]">
                      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                        {/* Project Header */}
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={cn(
                            "w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br p-2.5 sm:p-3 shadow-lg flex-shrink-0",
                            currentProject.color
                          )}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                <Code className="h-3 w-3 mr-1" />
                                {currentProject.type}
                              </Badge>
                              <Badge 
                                variant="secondary"
                                className={cn(
                                  "text-xs",
                                  currentProject.status === "Completed"
                                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                                    : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                                )}
                              >
                                {currentProject.status}
                              </Badge>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                              {currentProject.title}
                            </h3>
                          </div>
                        </div>

                        {/* Period & Category */}
                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            <span>{currentProject.period}</span>
                          </div>
                          <span className="text-muted-foreground/50">•</span>
                          <span>{currentProject.category}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* Project Links */}
                        <div className="flex flex-wrap gap-2">
                          {currentProject.links.github && (
                            <a
                              href={currentProject.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                            >
                              <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              GitHub
                            </a>
                          )}
                          {currentProject.links.demo && (
                            <a
                              href={currentProject.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors",
                                currentProject.links.github
                                  ? "border border-border text-foreground hover:bg-accent"
                                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                              )}
                            >
                              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              Demo
                            </a>
                          )}
                          {currentProject.links.consumerApp && (
                            <a
                              href={currentProject.links.consumerApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 border border-border text-foreground text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                            >
                              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              Consumer
                            </a>
                          )}
                          {currentProject.links.vendorApp && (
                            <a
                              href={currentProject.links.vendorApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 border border-border text-foreground text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                            >
                              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              Vendor
                            </a>
                          )}
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {currentProject.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                            Key Achievements
                          </h4>
                          <div className="space-y-2 sm:space-y-2.5">
                            {currentProject.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2 sm:gap-2.5 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform duration-300" />
                                <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:block p-6 lg:p-8 xl:p-10">
                    <div className="flex gap-8 lg:gap-10 xl:gap-12">
                      {/* Left Side - Project Info */}
                      <div className="w-1/2 space-y-5 lg:space-y-6">
                        {/* Project Header */}
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br p-3 lg:p-4 shadow-lg flex-shrink-0",
                            currentProject.color
                          )}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                <Code className="h-3.5 w-3.5 mr-1.5" />
                                {currentProject.type}
                              </Badge>
                              <Badge 
                                variant="secondary"
                                className={cn(
                                  currentProject.status === "Completed"
                                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                                    : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                                )}
                              >
                                {currentProject.status}
                              </Badge>
                            </div>
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                              {currentProject.title}
                            </h3>
                            <p className="text-sm lg:text-base text-muted-foreground mt-1.5">
                              {currentProject.category}
                            </p>
                          </div>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                          <Calendar className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                          <span>{currentProject.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* Project Links */}
                        <div className="flex flex-wrap gap-2 lg:gap-3">
                          {currentProject.links.github && (
                            <motion.a
                              href={currentProject.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </motion.a>
                          )}
                          {currentProject.links.demo && (
                            <motion.a
                              href={currentProject.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium transition-colors",
                                currentProject.links.github
                                  ? "border border-border text-foreground hover:bg-accent"
                                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                              )}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </motion.a>
                          )}
                          {currentProject.links.consumerApp && (
                            <motion.a
                              href={currentProject.links.consumerApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border border-border text-foreground text-sm px-4 py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Consumer
                            </motion.a>
                          )}
                          {currentProject.links.vendorApp && (
                            <motion.a
                              href={currentProject.links.vendorApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border border-border text-foreground text-sm px-4 py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Vendor
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Right Side - Technologies & Achievements with ScrollArea */}
                      <div className="w-1/2">
                        <ScrollArea className="h-[380px] lg:h-[420px] pr-4">
                          <div className="space-y-6">
                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg lg:text-xl">
                                <Zap className="h-5 w-5 text-primary" />
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {currentProject.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="px-3 py-1.5 bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default text-sm"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Achievements */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg lg:text-xl">
                                <Award className="h-5 w-5 text-primary" />
                                Key Achievements
                              </h4>
                              <div className="space-y-3">
                                {currentProject.achievements.map((achievement, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-start gap-3 group"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300" />
                                    <span className="text-muted-foreground text-sm lg:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                      {achievement}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow - Hidden on small mobile, visible on larger screens */}
        <button
          onClick={() => paginate(1)}
          className="hidden sm:flex flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-background/80 backdrop-blur-sm border border-border rounded-full items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </button>
      </div>

      {/* Mobile Navigation Arrows - Positioned at bottom */}
      <div className="flex sm:hidden justify-center gap-4 mt-4">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-6 sm:w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-2 sm:mt-3">
        <span className="text-xs sm:text-sm text-muted-foreground">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>

      {/* Swipe Hint for Mobile */}
      <motion.p 
        className="text-center text-xs text-muted-foreground mt-2 sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Swipe or scroll to explore
      </motion.p>
    </div>
  );
}
