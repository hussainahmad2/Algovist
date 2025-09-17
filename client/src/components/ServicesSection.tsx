import { motion } from "framer-motion";
import { Brain, Cloud, Code, Check } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advanced AI solutions including predictive analytics, natural language processing, and computer vision to automate and optimize your business processes.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"],
    gradient: "from-primary to-accent"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to ensure your applications run efficiently and securely in the cloud.",
    features: ["Cloud Migration", "Infrastructure as Code", "DevOps Automation", "Security & Compliance"],
    gradient: "from-accent to-primary"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Full-stack web and mobile application development using modern technologies and frameworks for optimal performance.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"],
    gradient: "from-primary to-accent"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business through cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-2xl p-8 hover:glow-effect transition-all duration-500 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
