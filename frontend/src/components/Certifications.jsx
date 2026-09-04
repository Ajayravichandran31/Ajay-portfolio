function Certifications() {
  const certifications = [
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      description:
        "Certificate demonstrating knowledge of Java programming fundamentals, including classes, data structures, inheritance, and exception handling.",
      link: "https://www.hackerrank.com/certificates/ae10045889a5",
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      description:
        "Certificate demonstrating knowledge of advanced SQL concepts including query optimization, data modeling, indexing, window functions, and pivots.",
      link: "https://www.hackerrank.com/certificates/2c9d108ed2d6",
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      description:
        "Certificate demonstrating knowledge of JavaScript concepts including functions, scope, inheritance, events, and error handling.",
      link: "https://www.hackerrank.com/certificates/ba18c9813db1",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">

        <p className="section-label">CERTIFICATIONS</p>

        <h2>Certifications I've earned.</h2>

        <p className="certifications-intro">
          Certifications that support my technical skills and continuous
          learning.
        </p>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <div
              className="certification-card"
              key={certificate.title}
            >
              <h3>{certificate.title}</h3>

              <p className="certification-issuer">
                {certificate.issuer}
              </p>

              <p className="certification-description">
                {certificate.description}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certification-button"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;