import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Web Developer", "BTech Student", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(() => {
      if (!isDeleting) {
        if (charIndex <= currentTitle.length) {
          setDisplayText(currentTitle.slice(0, charIndex));
          charIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentTitle.slice(0, charIndex - 1));
          charIndex--;
        } else {
          isDeleting = false;
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          clearInterval(typeEffect);
        }
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in tracking-widest uppercase text-sm">
              Welcome to my portfolio
            </p>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in stagger-1">
              Hi, I'm{" "}
              <span className="gradient-text">Pravin Garje</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-body text-muted-foreground mb-6 h-12 animate-fade-in stagger-2">
              <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-in stagger-3 leading-relaxed">
              Creating digital experiences that matter. Passionate about building
              innovative solutions and pushing the boundaries of web development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in stagger-4">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-lg transition-all duration-300 text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg font-semibold"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start animate-fade-in stagger-5">
              <a
                href="https://github.com/pravin0415"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/garjepravin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:pravinajinathgarje132@gmail.com"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-fade-in stagger-3">
            <div className="relative">
              {/* Animated Rings */}
              <div className="absolute inset-0 -m-8">
                <div className="w-full h-full rounded-full border-2 border-primary/30 animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 -m-16">
                <div className="w-full h-full rounded-full border border-secondary/20 animate-rotate-slow" />
              </div>
              
              {/* Profile Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden neon-border animate-float">
                <img
                  src={profileImage}
                  alt="Pravin Garje"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-sm text-muted-foreground">Scroll down</span>
        <ChevronDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default Hero;
