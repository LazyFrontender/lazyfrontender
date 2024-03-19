// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';



import './content.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export const Content = ({ url, clsName }) => {
  // aos initialization
  useEffect(() => {
    AOS.init();
  }, []);
  //   aos
  return (
    <div className={`content ${clsName}`} data-aos={clsName}>
      <img src={url} alt="" />
    </div>
  );
};

Content.propTypes = {
  url: PropTypes.string.isRequired,
  clsName: PropTypes.string.isRequired,
};
