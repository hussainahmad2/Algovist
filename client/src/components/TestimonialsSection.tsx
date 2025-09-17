import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechCorp Industries",
    content: "Algovist's AI solution transformed our data processing workflow. What used to take hours now completes in minutes with 95% accuracy. Their technical expertise is unmatched.",
    rating: 5,
    project: "Predictive Analytics Platform",
    results: "300% efficiency increase"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "Global Manufacturing Ltd",
    content: "The custom software Algovist built for our supply chain management has been a game-changer. Real-time insights and automated decision-making have saved us over $2M annually.",
    rating: 5,
    project: "Supply Chain Optimization",
    results: "$2M+ annual savings"
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Research Director",
    company: "MedTech Solutions",
    content: "Algovist's machine learning models for our medical diagnostics platform achieved 98% accuracy. Their team's deep understanding of AI applications in healthcare is exceptional.",
    rating: 5,
    project: "Medical AI Diagnostics",
    results: "98% diagnostic accuracy"
  },
  {
    id: 4,
    name: "James Patterson",
    role: "Head of Digital Innovation",
    company: "Financial Services Group",
    content: "Working with Algovist on our fraud detection system was outstanding. Their AI algorithms now catch 40% more fraudulent transactions while reducing false positives by 60%.",
    rating: 5,
    project: "AI Fraud Detection",
    results: "40% better fraud detection"
  }
];

const testimonialStats = [
  {
    number: "50+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies trust us"
  },
  {
    number: "95%",
    label: "Client Retention",
    description: "Long-term partnerships built on results"
  },
  {
    number: "$50M+",
    label: "Value Delivered",
    description: "Measurable business impact achieved"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-card/10 to-background">
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI solutions drive real business results for companies across industries
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonialStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card/30 backdrop-blur-sm border border-border/20 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:bg-card/60 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-primary/60" />
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.content}"
              </p>

              {/* Project Info */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold text-foreground">{testimonial.project}</div>
                    <div className="text-xs text-muted-foreground">Project Focus</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-accent">{testimonial.results}</div>
                    <div className="text-xs text-muted-foreground">Business Impact</div>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-primary font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss how our AI solutions can transform your business and deliver measurable results.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              data-testid="button-get-started-testimonials"
            >
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}