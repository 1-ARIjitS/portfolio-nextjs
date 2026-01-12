"use client";

import { motion } from "framer-motion";
import { Download, Code, Brain, Database, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Programming",
    icon: Code,
    skills: ["C/C++", "Python", "Java", "OOPs", "DSA", "Shell"],
  },
  {
    name: "ML & AI",
    icon: Brain,
    skills: ["ML", "DL", "NLP", "CV", "LLM", "Agents", "LangChain", "LangGraph", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV"],
  },
  {
    name: "Data & Analytics",
    icon: Database,
    skills: ["NumPy", "Pandas", "Seaborn", "Matplotlib", "SQL", "PostgreSQL", "Neo4J", "GraphDB", "SPARQL", "Cypher"],
  },
  {
    name: "Tools & Platforms",
    icon: Zap,
    skills: ["Streamlit", "Airflow", "PySpark", "Docker", "GCS", "Minio", "Big Data"],
  },
];

export default function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume/ARIJIT_RESUME.pdf";
    link.download = "Arijit_Samal_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">About Me</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Passionate about building intelligent systems and driving innovation through data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* About Info Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-200 hover:shadow-lg">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  My Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-5">
                <motion.p variants={itemVariants} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Results-driven data scientist with expertise in <span className="text-primary font-semibold">big data</span>, 
                  <span className="text-primary font-semibold"> machine learning</span>, <span className="text-primary font-semibold">deep learning</span>, 
                  and <span className="text-primary font-semibold">Gen-AI</span>. Proficient in Python, Big data technologies, 
                  PyTorch, and LLMs with a strong background in developing data-driven solutions across various domains.
                </motion.p>

                <motion.p variants={itemVariants} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  My expertise spans across <span className="text-primary font-semibold">healthcare</span>, 
                  <span className="text-primary font-semibold"> e-commerce</span>, <span className="text-primary font-semibold">social media</span>, 
                  and <span className="text-primary font-semibold"> IoT</span> domains. I have proven ability to design and implement 
                  comprehensive data analysis, NLP, Knowledge Graphs, Deep Learning, and Computer Vision models.
                </motion.p>

                <motion.p variants={itemVariants} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Demonstrated success in <span className="text-primary font-semibold">hackathons</span>, achieved prestigious 
                  <span className="text-primary font-semibold"> scholarships</span>, conducted impactful 
                  <span className="text-primary font-semibold"> research</span>, and contributed to 
                  <span className="text-primary font-semibold"> open-source projects</span>, showcasing strong problem-solving, 
                  collaborative, and analytical skills with a commitment to innovate and impact using data science.
                </motion.p>

                <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
                  <motion.button
                    onClick={handleDownloadCV}
                    className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                    Download CV
                  </motion.button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Card - Evenly distributed */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="h-full"
          >
            <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-200 hover:shadow-lg flex flex-col">
              <CardHeader className="pb-4 sm:pb-5">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4 sm:gap-5">
                {skillCategories.map((category) => {
                  const CategoryIcon = category.icon;
                  return (
                    <motion.div key={category.name} variants={itemVariants} className="flex-1 flex flex-col">
                      {/* Category Header */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <CategoryIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">{category.name}</h4>
                      </div>
                      {/* Skills as inline badges */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="px-2.5 py-1 text-xs sm:text-sm bg-secondary/50 text-foreground/80 border-border/50 hover:border-primary/30 hover:text-primary transition-colors duration-150"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
