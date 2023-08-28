import PropTypes from 'prop-types';
import '../App.css';

function MediaCard({ link, img, event, date, title, descrip }) {
  return (
    <div className="media-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={event} className="media-card-img" />
      <div className="media-card-content">
        <div className='mediaCardTopLine'>
            <p>{event}</p>
            <span className='mediaCircle'></span>
            <p>{date}</p>
        </div>
        <h2>{title}</h2>
        <p>{descrip}</p>
      </div>
      </a>
    </div>
  );
}

MediaCard.propTypes = {
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
};

export default MediaCard;
