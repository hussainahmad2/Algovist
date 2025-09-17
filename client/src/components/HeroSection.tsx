import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              AI & Software Development Company
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-normal mt-2">
                Algovist
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                As an AI & software development company, Algovist delivers tailored solutions for businesses across industries, earning our reputation as a true AI Powerhouse through cutting-edge machine learning, automation, and custom development services.
              </p>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 mb-8">
                <p className="text-base md:text-lg text-foreground font-semibold">
                  "Transforming businesses with AI-powered solutions, cutting-edge development, and innovative automation technologies that drive real business results."
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="px-12 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105"
                data-testid="button-book-meeting"
              >
                BOOK A MEETING!
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300"
                data-testid="button-view-services"
              >
                View Our Services
              </Button>
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground">
                Trusted by startups and enterprises since 2020 • Specialized expertise in AI, Fintech, and Custom Software Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
