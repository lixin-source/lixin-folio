import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../App.css'; // Import your CSS file

const ListItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="list-item">
      <div className="item-header" onClick={toggleExpansion}>
        <h3>{title}</h3>
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>
      {isExpanded && <div className="item-content">{content}</div>}
    </div>
  );
};

// Prop validation using PropTypes
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ListItem;
