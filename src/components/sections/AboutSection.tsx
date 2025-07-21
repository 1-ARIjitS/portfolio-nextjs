"use client";

import { motion } from "framer-motion";
import { Download, Code, Brain, Database, Zap } from "lucide-react";

const skills = [
  { name: "C/C++", icon: Code },
  { name: "Python", icon: Code },
  { name: "Java", icon: Code },
  { name: "OOPs", icon: Code },
  { name: "DSA", icon: Brain },
  { name: "NumPy", icon: Database },
  { name: "Pandas", icon: Database },
  { name: "Seaborn", icon: Database },
  { name: "Matplotlib", icon: Database },
  { name: "Scikit-learn", icon: Brain },
  { name: "PyTorch", icon: Brain },
  { name: "TensorFlow", icon: Brain },
  { name: "ML", icon: Brain },
  { name: "DL", icon: Brain },
  { name: "Data Analytics", icon: Database },
  { name: "Data Visualization", icon: Database },
  { name: "OpenCV", icon: Brain },
  { name: "Langchain", icon: Brain },
  { name: "Agents", icon: Brain },
  { name: "LangGraph", icon: Brain },
  { name: "Streamlit", icon: Zap },
  { name: "LLM", icon: Brain },
  { name: "SQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Airflow", icon: Zap },
  { name: "PySpark", icon: Zap },
  { name: "Docker", icon: Zap },
  { name: "Shell", icon: Code },
  { name: "GCS", icon: Database },
  { name: "Minio", icon: Database },
  { name: "Big Data", icon: Database },
  { name: "SPARQL", icon: Database },
  { name: "Cypher", icon: Database },
  { name: "Neo4J", icon: Database },
  { name: "GraphDB", icon: Database },
  { name: "OrientDB", icon: Database }
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
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* About Info Card */}
          <motion.div
            className="card-modern p-6 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="heading-md text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                My Introduction
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Results-driven data scientist with expertise in <span className="text-primary font-semibold">big data</span>, 
                <span className="text-primary font-semibold"> machine learning</span>, <span className="text-primary font-semibold">deep learning</span>, 
                and <span className="text-primary font-semibold">Gen-AI</span>. Proficient in Python, Big data technologies, 
                PyTorch, and LLMs with a strong background in developing data-driven solutions across various domains.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                My expertise spans across <span className="text-primary font-semibold">healthcare</span>, 
                <span className="text-primary font-semibold"> e-commerce</span>, <span className="text-primary font-semibold">social media</span>, 
                and <span className="text-primary font-semibold"> IoT</span> domains. I have proven ability to design and implement 
                comprehensive data analysis, NLP, Knowledge Graphs, Deep Learning, and Computer Vision models.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Demonstrated success in <span className="text-primary font-semibold">hackathons</span>, achieved prestigious 
                <span className="text-primary font-semibold"> scholarships</span>, conducted impactful 
                <span className="text-primary font-semibold"> research</span>, and contributed to 
                <span className="text-primary font-semibold"> open-source projects</span>, showcasing strong problem-solving, 
                collaborative, and analytical skills with a commitment to innovate and impact using data science.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
              <motion.button
                onClick={handleDownloadCV}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="card-modern p-6 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="heading-md text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Skills & Technologies
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
              variants={containerVariants}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-lg p-2 sm:p-3 transition-all duration-300 cursor-default"
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </motion.div>


          </motion.div>
        </div>


      </div>
    </section>
  );
} 