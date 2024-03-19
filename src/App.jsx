import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { Helmet } from 'react-helmet';

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Javohirs blog</title>
      </Helmet>

      <h2
        className="gradient-text zoom-in"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        Coming
      </h2>
      <h2
        className="gradient-text zoom-in"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        Soon...
      </h2>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
