function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <p className="section-label">ABOUT ME</p>

        <h2>Turning ideas into practical web applications.</h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm Ajay R., a B.Tech Information Technology student
              and aspiring Java Full Stack Developer.
            </p>

            <p>
              I enjoy building web applications and learning how
              frontend, backend, databases and APIs work together
              to create complete software solutions.
            </p>

            <p>
              My current focus is on Java, Spring Boot, React and
              MySQL, while continuously improving my problem-solving
              and Data Structures & Algorithms skills.
            </p>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <h3>01</h3>
              <p>Backend Development</p>
              <span>Java & Spring Boot</span>
            </div>

            <div className="highlight-card">
              <h3>02</h3>
              <p>Frontend Development</p>
              <span>React & JavaScript</span>
            </div>

            <div className="highlight-card">
              <h3>03</h3>
              <p>Database Development</p>
              <span>MySQL & SQL</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;