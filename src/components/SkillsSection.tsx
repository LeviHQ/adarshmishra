import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ClipboardCheck, 
  Bot, 
  Globe, 
  Wrench, 
  Code, 
  FileSearch,
  TestTube2,
  Database,
  GitBranch,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Manual Testing',
    icon: ClipboardCheck,
    skills: [
      'Test Case Design',
      'Test Plan Creation',
      'Bug Reporting (JIRA)',
      'Regression Testing',
      'Smoke & Sanity Testing',
      'Exploratory Testing',
    ],
  },
  {
    title: 'Automation Testing',
    icon: Bot,
    skills: [
      'Selenium WebDriver',
      'TestNG Framework',
      'Page Object Model',
      'Data-Driven Testing',
      'Cross-Browser Testing',
      'CI/CD Integration',
    ],
  },
  {
    title: 'API Testing',
    icon: Globe,
    skills: [
      'Postman',
      'REST API Testing',
      'JSON/XML Validation',
      'API Documentation',
      'Status Code Verification',
      'Collection Runner',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      'JIRA',
      'Git & GitHub',
      'VS Code',
      'Eclipse IDE',
      'Chrome DevTools',
      'Maven',
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    skills: [
      'Java (Core)',
      'Python Basics',
      'SQL Queries',
      'HTML/CSS',
      'JavaScript Basics',
      'Shell Scripting',
    ],
  },
  {
    title: 'Testing Concepts',
    icon: FileSearch,
    skills: [
      'SDLC & STLC',
      'Agile/Scrum',
      'Black Box Testing',
      'White Box Testing',
      'Defect Life Cycle',
      'Test Metrics',
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for ensuring software quality across the development lifecycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="skill-card border-gradient"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * categoryIndex + 0.05 * skillIndex }}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-md text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
