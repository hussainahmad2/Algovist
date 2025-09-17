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
  const cardSize = isLeadership ? "w-32 h-32" : "w-24 h-24";
  const textSize = isLeadership ? "text-2xl" : "text-lg";
  const roleSize = isLeadership ? "mb-4" : "mb-2 text-sm";

  return (
    <motion.div
      className="glass-card rounded-2xl p-8 text-center hover:glow-effect transition-all duration-500 hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      data-testid={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`${cardSize} mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/30 group-hover:ring-accent/50 transition-all duration-300`}>
        {member.image ? (
          <img 
            src={member.image} 
            alt={`${member.name} - ${member.role}`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <User className="w-1/2 h-1/2 text-muted-foreground" />
          </div>
        )}
      </div>
      <h4 className={`${textSize} font-bold text-foreground mb-2`}>{member.name}</h4>
      <p className={`text-accent font-semibold ${roleSize}`}>{member.role}</p>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {member.description}
      </p>
      {isLeadership && (
        <div className="flex justify-center space-x-4 mt-6">
          <a 
            href="#" 
            className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            data-testid={`linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            data-testid={`twitter-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-card/50">
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
              Our Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the exceptional professionals driving innovation and excellence at Algovist
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <TeamMember key={member.name} member={member} isLeadership={true} />
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Technical Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalTeam.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
