function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <a href="#home" className="footer-logo">
              AJAY<span>.</span>
            </a>
            <p className="footer-text">
              Java & Full Stack Developer
            </p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Ajayravichandran31"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-r-9a9391362/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/_ajay_R_/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>

            <a
              href="https://www.hackerrank.com/profile/ajayravichandra4"
              target="_blank"
              rel="noreferrer"
            >
              HackerRank
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Ajay R. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;