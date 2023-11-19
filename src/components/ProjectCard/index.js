import "./index.css";

const ProjectCard = (props) => {
  const { projectCardDetails } = props;
  const { name, imageUrl, link } = projectCardDetails;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="card-link">
      <li className="list-container">
        <img src={imageUrl} alt={name} className="project-image" />
        <h1 className="project-name">{name}</h1>
      </li>
    </a>
  );
};

export default ProjectCard;
