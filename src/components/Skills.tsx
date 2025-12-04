import { Code, Database, Cpu, Globe, Palette, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "HTML5, CSS3, JavaScript, React",
      level: 90,
      color: "primary",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "SQL, PostgreSQL, MongoDB",
      level: 80,
      color: "secondary",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Java",
      description: "OOP, Data Structures, Algorithms",
      level: 75,
      color: "accent",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Python",
      description: "Core Python, Libraries, Automation",
      level: 85,
      color: "primary",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Figma, Responsive Design, Prototyping",
      level: 70,
      color: "secondary",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Problem Solving",
      description: "DSA, Competitive Programming",
      level: 80,
      color: "accent",
    },
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "Java", "SQL", "PostgreSQL", "Git", "Tailwind CSS",
    "Figma", "VS Code", "Linux", "REST APIs"
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl group hover:neon-border transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  skill.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : skill.color === "secondary"
                    ? "bg-secondary/20 text-secondary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                {skill.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground mb-6">{skill.description}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className={`font-semibold ${
                    skill.color === "primary"
                      ? "text-primary"
                      : skill.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      skill.color === "primary"
                        ? "bg-gradient-to-r from-primary to-primary/60"
                        : skill.color === "secondary"
                        ? "bg-gradient-to-r from-secondary to-secondary/60"
                        : "bg-gradient-to-r from-accent to-accent/60"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-8">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:neon-border hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
