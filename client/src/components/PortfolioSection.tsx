import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users, Zap, BarChart3, Shield, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise AI Fraud Detection",
    client: "Global Banking Corporation",
    industry: "Financial Services",
    description: "Implemented advanced machine learning algorithms to detect fraudulent transactions in real-time, reducing financial losses and improving security.",
    challenge: "Process 1M+ daily transactions with <100ms latency while maintaining 99.9% accuracy",
    results: [
      { metric: "Fraud Detection", value: "97.8%", improvement: "+45%" },
      { metric: "False Positives", value: "0.2%", improvement: "-60%" },
      { metric: "Response Time", value: "78ms", improvement: "-85%" }
    ],
    technologies: ["TensorFlow", "Python", "AWS Lambda", "Redis", "PostgreSQL"],
    icon: Shield,
    timeline: "8 months"
  },
  {
    id: 2,
    title: "Smart Supply Chain Optimization",
    client: "Manufacturing Multinational",
    industry: "Manufacturing & Logistics",
    description: "Developed an AI-driven supply chain management system that optimizes inventory levels, predicts demand, and automates procurement decisions.",
    challenge: "Optimize inventory across 200+ locations while reducing costs by 30% and improving delivery times",
    results: [
      { metric: "Cost Reduction", value: "32%", improvement: "+2% vs target" },
      { metric: "Delivery Speed", value: "2.1 days", improvement: "-40%" },
      { metric: "Inventory Accuracy", value: "99.1%", improvement: "+25%" }
    ],
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "Machine Learning"],
    icon: TrendingUp,
    timeline: "12 months"
  },
  {
    id: 3,
    title: "Healthcare Data Analytics Platform",
    client: "Regional Healthcare Network",
    industry: "Healthcare Technology",
    description: "Built a comprehensive analytics platform that processes patient data to improve treatment outcomes and operational efficiency.",
    challenge: "Analyze 500K+ patient records while ensuring HIPAA compliance and providing real-time insights",
    results: [
      { metric: "Diagnostic Accuracy", value: "94.7%", improvement: "+18%" },
      { metric: "Processing Speed", value: "1.2s", improvement: "-75%" },
      { metric: "Cost Savings", value: "$1.8M", improvement: "Annual" }
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "Azure"],
    icon: BarChart3,
    timeline: "10 months"
  },
  {
    id: 4,
    title: "Global E-commerce Platform",
    client: "International Retail Chain",
    industry: "E-commerce & Retail",
    description: "Developed a scalable e-commerce platform with AI-powered recommendations, real-time inventory management, and multi-currency support.",
    challenge: "Handle 100K+ concurrent users across 15 countries with personalized shopping experiences",
    results: [
      { metric: "Conversion Rate", value: "12.4%", improvement: "+67%" },
      { metric: "Page Load Speed", value: "1.8s", improvement: "-55%" },
      { metric: "Revenue Growth", value: "$5.2M", improvement: "+89%" }
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Stripe"],
    icon: Globe,
    timeline: "14 months"
  },
  {
    id: 5,
    title: "Smart City IoT Management",
    client: "Metropolitan Government",
    industry: "Smart City & IoT",
    description: "Created an integrated IoT platform for smart city management, monitoring traffic, energy consumption, and public services in real-time.",
    challenge: "Manage 10K+ IoT devices with real-time monitoring and predictive maintenance capabilities",
    results: [
      { metric: "Energy Efficiency", value: "28%", improvement: "Improvement" },
      { metric: "Traffic Flow", value: "35%", improvement: "Better" },
      { metric: "Maintenance Costs", value: "$2.1M", improvement: "-42%" }
    ],
    technologies: ["React", "Python", "InfluxDB", "MQTT", "Docker"],
    icon: Zap,
    timeline: "16 months"
  },
  {
    id: 6,
    title: "Fintech Mobile Trading App",
    client: "Investment Technology Startup",
    industry: "Financial Technology",
    description: "Built a comprehensive mobile trading platform with real-time market data, advanced analytics, and social trading features.",
    challenge: "Deliver sub-second trade execution with advanced charting and social features for 50K+ active users",
    results: [
      { metric: "Active Users", value: "75K", improvement: "+150%" },
      { metric: "Trade Volume", value: "$12M", improvement: "Monthly" },
      { metric: "App Rating", value: "4.8/5", improvement: "App Store" }
    ],
    technologies: ["React Native", "WebSocket", "Redis", "PostgreSQL", "AWS"],
    icon: Smartphone,
    timeline: "11 months"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Success Stories & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects, measurable results. See how we've helped businesses transform through innovative AI and software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:bg-card/60 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`portfolio-project-${project.id}`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{project.timeline}</div>
                  <div className="text-xs font-medium text-foreground">{project.industry}</div>
                </div>
              </div>

              {/* Project Title & Client */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{project.client}</p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Challenge */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 mb-4">
                <h4 className="text-xs font-semibold text-foreground mb-1">Challenge</h4>
                <p className="text-xs text-muted-foreground">{project.challenge}</p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {project.results?.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center bg-primary/5 rounded-lg p-2">
                    <div className="text-sm font-bold text-primary">{result.value}</div>
                    <div className="text-xs text-muted-foreground mb-1">{result.metric}</div>
                    <div className="text-xs text-accent font-medium">{result.improvement}</div>
                  </div>
                )) || null}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-border/20 text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                )) || null}
              </div>

              {/* View Case Study Button */}
              <Button
                variant="outline"
                className="w-full text-primary border-primary/20 hover:bg-primary/10 transition-all duration-300 group-hover:border-primary/40"
                data-testid={`button-view-case-study-${project.id}`}
              >
                View Case Study
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Every project starts with understanding your unique challenges. Let's discuss how we can deliver similar results for your business.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              data-testid="button-start-project-portfolio"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
