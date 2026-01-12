"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, FileText, Users, Award, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      "Developed and deployed a real-time temperature tracking system in dense environments using edge devices",
      "Achieved 94% thermal face detection accuracy and R2 score of 0.96 in real-time temperature estimation"
    ],
    abstract: `Non-invasive temperature monitoring of individuals plays a crucial role in identifying and isolating symptomatic individuals. Temperature monitoring becomes particularly vital in settings characterized by close human proximity, often referred to as dense settings. However, existing research on non-invasive temperature estimation using thermal cameras has predominantly focused on sparse settings. Unfortunately, the risk of disease transmission is significantly higher in dense settings like movie theaters or classrooms. Consequently, there is an urgent need to develop robust temperature estimation methods tailored explicitly for dense settings.

Our study proposes a non-invasive temperature estimation system that combines a thermal camera with an edge device. Our system employs YOLO models for face detection and utilizes a regression framework for temperature estimation. We evaluated the system on a diverse dataset collected in dense and sparse settings. Our proposed face detection model achieves an impressive mAP score of over 94 in both in-dataset and cross-dataset evaluations. Furthermore, the regression framework demonstrates remarkable performance with a mean square error of 0.18 °C and an impressive R² score of 0.96. Our experiments' results highlight the developed system's effectiveness, positioning it as a promising solution for continuous temperature monitoring in real-world applications. With this paper, we release our dataset and programming code publicly.`,

  },
];

export default function PublicationsSection() {
  const [expandedPublication, setExpandedPublication] = useState<string | null>(null);

  const toggleExpansion = (publicationId: string) => {
    setExpandedPublication(expandedPublication === publicationId ? null : publicationId);
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
    <section id="publications" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">Research Publications</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Contributing to the scientific community through peer-reviewed research
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {publicationsData.map((publication) => (
            <motion.div key={publication.id} variants={itemVariants}>
              <Card className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl group">
                <CardContent className="p-0">
                  {/* Main Publication Card */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden space-y-4">
                      {/* Header */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 sm:p-3 shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <BookOpen className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-1.5 mb-1.5">
                            <Badge variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20">
                              <Award className="h-3 w-3 mr-1" />
                              {publication.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {publication.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                        {publication.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span>{publication.period}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileText className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{publication.journal}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Users className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{publication.authors.join(", ")}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {publication.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {publication.technologies.map((tech) => (
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

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          View Publication
                        </a>
                        <button
                          onClick={() => toggleExpansion(publication.id)}
                          className="inline-flex items-center gap-1.5 border border-border text-foreground text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                        >
                          {expandedPublication === publication.id ? (
                            <>
                              <ChevronUp className="h-3.5 w-3.5" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3.5 w-3.5" />
                              Show Details
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex gap-8">
                      {/* Left Side */}
                      <div className="w-1/3 space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20">
                              <Award className="h-3.5 w-3.5 mr-1.5" />
                              {publication.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground font-medium">
                              {publication.type}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2.5 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{publication.period}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{publication.journal}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Users className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{publication.authors.join(", ")}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="w-2/3 space-y-5">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                          {publication.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {publication.description}
                        </p>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {publication.technologies.map((tech) => (
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

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <motion.a
                            href={publication.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Publication
                          </motion.a>
                          
                          <motion.button
                            onClick={() => toggleExpansion(publication.id)}
                            className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
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

                  {/* Expandable Section with Tabs */}
                  <AnimatePresence>
                    {expandedPublication === publication.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border bg-secondary/20"
                      >
                        <div className="p-4 sm:p-6 lg:p-8">
                          <Tabs defaultValue="achievements" className="w-full">
                            <TabsList className="grid w-full max-w-md grid-cols-2 mb-4 sm:mb-6">
                              <TabsTrigger value="achievements" className="text-xs sm:text-sm">
                                Key Achievements
                              </TabsTrigger>
                              <TabsTrigger value="abstract" className="text-xs sm:text-sm">
                                Abstract
                              </TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="achievements">
                              <div className="space-y-3">
                                <h4 className="font-semibold text-foreground flex items-center gap-2 text-sm sm:text-base">
                                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                  Key Achievements
                                </h4>
                                <div className="space-y-2.5">
                                  {publication.achievements.map((achievement, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="flex items-start gap-2.5 group/item"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 * idx }}
                                    >
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0 mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300" />
                                      <span className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                        {achievement}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="abstract">
                              <div className="space-y-3">
                                <h4 className="font-semibold text-foreground flex items-center gap-2 text-sm sm:text-base">
                                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                  Abstract
                                </h4>
                                <ScrollArea className="h-[200px] sm:h-[250px] lg:h-[200px]">
                                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify pr-4">
                                    {publication.abstract}
                                  </p>
                                </ScrollArea>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
