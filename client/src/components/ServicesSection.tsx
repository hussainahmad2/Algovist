import { motion } from "framer-motion";
import { Brain, Smartphone, Globe, Code, Database, Cog } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advanced AI solutions including predictive analytics, natural language processing, and computer vision that drive real business outcomes.",
    keyPoints: ["Predictive Analytics", "NLP & Computer Vision", "Deep Learning Models", "AI Automation"]
  },
  {
    icon: Globe,
    title: "Web Development", 
    description: "Custom web-based solutions with advanced technologies, responsive design, and scalable architecture for modern businesses.",
    keyPoints: ["Responsive Web Apps", "E-commerce Platforms", "Progressive Web Apps", "Custom Frontends"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android app development with cross-platform solutions that deliver exceptional user experiences.",
    keyPoints: ["Native iOS & Android", "Cross-Platform Apps", "Mobile UI/UX", "App Store Deployment"]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-cycle development from design to maintenance, delivering tailored software solutions that fit your business needs.",
    keyPoints: ["Full-Stack Development", "System Architecture", "API Integration", "Quality Assurance"]
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
    keyPoints: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Custom Dashboards"]
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline business operations with intelligent automation solutions that reduce costs and improve efficiency.",
    keyPoints: ["Workflow Automation", "RPA Solutions", "Integration Services", "Process Optimization"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Positioning Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            We're an AI Powerhouse
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Delivering comprehensive AI and software development solutions that transform businesses across industries. From intelligent automation to custom applications, we build technology that drives real results.
            </p>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">AI Solutions</div>
                  <div className="text-sm text-muted-foreground">Machine Learning & Automation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">Custom Development</div>
                  <div className="text-sm text-muted-foreground">Web, Mobile & Software</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Data Analytics</div>
                  <div className="text-sm text-muted-foreground">Business Intelligence & Insights</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.keyPoints?.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm text-muted-foreground flex items-start">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {point}
                  </li>
                )) || null}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with AI and custom software solutions?
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            data-testid="button-get-started-services"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
