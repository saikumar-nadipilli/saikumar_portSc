import "./index.css";

const About = () => (
  <div className="home-container">
    <div className="user-info-container">
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 className="user-name">Sai Kumar Nadipilli</h1>
      <p className="user-designation">Aspiring MERN Stack Developer</p>
    </div>
    <div className="about-container">
      <h1 className="me">About Me</h1>
      <p className="about-des">
        I have a bachelor&apos;s degree in Electronics and Communication
        Engineering. Before I decided to become a web developer, I tried various
        professions and realized that my interest is only in computers,
        specifically colours and web development. Since then I&apos;ve been
        building websites everyday. I found my happiness in making websites and
        love to develop responsive and engaging user interfaces! and I&apos;m
        always up for learning new technologies and getting better at it on the
        way.
      </p>

      <h1 className="me">Skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857321/Portfolio/html_5_dkervp.png"
            alt="Html logo"
            className="image-logo"
          />
          <p className="skill-name">HTML 5</p>
        </div>
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857317/Portfolio/css_tac4h4.png"
            alt="css logo"
            className="image-logo"
          />
          <p className="skill-name">CSS 3</p>
        </div>
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857316/Portfolio/bootstrap-5_zf9ifm.webp"
            alt="BootStrap logo"
            className="image-logo"
          />
          <p className="skill-name">BootStrap</p>
        </div>
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857316/Portfolio/python_t7patk.png"
            alt="Python logo"
            className="image-logo"
          />
          <p className="skill-name">Python</p>
        </div>
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698925491/Portfolio/js_zdt5ey.webp"
            alt="JavaScript logo"
            className="image-logo"
          />
          <p className="skill-name">JavaScript</p>
        </div>
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857328/Portfolio/react_kc7jjt.png"
            alt="React JS logo"
            className="image-logo"
          />
          <p className="skill-name">React JS</p>
        </div>
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857316/Portfolio/sqlite_kynqg7.png"
            alt="SQL logo"
            className="image-logo"
          />
          <p className="skill-name">SQLite</p>
        </div>
        {/* <div className="skill-card">
         <img
           src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857322/Portfolio/node2_lsavk4.png"
           alt="Node JS logo"
           className="image-logo"
         />
         <p className="skill-name">Node JS</p>
       </div> */}
        {/* <div className="skill-card">
         <img
           src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857328/Portfolio/express_gzjdlm.png"
           alt="Express JS logo"
           className="image-logo"
         />
         <p className="skill-name">Express JS</p>
       </div> */}
        <div className="skill-card">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698857323/Portfolio/java_b0bvsa.png"
            alt="JAVA logo"
            className="image-logo"
          />
          <p className="skill-name">Java</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
