function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <p className="section-label">CONTACT</p>

        <h2>Let's connect.</h2>

        <p className="contact-intro">
          I'm open to internship opportunities, collaborations, and
          interesting projects. Feel free to get in touch.
        </p>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:ajayravichandran31@gmail.com">
                ajayravichandran31@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/ajay-r-9a9391362/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-item">
              <h3>GitHub</h3>
              <a
                href="https://github.com/Ajayravichandran31"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Ajayravichandran31
              </a>
            </div>

            <div className="contact-item">
              <h3>LeetCode</h3>
              <a
                href="https://leetcode.com/u/_ajay_R_/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode Profile
              </a>
            </div>

            <div className="contact-item">
              <h3>HackerRank</h3>
              <a
                href="https://www.hackerrank.com/profile/ajayravichandra4"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank Profile
              </a>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;