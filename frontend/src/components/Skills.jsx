function Skills() {
  const skillGroups = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Postman", "Maven"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="section-label">SKILLS</p>

        <h2>Technologies I work with.</h2>

        <p className="skills-intro">
          I use these technologies to build, test and manage modern web
          applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;