import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "WheelsHub - Car Rental",
      description: "A modern car rental website with sleek UI, responsive design, and smooth animations. Built with pure HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://pravin0415.github.io/wheelsHub/",
      githubUrl: "https://github.com/pravin0415",
      color: "primary",
    },
    {
      title: "CentiSage - AI Chatbot",
      description: "An intelligent AI chatbot built with Python and advanced NLP libraries. Features natural conversation flow and smart responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["Python", "AI", "NLP", "Streamlit"],
      liveUrl: "https://centisage.streamlit.app",
      githubUrl: "https://github.com/pravin0415",
      color: "secondary",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure checkout functionality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/pravin0415",
      color: "accent",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:neon-border transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.color === "primary"
                          ? "bg-primary/20 text-primary"
                          : project.color === "secondary"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Play size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/50 hover:border-primary hover:text-primary"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8"
            asChild
          >
            <a href="https://github.com/pravin0415" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
