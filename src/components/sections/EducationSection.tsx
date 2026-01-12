"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    id: "bdma",
    title: "Erasmus Mundus Masters in Big Data Management and Analytics (BDMA)",
    period: "2023 – 2025",
    type: "Master's Degree",
    logo: "/images/bdma-logo.png",
    semesters: [
      {
        semester: "Semester 1",
        university: "Université libre de Bruxelles (ULB)",
        location: "Brussels, Belgium",
        degree: "MS in Computer Science",
        logo: "/logos/ulb_logo.svg",
      },
      {
        semester: "Semester 2",
        university: "Universitat Politècnica de Catalunya (UPC)",
        location: "Barcelona, Spain",
        degree: "MS in BDMA",
        logo: "/logos/upc_logo.png",
      },
      {
        semester: "Semester 3 and Semester 4",
        university: "CentraleSupélec (CS), Université Paris-Saclay",
        location: "Paris, France",
        degree: "MS in Data Science and AI",
        logo: "/logos/cs_logo.png",
      },
    ],

  },
  {
    id: "iiser",
    title: "Indian Institute of Science Education and Research (IISER), Bhopal",
    period: "2019 – 2023",
    location: "Bhopal, India",
    type: "Bachelor's Degree",
    logo: "/images/iiserb-logo.png",
    achievements: [
      "Bachelors in Electrical Engineering and Computer Science (EECS)",
      "Minor in Data Science and Engineering (DSE)",
      "G.P.A.: 9.57 / 10.00",
    ],

  },
];

export default function EducationSection() {
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
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">Education</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Academic journey across Europe and India in Data Science and Engineering
          </p>
        </motion.div>

        <motion.div
          className="space-y-8 sm:space-y-10 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
                    {/* Header Section */}
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white dark:bg-white shadow-lg border border-border/20">
                        <Image
                          src={education.logo}
                          alt={`${education.title} logo`}
                          fill
                          className="object-contain p-2 sm:p-2.5"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="mb-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
                          <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
                          {education.type}
                        </Badge>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight mb-2 sm:mb-3">
                          {education.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            <span className="font-medium">{education.period}</span>
                          </div>
                          {education.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                              <span className="font-medium">{education.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                      {/* Semesters for BDMA */}
                      {education.semesters && (
                        <div className="grid gap-3 sm:gap-4">
                          {education.semesters.map((semester, semIndex) => (
                            <motion.div
                              key={semester.semester}
                              className="flex items-start gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 lg:p-5 bg-secondary/30 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:bg-secondary/50"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * semIndex }}
                              viewport={{ once: true }}
                            >
                              <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white dark:bg-white shadow-md border border-border/20">
                                <Image
                                  src={semester.logo}
                                  alt={`${semester.university} logo`}
                                  fill
                                  className={`object-contain ${semester.logo.includes('cs_logo') ? 'p-0 scale-110' : 'p-2 sm:p-2.5'}`}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <Badge variant="outline" className="mb-1.5 sm:mb-2 text-xs bg-primary/5 text-primary border-primary/20">
                                  {semester.semester}
                                </Badge>
                                <h4 className="text-foreground font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-1.5 leading-tight">
                                  {semester.university}
                                </h4>
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                                    <span>{semester.location}</span>
                                  </div>
                                  <span className="text-primary font-medium">{semester.degree}</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Achievements for IISER */}
                      {education.achievements && (
                        <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                          {education.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achievement}
                              className="flex items-start gap-2 sm:gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * achIndex }}
                              viewport={{ once: true }}
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0 mt-1.5 sm:mt-2" />
                              <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
