import { motion } from "framer-motion";
import { Bot, Cloud, Code } from "lucide-react";
import ParticleSystem from "./ParticleSystem";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Innovate.
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Automate.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Elevate.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Transforming businesses with AI-powered solutions, cutting-edge development, and innovative automation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect hover:scale-105 transition-all duration-300"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-300"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-3d relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="floating-element relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-96 h-96 mx-auto glass-card rounded-3xl p-8 glow-effect">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">AI-Powered Solutions</h3>
                  <p className="text-muted-foreground">Advanced machine learning algorithms driving innovation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute top-8 -right-8 z-0"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center opacity-80">
                <Cloud className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-8 z-0"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center opacity-60">
                <Code className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
