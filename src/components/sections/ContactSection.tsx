"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Award, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arijit.samal@student-cs.fr",
    href: "mailto:arijit.samal@student-cs.fr",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 075028593",
    href: "tel:+33075028593",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Paris, Ile de France, France",
    href: "https://maps.google.com?q=Paris,France",
    color: "from-purple-500 to-purple-600",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/1-ARIjitS",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arijit-samal1",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Devpost",
    href: "https://devpost.com/arijits19",
    icon: Award,
    color: "hover:text-yellow-600",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setStatus({ type: "loading", message: "Sending message..." });

    try {
      // Initialize EmailJS (you'll need to set up your own EmailJS account)
      await emailjs.send(
        "service_3ew9t67", // Replace with your EmailJS service ID
        "template_tu123hy", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
          to_email: "arijit.samal@student-cs.fr",
        },
        "jN4KPTic6keCH-_P2" // Replace with your EmailJS public key
      );

      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again or email me directly." });
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);
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
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="card-modern p-6 sm:p-8 w-full flex flex-col">
              <h3 className="heading-md text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Contact Information
              </h3>

              <div className="flex-1 flex flex-col">
                <div className="space-y-4 sm:space-y-6 flex-1">
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${contact.color} p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                            {contact.label}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            {contact.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="h-6 w-6" />
                          <span className="sr-only">{social.name}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Available for opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to full-time roles and exciting opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-1 flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="card-modern p-6 sm:p-8 w-full flex flex-col">
              <h3 className="heading-md text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <Send className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-4 sm:space-y-6 flex-1">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="flex-1 w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground resize-none min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {/* Status Message */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center gap-2 ${
                        status.type === "success"
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                          : status.type === "error"
                          ? "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20"
                          : "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {status.type === "success" && <CheckCircle className="h-5 w-5" />}
                      {status.type === "error" && <AlertCircle className="h-5 w-5" />}
                      {status.type === "loading" && (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={status.type !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status.type !== "loading" ? { scale: 0.98 } : {}}
                  >
                    {status.type === "loading" ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-modern p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities, innovative projects, 
              and ways to contribute to cutting-edge research in AI and ML.
            </p>
            <motion.a
              href="mailto:arijit.samal@student-cs.fr"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
              Let&apos;s Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 