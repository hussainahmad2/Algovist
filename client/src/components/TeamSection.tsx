import { motion } from "framer-motion";
import { Linkedin, Twitter, User } from "lucide-react";
import ahsanImage from "@assets/8_1758097630328.jpg";
import hammadImage from "@assets/5_1758097630329.jpg";
import anasImage from "@assets/6_1758097630327.jpg";
import ashirImage from "@assets/7_1758097630328.jpg";

const leadership = [
  {
    name: "Ahsan Nawaz",
    role: "Chief Executive Officer",
    image: ahsanImage,
    description: "Visionary leader with extensive experience in tech innovation and business strategy. Ahsan drives the company's strategic direction and ensures Algovist remains at the cutting edge of AI and automation technologies."
  },
  {
    name: "Hussain Ahmad Bilal",
    role: "Chief Operating Officer",
    image: null,
    description: "Operations excellence expert focused on streamlining processes and driving operational efficiency. Hussain oversees day-to-day operations and ensures smooth execution across all business units and projects."
  }
];

const technicalTeam = [
  {
    name: "Hammad Ul Hassan",
    role: "Head of Development",
    image: hammadImage,
    description: "Senior full-stack developer leading the development team and architecting robust, scalable solutions using cutting-edge technologies and best practices."
  },
  {
    name: "Malik Bilal Hussain",
    role: "Machine Learning Specialist",
    image: null,
    description: "AI and machine learning expert developing sophisticated models and algorithms that power intelligent automation and predictive analytics solutions for clients."
  },
  {
    name: "Anas Khan",
    role: "UI/UX Designer",
    image: anasImage,
    description: "Creative design expert crafting intuitive user experiences and stunning interfaces that combine aesthetic appeal with functional excellence."
  },
  {
    name: "Ashir Aziz Khan",
    role: "Social Media Manager",
    image: ashirImage,
    description: "Digital marketing strategist and social media expert building strong brand presence and fostering engaged communities across multiple social platforms."
  }
];

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string | null;
    description: string;
  };
  isLeadership?: boolean;
}

function TeamMember({ member, isLeadership = false }: TeamMemberProps) {
  return (
    <motion.div
      className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:bg-card/60 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      data-testid={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`${isLeadership ? 'w-20 h-20' : 'w-16 h-16'} flex-shrink-0 rounded-lg overflow-hidden border border-border/20`}>
          {member.image ? (
            <img 
              src={member.image} 
              alt={`${member.name} - ${member.role}`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <User className="w-1/2 h-1/2 text-muted-foreground" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={`${isLeadership ? 'text-xl' : 'text-lg'} font-semibold text-foreground mb-1`}>
            {member.name}
          </h4>
          <p className="text-primary font-medium mb-3 text-sm">
            {member.role}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {member.description}
          </p>
          
          {isLeadership && (
            <div className="flex space-x-3 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                data-testid={`linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                data-testid={`twitter-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-20 relative bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented professionals behind Algovist's innovative AI solutions and exceptional client results
          </p>
        </motion.div>

        {/* Leadership Team */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
              Leadership Team
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((member) => (
                <TeamMember key={member.name} member={member} isLeadership={true} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <div className="w-1 h-6 bg-accent rounded-full mr-3"></div>
              Technical Team
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalTeam.map((member) => (
                <TeamMember key={member.name} member={member} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to work with our experienced team on your next project?
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            data-testid="button-contact-team"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
