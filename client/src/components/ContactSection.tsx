import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema)
  });

  const serviceValue = watch("service");

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "algovist@gmail.com",
      bgColor: "bg-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923239972069",
      bgColor: "bg-accent/20",
      iconColor: "text-accent"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Pakistan",
      bgColor: "bg-primary/20",
      iconColor: "text-primary"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "bg-primary/20 hover:bg-primary text-primary hover:text-white" },
    { icon: Twitter, href: "#", color: "bg-accent/20 hover:bg-accent text-accent hover:text-white" },
    { icon: Github, href: "#", color: "bg-primary/20 hover:bg-primary text-primary hover:text-white" },
    { icon: Instagram, href: "#", color: "bg-accent/20 hover:bg-accent text-accent hover:text-white" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Contact us today to discuss your project and see how Algovist can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-card rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-input border-border text-foreground placeholder-muted-foreground"
                    data-testid="input-first-name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-first-name">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-input border-border text-foreground placeholder-muted-foreground"
                    data-testid="input-last-name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-last-name">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-input border-border text-foreground placeholder-muted-foreground"
                  data-testid="input-email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="bg-input border-border text-foreground placeholder-muted-foreground"
                  data-testid="input-company"
                  {...register("company")}
                />
              </div>
              <div>
                <Label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </Label>
                <Select
                  value={serviceValue}
                  onValueChange={(value) => setValue("service", value)}
                >
                  <SelectTrigger
                    className="bg-input border-border text-foreground"
                    data-testid="select-service"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                    <SelectItem value="cloud">Cloud Solutions</SelectItem>
                    <SelectItem value="development">Custom Development</SelectItem>
                    <SelectItem value="consulting">Technical Consulting</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-service">
                    {errors.service.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-input border-border text-foreground placeholder-muted-foreground resize-none"
                  data-testid="textarea-message"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || contactMutation.isPending}
                className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-send-message"
              >
                {isSubmitting || contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                      <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">{info.title}</p>
                      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    data-testid={`social-link-${index}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
