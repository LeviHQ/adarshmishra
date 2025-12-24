import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Star, GitFork, ExternalLink, Code2, TestTube2, FileCode } from 'lucide-react';

const repositories = [
  {
    name: 'selenium-automation-framework',
    description: 'Production-ready Selenium WebDriver automation framework with TestNG, POM pattern, and Excel-driven testing.',
    language: 'Java',
    stars: 12,
    forks: 5,
    topics: ['selenium', 'testng', 'automation', 'java'],
  },
  {
    name: 'postman-api-collection',
    description: 'Comprehensive API test collection for RESTful services with pre-request scripts and environment variables.',
    language: 'JSON',
    stars: 8,
    forks: 3,
    topics: ['postman', 'api-testing', 'newman', 'ci-cd'],
  },
  {
    name: 'manual-testing-docs',
    description: 'Test plan, test cases, RTM, and bug reports templates following IEEE standards for QA documentation.',
    language: 'Markdown',
    stars: 15,
    forks: 10,
    topics: ['testing', 'documentation', 'qa', 'templates'],
  },
];

const stats = [
  { label: 'Followers', value: '7' },
  { label: 'Following', value: '1' },
  { label: 'Repositories', value: '10+' },
];

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="github" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">GitHub & Open Source</h2>
          <p className="section-subtitle mx-auto">
            Building in public and contributing to the testing community through open-source projects
          </p>
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="skill-card card-glow mb-12 p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
                <Github className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">@Code-By-Adarsh</h3>
                <p className="text-muted-foreground">CS Undergraduate • QA Engineer • Open Source Project Owner</p>
              </div>
            </div>
            <a
              href="https://github.com/Code-By-Adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="w-4 h-4" />
              View Profile
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Repositories */}
        <h3 className="text-xl font-semibold mb-6">Featured Repositories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/Code-By-Adarsh/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
              className="skill-card group block"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <FileCode className="w-5 h-5" />
                  <span className="font-semibold group-hover:underline">{repo.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{repo.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
