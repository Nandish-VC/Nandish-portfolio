import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 90,
    },
    {
      name: "CSS",
      level: 85,
    },
    {
      name: "JavaScript",
      level: 80,
    },
    {
      name: "React",
      level: 80,
    },
    {
      name: "Python",
      level: 70,
    },
    {
      name: "C",
      level: 60,
    },
  ];

  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="section-container">

        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className="skill-item"
              key={skill.name}
            >
              <div className="skill-header">
                <span>
                  {skill.name}
                </span>

                <span>
                  {skill.level}%
                </span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width:
                      `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;