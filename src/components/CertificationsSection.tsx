import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'Postman Student Expert',
    issuer: 'Postman',
    date: '2024',
    credentialId: 'PSE-XXXXX',
    description: 'Demonstrated proficiency in API testing, collections, environments, and Postman workflows.',
    verifyLink: 'https://api.badgr.io/public/assertions/',
    skills: ['API Testing', 'Collections', 'Environments', 'Newman'],
  },
  {
    title: 'ISTQB Foundation Level',
    issuer: 'ISTQB',
    date: '2024',
    credentialId: 'In Progress',
    description: 'Studying for the internationally recognized software testing certification covering testing fundamentals.',
    verifyLink: null,
    skills: ['Test Design', 'Test Management', 'Testing Fundamentals'],
  },
  {
    title: 'Selenium WebDriver with Java',
    issuer: 'Udemy',
    date: '2023',
    credentialId: 'UC-XXXXX',
    description: 'Comprehensive course covering Selenium automation, TestNG, and framework development.',
    verifyLink: 'https://www.udemy.com/certificate/',
    skills: ['Selenium', 'TestNG', 'Java', 'Framework Design'],
  },
  {
    title: 'Software Testing Fundamentals',
    issuer: 'LinkedIn Learning',
    date: '2023',
    credentialId: 'SWE-XXXXX',
    description: 'Foundational course on software testing methodologies, test case design, and QA best practices.',
    verifyLink: 'https://www.linkedin.com/learning/certificates/',
    skills: ['Test Planning', 'Test Cases', 'QA Process'],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications & Badges</h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and validation of testing skills through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="skill-card group relative overflow-hidden"
            >
              {/* Badge Icon */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="pr-20">
                {/* Issuer & Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-primary">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">{cert.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential & Verify Link */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </span>
                  {cert.verifyLink ? (
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Verify
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground italic">In Progress</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
