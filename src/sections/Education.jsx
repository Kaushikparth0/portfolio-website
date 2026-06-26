import { GraduationCap, Award, Star } from "lucide-react";

const education = [
  {
    period: "2022 — 2026",
    degree: "Bachelor in Computer Science Engineering",
    institution: "Chandigarh University, Chandigarh",
    detail: "CGPA: 6.96",
    current: true,
    icon: GraduationCap,
  },
  {
    period: "2021 — 2022",
    degree: "Intermediate (XII)",
    institution: "Kendriya Vidyalaya No.1, Roorkee",
    detail: "",
    current: false,
    icon: GraduationCap,
  },
  {
    period: "2019 — 2020",
    degree: "Matriculation (CBSE)",
    institution: "Kendriya Vidyalaya No.1, Roorkee",
    detail: "",
    current: false,
    icon: GraduationCap,
  },
];

const certifications = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    icon: Award,
  },
  {
    name: "Natural Language Processing for Developers",
    issuer: "Infosys | Springboard",
    icon: Award,
  },
  {
    name: "Introduction to Relational Database",
    issuer: "IBM",
    icon: Award,
  },
];

const achievements = [
  "Organizer of coding workshops for first-year students to introduce them to programming concepts.",
  "Contributed as a technical volunteer in organizing inter-college hackathons and coding competitions.",
  "Front-End Web Development Bootcamp — Microsoft Learn Student Ambassador.",
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education &amp;{" "}
            <span className="font-serif italic font-normal text-white">
              Achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My academic journey, certifications, and milestones that have shaped
            my growth as a software engineer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-primary">Education</h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-8 animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                      {edu.current && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      )}
                    </div>
                    <div className="glass p-5 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500">
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                      <h4 className="text-lg font-semibold mt-1">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      {edu.detail && (
                        <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {edu.detail}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-primary">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="glass p-4 rounded-xl flex gap-3 items-start animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-primary">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in group"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-primary mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Highlight Card */}
            <div className="mt-8 glass p-6 rounded-2xl border border-primary/30 glow-border animate-fade-in animation-delay-400">
              <h4 className="font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["C++", "SQL", "HTML", "CSS", "Git"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "JavaScript", "Vue.js", "Bootstrap", "Express.js"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-surface text-muted-foreground text-sm rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
