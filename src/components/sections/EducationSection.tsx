"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    id: "bdma",
    title: "Erasmus Mundus Masters in Big Data Management and Analytics (BDMA)",
    period: "2023 – Present",
    type: "Masters Program",
    logo: "/images/bdma-logo.png",
    semesters: [
      {
        semester: "Semester 1",
        university: "Université libre de Bruxelles (ULB)",
        location: "Brussels, Belgium",
        degree: "MS in Computer Science",
        logo: "/images/ulb-logo.png",
      },
      {
        semester: "Semester 2",
        university: "Universitat Politècnica de Catalunya (UPC)",
        location: "Barcelona, Spain",
        degree: "MS in BDMA",
        logo: "/images/upc-logo.png",
      },
      {
        semester: "Semester 3",
        university: "CentraleSupélec (CS), Université Paris-Saclay",
        location: "Paris, France",
        degree: "M2 in BDMA",
        logo: "/images/cs-logo.jpg",
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
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Education</h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              className="relative"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >


              <div className="card-modern p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-6 sm:gap-8">
                  {/* Header Section */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                      <Image
                        src={education.logo}
                        alt={`${education.title} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                        <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                        {education.type}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                        {education.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                          <span className="font-medium">{education.period}</span>
                        </div>
                        {education.location && (
                          <div className="flex items-center gap-1 sm:gap-2">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                            <span className="font-medium">{education.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Semesters for BDMA */}
                    {education.semesters && (
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        {education.semesters.map((semester, semIndex) => (
                          <motion.div
                            key={semester.semester}
                            className="flex items-start gap-3 sm:gap-6 p-3 sm:p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * semIndex }}
                            viewport={{ once: true }}
                          >
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                              <Image
                                src={semester.logo}
                                alt={`${semester.university} logo`}
                                fill
                                className="object-contain rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="mb-1 sm:mb-2">
                                <span className="font-bold text-primary text-sm sm:text-base lg:text-lg">
                                  {semester.semester}
                                </span>
                              </div>
                              <h4 className="text-foreground font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                                {semester.university}
                              </h4>
                              <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                                <div className="flex items-center gap-1 sm:gap-2">
                                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                  <span>{semester.location}</span>
                                </div>
                                <div className="italic font-medium text-foreground text-xs sm:text-sm">
                                  {semester.degree}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Achievements for IISER */}
                    {education.achievements && (
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
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
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
} 