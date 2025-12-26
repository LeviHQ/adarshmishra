import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Code2, CheckCircle2 } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Detail-Oriented',
    description: 'Systematic approach to finding edge cases and potential failures.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Analytical mindset for root cause analysis and debugging.',
  },
  {
    icon: Code2,
    title: 'Tech Enthusiast',
    description: 'Constantly learning new testing tools and automation frameworks.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Focused',
    description: 'Committed to delivering reliable, well-tested software.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-medium">CS Undergraduate from Maharashtra, India</span>, 
                skilled in Manual Testing & learning Automation to become a QA Engineer. 
                I'm also the open-source project owner of <span className="text-primary font-medium">Mail Karo</span> - an AI-powered email automation tool.
              </p>
              <p>
                I'm proficient in <span className="text-foreground font-medium">Manual Testing, Automation Testing, Java, Git & GitHub, Maven, MySQL, Selenium, TestNG, POM, and Postman</span>. 
                Currently building skills in Playwright, Jenkins, Appium, Rest-Assured, JUnit, BDD (Cucumber), and Jira.
              </p>
              <p>
                <span className="text-primary font-medium">Postman API Fundamentals – Student Expert</span> certified. 
                I'm actively seeking fresher to junior-level roles in Software Testing, QA Engineering, or SDET positions 
                where I can contribute to delivering reliable software.
              </p>
              <p className="text-foreground font-medium italic">
                ⚡ Believe In Yourself.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="skill-card group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
