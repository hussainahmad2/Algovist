import { motion } from "framer-motion";
import { ArrowRight, Brain, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedProjectSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-card/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                Featured Project
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              SmartPredict AI
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              <span className="text-accent font-semibold">fuses advanced machine learning, real-time analytics, and intelligent automation</span> into a revolutionary business intelligence platform that transforms how companies make strategic decisions.
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 mb-8">
              <p className="text-foreground mb-4">
                Enhanced with cutting-edge AI algorithms and predictive modeling capabilities that deliver:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  95% accuracy in demand forecasting across multiple industries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Real-time data processing of 1M+ transactions per minute
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Automated insights generation reducing analysis time by 80%
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <p className="text-foreground font-semibold">
                A tournament-ready AI platform that gained recognition from Fortune 500 companies worldwide, processing over $500M in business decisions monthly.
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xl font-bold text-foreground">300%</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xl font-bold text-foreground">#1</div>
                <div className="text-sm text-muted-foreground">AI Innovation</div>
              </div>
            </div>

            <Button
              onClick={scrollToPortfolio}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 group"
              data-testid="button-view-case-study"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Project Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Project Card */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/20 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">SmartPredict AI</h3>
                  <p className="text-muted-foreground">Next-Generation Business Intelligence</p>
                </div>
                
                {/* Simulated Dashboard */}
                <div className="bg-card/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-semibold text-foreground">Real-time Analytics</div>
                    <div className="text-sm text-accent">Live</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Prediction Accuracy</span>
                      <span className="text-xs font-semibold text-primary">95.7%</span>
                    </div>
                    <div className="w-full bg-border/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '95.7%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/30 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-foreground">1.2M</div>
                    <div className="text-xs text-muted-foreground">Transactions/min</div>
                  </div>
                  <div className="bg-card/30 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-foreground">$500M</div>
                    <div className="text-xs text-muted-foreground">Decisions/month</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Brain className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}