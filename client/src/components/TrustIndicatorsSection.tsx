import { motion } from "framer-motion";
import { Award, Clock, Users, Shield, Zap, Target } from "lucide-react";

const trustMetrics = [
  {
    icon: Clock,
    number: "5+",
    label: "Years",
    description: "Delivering AI Excellence",
    color: "text-primary"
  },
  {
    icon: Users,
    number: "200+",
    label: "Projects",
    description: "Successfully Completed",
    color: "text-accent"
  },
  {
    icon: Target,
    number: "50+",
    label: "Clients",
    description: "Enterprise & Startups",
    color: "text-primary"
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "Project Delivery",
    color: "text-accent"
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Support",
    description: "Client Assistance",
    color: "text-primary"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Secure",
    description: "Data Protection",
    color: "text-accent"
  }
];

const expertiseAreas = [
  {
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI GPT"],
    icon: "🤖"
  },
  {
    title: "Web Development",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python"],
    icon: "🌐"
  },
  {
    title: "Mobile Development",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Cross-Platform"],
    icon: "📱"
  },
  {
    title: "Cloud & DevOps",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    icon: "☁️"
  }
];

const certifications = [
  {
    title: "AI/ML Certified",
    description: "Advanced machine learning and AI implementation expertise",
    badge: "🏅"
  },
  {
    title: "Cloud Architecture",
    description: "Certified in AWS, Azure, and Google Cloud platforms",
    badge: "☁️"
  },
  {
    title: "Security Compliance",
    description: "ISO 27001 and SOC 2 compliant development processes",
    badge: "🔒"
  },
  {
    title: "Quality Assurance",
    description: "Agile and DevOps certified development methodologies",
    badge: "✅"
  }
];

export default function TrustIndicatorsSection() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Choose Algovist?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record, cutting-edge expertise, and unwavering commitment to your success
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center bg-card/40 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:bg-card/60 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`trust-metric-${metric.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{metric.number}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground leading-tight">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Core Expertise Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-card/40 rounded-lg p-6 hover:bg-card/60 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`expertise-area-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-3xl mb-4">{area.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{area.title}</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {area.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Compliance */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Certifications & Standards
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-4xl mb-3">{cert.badge}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Industry Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Top AI Innovator</h4>
                <p className="text-sm text-muted-foreground">Recognized for breakthrough AI implementations across multiple industries</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">⭐</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Client Excellence</h4>
                <p className="text-sm text-muted-foreground">Consistently rated 5-star by enterprise clients for delivery quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Innovation Leader</h4>
                <p className="text-sm text-muted-foreground">Pioneer in applying AI solutions to complex business challenges</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/20">
              <p className="text-muted-foreground mb-6">
                Ready to experience the Algovist advantage for your business?
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                data-testid="button-experience-algovist"
              >
                Start Your Project Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}