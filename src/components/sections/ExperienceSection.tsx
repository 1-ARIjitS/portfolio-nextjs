"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Building, Code, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const experienceData = [
  {
    id: "cfm",
    company: "Capital Fund Management (CFM)",
    position: "Data Scientist",
    period: "March 2025 – November 2025",
    location: "Paris, Ile de France, France",
    type: "Hedge Fund",
    link: "https://drive.google.com/drive/folders/1mUPAEHbxKvdkxgp87eiV67TQ2tfahEme?usp=drive_link",
    description: "Building a multi-agent system to fix alerts in the data equity referential pipeline of CFM which is an essential part of the intraday trading workflows.",
    technologies: ["Python", "OracleDB", "LangChain", "LangGraph", "Google ADK", "FastAPI", "Streamlit"],
    achievements: [
      "Built a multi-agent system to auto resolve data pipeline alerts for the Data Referential Equity team (Paper Published at AAMAS 2026)",
      "Engineered an ensemble RAG pipeline (Graph RAG, RAPTOR, hybrid search, reranking, Agentic RAG)",
      "Created autonomous coding agents using ReWOO, LLMCompiler, and LATS planners",
      "Implemented an agentic swarm orchestration with dynamic handoffs between agents",
      "Achieved 97% RAG accuracy and 94% agent performance on production CFM alerts",
      "Reduced mean time to resolution from 60 min to 2 min (fast) / 5 min (normal), cutting handling time by 92%"
    ],
    icon: Building,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "mobilitydb",
    company: "MobilityDB",
    position: "Open Source Developer",
    period: "July – September 2024",
    location: "Brussels, Belgium",
    type: "Open Source",
    link: "https://github.com/MobilityDB/JMEOS",
    description: "Improved JMEOS, Java binding for the MEOS spatiotemporal library, contributing significantly to the open-source geospatial database ecosystem.",
    technologies: ["C", "Java", "FFI", "CI/CD", "GitHub Actions", "Python"],
    achievements: [
      "Contributed 30K+ lines of code to JMEOS and MobilityDB repositories",
      "Boosted testing coverage by 70% using JUnit for MEOS data types",
      "Automated documentation deployment using GitHub Pages, streamlining API visibility for 500+ users",
      "Built CI/CD pipelines with GitHub Actions, cutting build and integration times by 30%",
    ],
    icon: Code,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "htl",
    company: "Health Technologies Lab (HTL), IBME, University of New Brunswick (UNB)",
    position: "Deep Learning Researcher",
    period: "May – October 2023",
    location: "Fredericton, Canada",
    type: "Research",
    link: "https://www.swaggermagazine.com/technology/university-of-new-brunswick-team-is-developing-a-first-of-its-kind-security-system-that-uses-footsteps-to-verify-people-are-who-they-say-they-are/",
    description: "Worked on Translating Foot Pressure Maps to 3D Human Poses, developing innovative biometric identification systems using advanced machine learning techniques.",
    technologies: ["PyTorch", "Python", "Mediapipe", "TensorFlow", "Keras", "OpenCV", "MATLAB"],
    achievements: [
      "Captured foot pressure maps using 100Hz tiles; mapped to 3D poses with 33 keypoints",
      "Used video from 8 cameras as supervision; developed Encoder-Decoder, CRNN, and CNN+LSTM models",
      "Evaluated models using MPJPE and MSE, enabling non-invasive person identification with 95% accuracy",
      "Pioneered novel approach to biometric authentication using gait analysis",
    ],
    icon: Award,
    color: "from-purple-500 to-pink-600",
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Building impactful solutions across data science, AI, and open-source development
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl group">
                  <CardContent className="p-0">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                      <div className="p-4 sm:p-6 space-y-4">
                        {/* Header */}
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={cn(
                            "w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br p-2.5 sm:p-3 shadow-lg group-hover:scale-105 transition-transform duration-300",
                            experience.color
                          )}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="mb-2 text-xs bg-primary/10 text-primary border-primary/20">
                              <Users className="h-3 w-3 mr-1" />
                              {experience.type}
                            </Badge>
                            <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                              {experience.company}
                            </h3>
                            <p className="text-sm sm:text-base font-semibold text-primary mt-0.5">
                              {experience.position}
                            </p>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                          {experience.link && (
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-primary hover:underline"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              <span>View</span>
                            </a>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                            <Code className="h-4 w-4 text-primary" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs px-2 py-0.5 bg-primary/5 text-primary border-primary/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ScrollArea className="h-[150px] sm:h-[180px]">
                            <div className="space-y-2 pr-2">
                              {experience.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-2 group/item">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                  <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover/item:text-foreground transition-colors">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:block p-6 lg:p-8">
                      <div className="flex gap-6 lg:gap-8">
                        {/* Left Side */}
                        <div className="w-1/3 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className={cn(
                              "w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0 rounded-xl bg-gradient-to-br p-3 lg:p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300",
                              experience.color
                            )}>
                              <Icon className="w-full h-full text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">
                                <Users className="h-3.5 w-3.5 mr-1.5" />
                                {experience.type}
                              </Badge>
                              <h3 className="text-lg lg:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                                {experience.company}
                              </h3>
                              <p className="text-base lg:text-lg font-semibold text-primary mt-1">
                                {experience.position}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{experience.location}</span>
                            </div>
                            {experience.link && (
                              <a
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary hover:underline"
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>Project Link</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right Side */}
                        <div className="w-2/3 space-y-5">
                          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                            {experience.description}
                          </p>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-base lg:text-lg">
                              <Code className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="px-3 py-1 bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-base lg:text-lg">
                              <Award className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                              Key Achievements
                            </h4>
                            <div className="space-y-2.5">
                              {experience.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start gap-3 group/achievement"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * idx }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 group-hover/achievement:scale-150 transition-transform duration-300" />
                                  <span className="text-muted-foreground leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300 text-sm lg:text-base">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
