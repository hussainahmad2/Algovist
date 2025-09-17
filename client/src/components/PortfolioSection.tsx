import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Advanced analytics platform using machine learning to provide predictive insights and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Machine Learning", "React", "Python"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "Scalable Cloud Architecture",
    description: "Enterprise-grade cloud infrastructure with automated scaling and comprehensive monitoring solutions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["AWS", "Kubernetes", "Docker"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    title: "Cross-Platform Mobile App",
    description: "Feature-rich mobile application with real-time synchronization and intuitive user interface.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["React Native", "Firebase", "Node.js"],
    gradient: "from-primary/20 to-accent/20"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
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
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects and innovative solutions that have transformed businesses worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`portfolio-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${
                        tagIndex % 2 === 0 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-accent/20 text-accent'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  data-testid={`button-view-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
