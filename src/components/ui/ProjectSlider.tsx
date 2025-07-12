"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ExternalLink, Github, Code, Award, Zap } from "lucide-react";

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
  icon: any;
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      }
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const currentProject = projects[currentIndex];
  const Icon = currentProject.icon;

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Navigation Arrows - Outside the card */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => paginate(-1)}
          className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg z-10"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
        </button>

        {/* Main Slider Container */}
        <div className="flex-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-secondary/10 to-secondary/20 min-h-[600px] md:min-h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
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
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 p-6 md:p-8 lg:p-12"
            >
              <div className="h-full flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Side - Project Info */}
                <div className="lg:w-1/2 flex flex-col space-y-6">
                  {/* Project Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${currentProject.color} p-3 md:p-4 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          <Code className="h-4 w-4" />
                          {currentProject.type}
                        </div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          currentProject.status === "Completed" 
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                        }`}>
                          {currentProject.status}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                        {currentProject.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mt-1">
                        {currentProject.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    <span>{currentProject.period}</span>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex flex-nowrap gap-2">
                    {currentProject.links.github && (
                      <motion.a
                        href={currentProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    {currentProject.links.demo && (
                      <motion.a
                        href={currentProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap ${
                          currentProject.links.github ? "btn-outline" : "btn-primary"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                    {currentProject.links.consumerApp && (
                      <motion.a
                        href={currentProject.links.consumerApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Consumer</span>
                      </motion.a>
                    )}
                    {currentProject.links.vendorApp && (
                      <motion.a
                        href={currentProject.links.vendorApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Vendor</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right Side - Technologies & Achievements */}
                <div className="lg:w-1/2 space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg md:text-xl">
                      <Zap className="h-5 w-5 text-primary" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg md:text-xl">
                      <Award className="h-5 w-5 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                      {currentProject.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start gap-3 group/achievement"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * achievementIndex }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 group-hover/achievement:scale-150 transition-transform duration-300" />
                          <span className="text-muted-foreground text-sm md:text-base leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg z-10"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>
    </div>
  );
} 