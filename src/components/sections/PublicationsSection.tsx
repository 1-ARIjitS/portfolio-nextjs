"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, FileText, Users, Award, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

const publicationsData = [
  {
    id: "thermal-vision",
    title: "Thermal Vision: Pioneering Non-Invasive Temperature Tracking in Congested Spaces",
    authors: ["Arijit Samal", "Haroon R. Lone"],
    journal: "Elsevier ScienceDirect Smart Health Journal",
    period: "December 2022 – August 2023",
    publishedDate: "Published 2024",
    link: "https://www.sciencedirect.com/science/article/pii/S2352648325000376?via%3Dihub",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "YOLO", "IoT"],
    type: "Research Paper",
    status: "Published",
    description: "Co-authored paper as part of Bachelor's thesis, developing real-time temperature tracking in crowded environments using edge devices.",
    achievements: [
      "Developed innovative non-invasive temperature monitoring system",
      "Successfully implemented real-time temperature estimation for crowded environments",
      "Created robust solution for dense settings like movie theaters and classrooms",
      "Released dataset and programming code publicly for research community",
      "Demonstrated effectiveness in both sparse and dense environmental settings",
    ],
    abstract: `Non-invasive temperature monitoring of individuals plays a crucial role in identifying and isolating symptomatic individuals. Temperature monitoring becomes particularly vital in settings characterized by close human proximity, often referred to as dense settings. However, existing research on non-invasive temperature estimation using thermal cameras has predominantly focused on sparse settings. Unfortunately, the risk of disease transmission is significantly higher in dense settings like movie theaters or classrooms. Consequently, there is an urgent need to develop robust temperature estimation methods tailored explicitly for dense settings.

Our study proposes a non-invasive temperature estimation system that combines a thermal camera with an edge device. Our system employs YOLO models for face detection and utilizes a regression framework for temperature estimation. We evaluated the system on a diverse dataset collected in dense and sparse settings. Our proposed face detection model achieves an impressive mAP score of over 94 in both in-dataset and cross-dataset evaluations. Furthermore, the regression framework demonstrates remarkable performance with a mean square error of 0.18 °C and an impressive R² score of 0.96. Our experiments' results highlight the developed system's effectiveness, positioning it as a promising solution for continuous temperature monitoring in real-world applications. With this paper, we release our dataset and programming code publicly.`,

  },
];

export default function PublicationsSection() {
  const [expandedPublication, setExpandedPublication] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"details" | "abstract">("details");

  const toggleExpansion = (publicationId: string) => {
    setExpandedPublication(expandedPublication === publicationId ? null : publicationId);
    setActiveTab("details");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="publications" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Research Publications</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {publicationsData.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="card-modern overflow-hidden hover:shadow-xl transition-all duration-500 group"
            >
              {/* Main Publication Card */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Left Side - Publication Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          <Award className="h-4 w-4" />
                          {publication.status}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {publication.type}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{publication.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{publication.journal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{publication.authors.join(", ")}</span>
                      </div>
                    </div>


                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-2/3">
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {publication.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {publication.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {publication.technologies.map((tech) => (
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

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Publication
                      </motion.a>
                      
                      <motion.button
                        onClick={() => toggleExpansion(publication.id)}
                        className="btn-outline flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedPublication === publication.id ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            Hide Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            Show Details
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Section */}
              <AnimatePresence>
                {expandedPublication === publication.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border bg-secondary/20"
                  >
                    <div className="p-6 lg:p-8">
                      {/* Tab Navigation */}
                      <div className="flex gap-4 mb-6">
                        <button
                          onClick={() => setActiveTab("details")}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            activeTab === "details"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Key Achievements
                        </button>
                        <button
                          onClick={() => setActiveTab("abstract")}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            activeTab === "abstract"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Abstract
                        </button>
                      </div>

                      {/* Tab Content */}
                      <AnimatePresence mode="wait">
                        {activeTab === "details" && (
                          <motion.div
                            key="details"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Award className="h-5 w-5 text-primary" />
                              Key Achievements
                            </h4>
                            <div className="space-y-3">
                              {publication.achievements.map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  className="flex items-start gap-3 group/achievement"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * achievementIndex }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 group-hover/achievement:scale-150 transition-transform duration-300" />
                                  <span className="text-muted-foreground leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "abstract" && (
                          <motion.div
                            key="abstract"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <FileText className="h-5 w-5 text-primary" />
                              Abstract
                            </h4>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                              <p className="text-muted-foreground leading-relaxed text-justify">
                                {publication.abstract}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
} 