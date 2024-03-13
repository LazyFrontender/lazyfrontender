import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1
        className="gradient-text zoom-in"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        Soon
      </h1>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
