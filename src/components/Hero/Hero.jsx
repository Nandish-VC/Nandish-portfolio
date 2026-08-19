import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [greeting, setGreeting] = useState(
    "Hello"
  );

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <section
      className="hero-section"
      id="hero"
    >
      <div className="hero-content">

        <p className="hero-intro">
          Welcome to my portfolio
        </p>

        <h1>
          {greeting}, I'm{" "}
          <span>Nandish</span> 👋
        </h1>

        <p className="tagline">
          I'm a passionate web developer
          from Bengaluru
        </p>

        <p className="hero-description">
          I love creating modern, responsive
          and user-friendly web applications
          using React, JavaScript and modern
          web technologies.
        </p>

        <div className="hero-button">
          <a
            href="#projects"
            className="btn primary-hero-btn"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="btn secondary-hero-btn"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;