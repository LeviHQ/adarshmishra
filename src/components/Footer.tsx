import { Bug, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Bug className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold">QA<span className="text-primary">Portfolio</span></span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and a passion for quality
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Code-By-Adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-jayprakash-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:adarshmishra70931@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
