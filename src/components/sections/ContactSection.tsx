"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Award, CheckCircle, AlertCircle, GraduationCap } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    value: "+33 07 55 02 85 93",
    href: "tel:+33 0755028593",
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
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=ePzEMRMAAAAJ&hl=en&authuser=1",
    icon: GraduationCap,
    color: "hover:text-blue-700",
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
      await emailjs.send(
        "service_3ew9t67",
        "template_tu123hy",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
          to_email: "arijit.samal@student-cs.fr",
        },
        "jN4KPTic6keCH-_P2"
      );

      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again or email me directly." });
    }

    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col border-border/50 hover:border-primary/20 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="pb-4 sm:pb-5">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Contact Items */}
                  <div className="space-y-3">
                    {contactInfo.map((contact) => {
                      const Icon = contact.icon;
                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-200 group border border-transparent hover:border-border"
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-xl bg-gradient-to-br p-2.5 group-hover:scale-105 transition-transform duration-200 flex-shrink-0 shadow-sm",
                            contact.color
                          )}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 text-sm">
                              {contact.label}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 mt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Connect with me</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "p-2.5 rounded-xl bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-200 shadow-sm hover:scale-105",
                              social.color
                            )}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Availability Status - pushed to bottom */}
                  <div className="mt-auto pt-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                        <CheckCircle className="h-4 w-4" />
                        <span className="font-medium text-sm">Available for opportunities</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Open to full-time roles and exciting opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col border-border/50 hover:border-primary/20 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="pb-4 sm:pb-5">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <Send className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2.5 bg-secondary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2.5 bg-secondary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 bg-secondary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground text-sm"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="flex-1 w-full px-3 py-2.5 bg-secondary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground resize-none min-h-[100px] text-sm"
                        placeholder="Tell me about your project, idea, or just say hello!"
                      />
                    </div>

                    {/* Status Message */}
                    {status.message && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "p-3 rounded-xl flex items-center gap-2 text-sm",
                          status.type === "success"
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                            : status.type === "error"
                            ? "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20"
                            : "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20"
                        )}
                      >
                        {status.type === "success" && <CheckCircle className="h-4 w-4 flex-shrink-0" />}
                        {status.type === "error" && <AlertCircle className="h-4 w-4 flex-shrink-0" />}
                        {status.type === "loading" && (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent flex-shrink-0" />
                        )}
                        <span className="text-xs">{status.message}</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={status.type === "loading"}
                      className="w-full h-11 text-sm rounded-xl mt-auto"
                      size="lg"
                    >
                      {status.type === "loading" ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Card className="p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                I&apos;m always interested in hearing about new opportunities, innovative projects, 
                and ways to contribute to cutting-edge research in AI and ML.
              </p>
              <Button asChild size="lg" className="h-11 px-6 sm:px-8 rounded-xl text-sm">
                <a href="mailto:arijit.samal@student-cs.fr">
                  <Mail className="h-4 w-4" />
                  Let&apos;s Talk
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
