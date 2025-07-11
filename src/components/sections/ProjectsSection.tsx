"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github, Code, Award, Zap, Bot, Trophy, Target, Brain } from "lucide-react";

const projectsData = [
  {
    id: "oasis-os",
    title: "OASIS OS",
    period: "2024",
    category: "Agents, GUI-Automation, LLM, GEN-AI, ",
    status: "Completed", 
    description: "Intelligent Workflow Automation Platform that transforms workspaces with AI-powered automation. Teach OASIS OS your workflows once, and watch it handle repetitive tasks forever. Features teach mode recording, cross-platform GUI automation, and modern web interface.",
    technologies: ["Python", "Next.js", "FastAPI", "GPT-4.1", "Groq", "Ollama", "whisper", "TypeScript", "LangGraph", "LangChain"],
    achievements: [
      "Teach Mode: Record workflows with mouse/keyboard tracking and voice commands",
      "Cross-platform GUI automation (Windows, macOS, Linux) with visual debugging",
      "Extensible architecture with FastAPI backend and multiple AI model support",
      "Smart automation with workflow execution via simple commands",
      "Voice command integration with speech-to-text",
    ],
    links: {
      github: "https://github.com/1-ARIjitS/Oasis-OS",
    },
    icon: Bot,
    color: "from-cyan-500 to-blue-600",
    type: "Personal Project",
  },
  {
    id: "revpoints-plus",
    title: "RevPoints+",
    period: "2024",
    category: "Agents, LLM, GEN-AI",
    status: "Completed",
    description: "AI-powered personalized point redemption system for Revolut users. Analyzes transaction history to proactively recommend partner vendors where users can spend points, while helping small businesses gain visibility through automated marketing campaigns using multimodal AI.",
    technologies: ["Python", "Streamlit", "Redis", "LangGraph", "LangChain", "Gemini-2.5-Pro", "Perplexity API"],
    achievements: [
      "🥉 Winner at MLH HackUPC 2025",
      "End-to-end AI automation: Brochure upload to live campaign in under 2 minutes",
      "Real-time personalized feed updates using Redis Streams with <200ms latency",
      "Human-in-the-loop campaign refinement system for vendor control",
      "Automated vendor recruitment using Perplexity API for business enrichment",
      "Transaction-based user profiling with dynamic recommendation scoring",
      "Pub/Sub notification system for timely, targeted promotions",
    ],
    links: {
      demo: "https://devpost.com/software/revpoints",
      consumerApp: "https://revpoints-plus-consumer.streamlit.app",
      vendorApp: "https://revpoints-plus-vendor.streamlit.app",
    },
    icon: Target,
    color: "from-green-500 to-emerald-600",
    type: "Hackathon",
  },
  {
    id: "splat-space-diffusion",
    title: "Splat Space Diffusion",
    period: "September 2024 – Present",
    category: "GEN-AI, CV, DL",
    status: "In Progress",
    description: "Advanced image generation project using Diffusion Models and 2D Gaussian Splatting. Training diffusion models on Gaussian representations in splat space instead of pixel or embedding space for enhanced image generation quality.",
    technologies: ["Python", "OpenCV", "PyTorch"],
    achievements: [
      "Novel approach to diffusion model training in splat space",
      "Enhanced image generation quality through Gaussian representations",
      "Innovative combination of diffusion models and Gaussian splatting",
    ],
    links: {
      demo: "https://drive.google.com/drive/folders/14F9iQK45AnOSNxvXk0qpHpVjC22lR4ks?usp=sharing",
    },
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    type: "Research",
  },
  {
    id: "medireels",
    title: "MediReels",
    period: "October 2024",
    category: "LLM, GEN-AI",
    status: "Completed",
    description: "Mistral X Alan Hackathon project - A platform for generating engaging short videos on medical topics. Reduces content creation time from several days of research, creation, and editing to under 10 minutes.",
    technologies: ["Python", "Mistral-large", "GCP", "HuggingFace", "Streamlit", "FastAPI", "Edge-tts", "Langchain", "Moviepy", "FLUX.1-dev", "Tavily", "Asyncio", "Pydub"],
    achievements: [
      "Reduced content creation time by 99% (days to minutes)",
      "Automated medical video generation pipeline"
    ],
    links: {
      github: "https://github.com/1-ARIjitS/MediReels",
    },
    icon: Trophy,
    color: "from-emerald-500 to-teal-600",
    type: "Hackathon",
  },
  {
    id: "spicybytes",
    title: "SpicyBytes",
    period: "February – July 2024",
    category: "BIG DATA, GEN-AI, VLM, LLM, DL, ML",
    status: "Completed",
    description: "Comprehensive platform aimed at reducing food waste for 200K+ students in Barcelona. Scraped 1M+ product listings from 15K+ stores across 60+ postal codes. Pitched as a startup at UPC.",
    technologies: ["Python", "Scikit-learn", "Selenium", "pySpark", "MLflow", "Streamlit", "BigQuery", "Minio", "GCS", "Airflow", "Neo4J", "GraphDB", "Looker Studio", "Llama", "Langchain", "Gemini"],
    achievements: [
      "Scraped 1M+ product listings from 15K+ stores across 60+ postal codes",
      "Integrated multilingual OCR using Gemini-1.5-pro for inventory automation",
      "Forecasted sales trends using Facebook Prophet and implemented dynamic pricing",
      "Integrated Llama-based food recommendation engine and BERT sentiment analysis",
      "Pitched as startup at UPC for 200K+ students",
    ],
    links: {
      github: "https://github.com/1-ARIjitS/SpicyBytes",
    },
    icon: Zap,
    color: "from-orange-500 to-red-600",
    type: "Startup",
  },
  {
    id: "klinic",
    title: "Klìnic",
    period: "May 2024",
    category: "LLM, KG, GEN-AI, DL",
    status: "Completed",
    description: "1st place winner at MLH HackUPC 2024. Platform to assist clinicians and researchers in navigating the landscape of previous clinical trials using knowledge graphs and RAG architecture.",
    technologies: ["Python", "LLM", "GPT-4", "LangChain", "InterSystems IRIS Vector Search", "RAG", "Streamlit"],
    achievements: [
      "🥇 1st place at MLH HackUPC 2024",
      "Created knowledge graph with 500K+ entries from NIH MedGen and clinical trials",
      "Used KG embeddings in RAG to enhance query accuracy and reduce hallucinations",
      "Stored KG in IRIS vector DB with similarity-based disease matching",
      "Retrieved clinical trial info via API with GPT-4 summarization",
    ],
    links: {
      demo: "https://devpost.com/software/x-grmvsx",
    },
    icon: Award,
    color: "from-blue-500 to-indigo-600",
    type: "Hackathon",
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Featured Projects</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card-modern p-6 lg:p-8 hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
              >
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`relative w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br ${project.color} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        <Code className="h-4 w-4" />
                        {project.type}
                      </div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed" 
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                          : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                      }`}>
                        {project.status}
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>

                                  {/* Project Details */}
                  <div className="mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{project.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start gap-3 group/achievement"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * achievementIndex }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 group-hover/achievement:scale-150 transition-transform duration-300" />
                          <span className="text-muted-foreground text-sm leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.links.github ? "btn-outline flex items-center gap-2" : "btn-primary flex items-center gap-2"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.links.demo.includes('devpost') ? 'View on Devpost' : 'View Project'}
                    </motion.a>
                  )}
                  {project.links.consumerApp && (
                    <motion.a
                      href={project.links.consumerApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Consumer App
                    </motion.a>
                  )}
                  {project.links.vendorApp && (
                    <motion.a
                      href={project.links.vendorApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Vendor App
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/1-ARIjitS?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 mx-auto w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>


      </div>
    </section>
  );
} 