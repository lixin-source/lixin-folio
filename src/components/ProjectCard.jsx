import PropTypes from 'prop-types';
import '../App.css';

const ProjectCard = ({ title, content, img, techstack, github, demo }) => {
  const hasGitHub = Boolean(github);
  const hasDemo = Boolean(demo);
  const hasTechStack = Boolean(techstack);

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>{content}</p>
      {hasTechStack && <p><em>{techstack}</em></p>}
      <div className="buttons">
        {hasGitHub && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {hasDemo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  techstack: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
};

export default ProjectCard;
