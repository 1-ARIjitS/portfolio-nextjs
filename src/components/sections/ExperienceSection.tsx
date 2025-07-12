"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Building, Code, Award, Users } from "lucide-react";

const experienceData = [
  {
    id: "cfm",
    company: "Capital Fund Management (CFM)",
    position: "Data Science Intern",
    period: "March 2024 – Present",
    location: "Paris, Ile de France, France",
    type: "Fintech (HFT)",
    description: "Building a multi-agent system to fix alerts in the data equity referential pipeline of CFM which is an essential part of the intraday trading workflows.",
    technologies: ["Python", "OracleDB", "LangChain", "LangGraph", "Google ADK", "FastAPI", "Streamlit"],
    achievements: [
      "Developed intelligent alert resolution system for critical trading workflows",
      "Integrated multi-agent architecture for automated problem solving",
      "Enhanced data pipeline reliability and reduced manual intervention",
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
    position: "Research and Development Intern",
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
    <section id="experience" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Professional Experience</h2>
        </motion.div>

        <motion.div
          className="space-y-8"
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
                className="relative"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >


                <div className="card-modern p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left Side - Icon and Company */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className={`relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-gradient-to-br ${experience.color} p-2 sm:p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                            {experience.type}
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                            {experience.company}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-primary mt-1">
                            {experience.position}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span>{experience.location}</span>
                        </div>
                        {experience.link && (
                          <div className="flex items-center gap-2">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors underline text-xs sm:text-sm"
                            >
                              Project Link
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-2/3">
                      {/* Description */}
                      <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg">
                          <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {experience.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs sm:text-sm font-medium rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              className="flex items-start gap-2 sm:gap-3 group/achievement"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * achievementIndex }}
                              viewport={{ once: true }}
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0 mt-1.5 sm:mt-2 group-hover/achievement:scale-150 transition-transform duration-300" />
                              <span className="text-muted-foreground leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
} 