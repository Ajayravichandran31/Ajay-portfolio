function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "E.G.S. Pillay Engineering College",
      duration: "2023 – 2027",
      description:
        "Currently pursuing my Bachelor's degree in Information Technology with a focus on software development, web technologies, databases, and problem solving.",
    },
    {
      degree: "Senior School Certificate Examination (Class XII)",
      institution: "Vivekanandam Vidyashram, Thiruvarur",
      duration: "2023",
      description:
        "Completed Class XII under the CBSE board with Science (PCMB) stream. Percentage: 63.2%.",
    },
    {
      degree: "Secondary School Examination (Class X)",
      institution: "SRM Public School, Park Street, Thuraiyur, Trichy",
      duration: "2021",
      description:
        "Completed Class X under the CBSE board. Percentage: 74.2%.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">

        <p className="section-label">EDUCATION</p>

        <h2>My academic journey.</h2>

        <div className="education-grid">
          {education.map((item) => (
            <div className="education-card" key={item.degree}>

              <h3>{item.degree}</h3>

              <p className="education-college">
                {item.institution}
              </p>

              <p className="education-duration">
                {item.duration}
              </p>

              <p className="education-description">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;