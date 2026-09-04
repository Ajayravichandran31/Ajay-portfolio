import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <section id="home" className="hero">
          <div className="hero-content">

            <p className="hero-greeting">Hi, I'm</p>

            <h1>
              Ajay <span>R.</span>
            </h1>

            <h2>Java & Full Stack Developer</h2>

            <p className="hero-description">
              I build modern and scalable web applications using
              Java, Spring Boot, React and MySQL.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>MySQL</span>
            </div>

          </div>
        </section>

        <About />
        <Skills />
        <Projects />

      </main>
    </>
  );
}

export default App;