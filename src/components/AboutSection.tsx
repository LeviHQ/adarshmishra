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
                I'm a final-year BSc Computer Science student with a focused interest in 
                <span className="text-foreground font-medium"> Software Testing and Quality Assurance</span>. 
                I believe that quality is not an afterthought—it should be built into every line of code.
              </p>
              <p>
                My approach to testing combines methodical manual testing with automation to ensure 
                comprehensive coverage. I've worked with Selenium WebDriver, Postman for API testing, 
                and have hands-on experience creating test documentation that follows industry standards.
              </p>
              <p>
                I'm actively seeking 
                <span className="text-foreground font-medium"> fresher to junior-level roles </span> 
                in Software Testing, QA Engineering, or SDET positions where I can contribute to 
                delivering reliable software while growing my expertise.
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
