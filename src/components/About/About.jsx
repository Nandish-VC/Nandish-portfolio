import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="section-container">

        <h2>About Me</h2>

        <div className="about-content">

          <figure className="profile-figure">
            <img
              src="/Nandish passport.jpeg"
              alt="Nandish, web developer"
              loading="lazy"
            />

            <figcaption>
              Nandish - Web Developer
            </figcaption>
          </figure>

          <div className="about-text">

            <p>
              I love building things on the web.
              Currently learning HTML, CSS,
              JavaScript and React.
            </p>

            <p>
              I'm passionate about creating
              clean, responsive and interactive
              websites that provide a great
              user experience.
            </p>

            <p>
              My goal is to continuously improve
              my development skills and build
              real-world projects that solve
              useful problems.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;