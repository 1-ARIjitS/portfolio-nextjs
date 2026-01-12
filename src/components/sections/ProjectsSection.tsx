"use client";

import { motion } from "framer-motion";
import { Github, Bot, Trophy, Target, Brain, Zap, Award } from "lucide-react";
import ProjectSlider from "@/components/ui/ProjectSlider";

const projectsData = [
  {
    id: "oasis-os",
    title: "OASIS OS",
    period: "2024",
    category: "Agents, GUI-Automation, LLM, GEN-AI",
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
    type: "Personal Project"
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
    type: "Hackathon"
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
    type: "Research"
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
    type: "Hackathon"
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
    type: "Startup"
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
    type: "Hackathon"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A showcase of my work in AI, Machine Learning, and Software Engineering
          </p>
        </motion.div>

        {/* Project Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectSlider projects={projectsData} />
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-10 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/1-ARIjitS?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">View More Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
