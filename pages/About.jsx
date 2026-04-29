import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="card">
        <h1>About Me</h1>
        <p>
          I am a passionate web developer 💻 skilled in React, JavaScript,
          HTML, and CSS.
        </p>

        <div className="skills">
          <span>⚛️ React</span>
          <span>🟨 JavaScript</span>
          <span>🌐 HTML</span>
          <span>🎨 CSS</span>
        </div>
      </div>
    </div>
  );
}

export default About;