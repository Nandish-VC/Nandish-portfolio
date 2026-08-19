import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      image: "/e-commerece.webp",
      description:
        "A clean and modern e-commerce website designed for a smooth shopping experience.",
      tags: ["React", "Node.js"],
      liveDemo: "#",
      github: "#",
    },

    {
      title: "Weather App",
      image: "/weather_app.png",
      description:
        "A modern weather application that displays weather information using an API.",
      tags: ["React", "API"],
      liveDemo: "#",
      github: "#",
    },

    {
      title: "Todo App",
      image: "/todo-app.png",
      description:
        "A simple and clean task management application for organizing daily tasks.",
      tags: ["React", "JavaScript"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="project-section"
    >
      <div className="section-container">

        <h2>My Projects</h2>

        <div className="project-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
                />
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map(
                  (tag) => (
                    <span
                      className="tag"
                      key={tag}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="project-links">

                <a
                  href={project.liveDemo}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;