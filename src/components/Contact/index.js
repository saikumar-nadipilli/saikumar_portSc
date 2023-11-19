import "./index.css";

const Contact = () => (
  <div className="contact-container">
    <div className="link-container">
      <a
        href="mailto:nadipillisaikumar123@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image-link">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698944942/Portfolio/email_pkkhmh.png"
            alt="email"
            className="image-size"
          />
          <p className="link">nadipillisaikuma123@gmail.com</p>
        </div>
      </a>
    </div>
    <div className="link-container">
      <a
        href="https://github.com/saikumar-nadipilli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image-link">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698944941/Portfolio/github3_j5krox.png"
            alt="github"
            className="image-size"
          />
          <p className="link">github.com/saikumar-nadipilli</p>
        </div>
      </a>
    </div>
    <div className="link-container">
      <a
        href="https://www.linkedin.com/in/nadipilli-saikumar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image-link">
          <img
            src="https://res.cloudinary.com/db2rwgh5v/image/upload/v1698944941/Portfolio/l_fanqqf.png"
            alt="linkedin"
            className="image-size"
          />
          <p className="link">linkedin.com/in/nadipilli-saikumar/</p>
        </div>
      </a>
    </div>
  </div>
);

export default Contact;
