import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ListItem = ({ title, content, img, date, location}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState);
  };

  const parsedContent = content.split('.').filter(sentence => sentence.trim() !== '.');

  return (
    <div className="list-item">
      <div className="item-header" onClick={toggleExpansion}>
        <img src={img}/>
        <h4>{title}</h4>
        {/* <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>▼</span> */}
      </div>
      {isExpanded && (
        <div className="item-content">
          <div className='itemContentLine'>
            <h4>{date}</h4>
            <h4>{location}</h4>
          </div>
          <ul>
            {parsedContent.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default ListItem;
