import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Bot, Globe, FileText } from 'lucide-react';

const projects = [
  {
    type: 'AI SaaS Product',
    icon: Bot,
    title: 'Mail Karo - AI Email Automation',
    problem: 'Writing professional emails is time-consuming and many users struggle with email composition, tone, and structure.',
    solution: 'Built a self-made AI SaaS product that automates email writing, sending, and analysis using Gemini API. Open for contributions!',
    tools: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Email APIs'],
    tested: [
      'AI-powered email generation',
      'Email sending functionality',
      'Analysis and suggestions features',
      'User interface responsiveness',
    ],
    learning: 'Learned to integrate AI APIs, build end-to-end SaaS products, and manage open-source contributions from the community.',
    github: 'https://github.com/Code-By-Adarsh/Mail-Karo',
    demo: 'https://mail-karo.netlify.app',
  },
  {
    type: 'Automation Testing',
    icon: Bot,
    title: 'Selenium Automation Framework',
    problem: 'Manual regression testing was time-consuming and error-prone, taking hours per release cycle.',
    solution: 'Created collection of Selenium automation projects covering basic to advanced frameworks with TestNG and POM pattern.',
    tools: ['Selenium WebDriver', 'Java', 'TestNG', 'Maven', 'Page Object Model'],
    tested: [
      'User registration and login flows',
      'Product search and filtering',
      'Cart operations and checkout process',
      'Form validations and error handling',
    ],
    learning: 'Gained hands-on experience in designing scalable test frameworks using POM pattern and implementing data-driven testing.',
    github: 'https://github.com/Code-By-Adarsh/Automation-Testing-Projects',
    demo: null,
  },
  {
    type: 'API Testing',
    icon: Globe,
    title: 'API Testing with Postman & Rest Assured',
    problem: 'No structured approach to validate API endpoints, leading to inconsistent backend behavior.',
    solution: 'Created comprehensive API test collections with Postman and Java-based automation using Rest Assured with TestNG.',
    tools: ['Postman', 'Rest Assured', 'Java', 'TestNG', 'JSON Schema Validation'],
    tested: [
      'RESTful API CRUD operations',
      'Authentication and authorization endpoints',
      'Response time and performance benchmarks',
      'Negative testing and error handling',
    ],
    learning: 'Mastered API testing methodologies with both Postman collections and Java-based Rest Assured automation framework.',
    github: 'https://github.com/Code-By-Adarsh/Api-Testing-Learning',
    demo: null,
  },
  {
    type: 'Manual Testing',
    icon: FileText,
    title: 'Manual Testing Documentation',
    problem: 'Lack of standardized test documentation for E-commerce & Banking applications affecting coverage visibility.',
    solution: 'Developed comprehensive test artifacts including test plans, test cases, RTM, and bug reports following STLC methodology.',
    tools: ['MS Excel', 'Test Plans', 'Test Cases', 'Bug Reports', 'RTM'],
    tested: [
      'E-commerce platform workflows',
      'Banking application transactions',
      'UI/UX validation across modules',
      'Cross-browser compatibility testing',
    ],
    learning: 'Understood importance of detailed documentation in QA, learned to create professional test artifacts following industry standards.',
    github: 'https://github.com/Code-By-Adarsh/Manual-Testing-Projects',
    demo: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world testing projects demonstrating practical skills and systematic approach to quality assurance
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="project-card"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="badge mb-1">{project.type}</span>
                      <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Problem</h4>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 text-sm bg-secondary rounded-md font-mono text-muted-foreground">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* What Was Tested */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What Was Tested</h4>
                      <ul className="space-y-2">
                        {project.tested.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Learning */}
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Key Learning</h4>
                      <p className="text-sm text-muted-foreground">{project.learning}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
