import { Download, Calendar, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const stats = [
    { value: "3+", label: "Projects Completed" },
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Dedication" },
  ];

  const handleDownloadResume = () => {
    // Create a placeholder for resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pravin_Garje_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-2xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden glass neon-border">
                <img
                  src={profileImage}
                  alt="Pravin Garje"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap size={20} />
                    <span className="font-medium">BTech Student</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin size={16} />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Pravin Garje</span>, 
                a passionate BTech student specializing in Web Development. I love solving 
                complex problems and creating innovative solutions that make an impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech began when I built my first website, and since then 
                I've been obsessed with creating seamless digital experiences. I believe 
                in writing clean, efficient code and constantly learning new technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying outdoor activities.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass p-4 rounded-xl">
                <Calendar className="text-primary mb-2" size={20} />
                <p className="text-sm text-muted-foreground">Available for</p>
                <p className="font-semibold">Internships & Projects</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <GraduationCap className="text-secondary mb-2" size={20} />
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-semibold">BTech (Ongoing)</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-lg transition-all duration-300 text-primary-foreground px-8 py-6 text-lg font-semibold mt-6"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl text-center group hover:neon-border transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
