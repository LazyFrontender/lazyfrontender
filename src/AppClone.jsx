//import components
import { Content } from './components/Content';
import './components/content.css';
// images
const images = [
  { url: 'https://robohash.org/', clsName: 'zoom-in' },
  { url: 'https://robohash.org/', clsName: 'zoom-out' },
  { url: 'https://robohash.org/', clsName: 'fade-in-up' },
  { url: 'https://robohash.org/', clsName: 'fade-in-out' },
  { url: 'https://robohash.org/', clsName: 'fade-up-right' },
  { url: 'https://robohash.org/', clsName: 'fade-up-left' },
  { url: 'https://robohash.org/', clsName: 'fade-down-right' },
  { url: 'https://robohash.org/', clsName: 'fade-down-left' },
  { url: 'https://robohash.org/', clsName: 'flip-left' },
  { url: 'https://robohash.org/', clsName: 'flip-right' },
];

export const AppClone = () => {
  return (
    <div>
      {images.map((image, index) => {
        return (
          <Content
            key={index}
            url={image.url + index}
            clsName={image.clsName}
          />
        );
      })}
    </div>
  );
};
