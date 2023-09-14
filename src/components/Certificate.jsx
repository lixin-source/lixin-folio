import PropTypes from 'prop-types';
import '../App.css';

const Certificate = ({ img, link, title, date}) => {

    return (
      <div className="cert-card">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={title} className="cert-card-img" />
        <div className="cert-card-content">
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
        </a>
      </div>
    );
  };
  
    Certificate.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    };


  export default Certificate;