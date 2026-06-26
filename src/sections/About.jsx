import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Detail Oriented",
    description:
      "Meticulous attention to every line of code and every pixel of the UI.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Breaking down complex challenges into elegant, efficient solutions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working closely with teams and contributing as a technical volunteer.",
  },
  {
    icon: Lightbulb,
    title: "Adaptability",
    description:
      "Continuously learning and adapting to new technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering ideas
              <span className="font-serif italic font-normal text-white">
                {" "}
                into reality.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm <strong className="text-foreground">Parth Kaushik</strong>, a passionate software engineer
                and Computer Science student at Chandigarh University. My journey
                into tech began with a curiosity for how software shapes the world,
                which evolved into a deep love for building web applications.
              </p>
              <p>
                I work with C++, HTML/CSS, JavaScript, React, Vue.js, and SQL, building
                everything from interactive web platforms to algorithm visualizers.
                I enjoy solving real-world problems through clean, efficient code.
              </p>
              <p>
                Beyond code, I organize coding workshops for first-year students,
                volunteer at hackathons, and continuously learn through certifications
                in Cloud Computing, NLP, and Databases.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Committed to utilizing technical expertise in a fast-paced work
                environment to create cutting-edge solutions and enhance the
                success of digital experiences through continuous learning."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
