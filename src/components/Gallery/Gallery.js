import { useState, useSelector, useDispatch } from 'react';

import Modal from './Modal';

import dummyData from './dummyData.json';
import classes from './Gallery.module.css';
import UploadImage from './UploadImage';

const Gallery = (props) => {
  // const dispatch = useDispatch();
  const [clickedImage, setClickedImage] = useState(null);
  const [imgAlt, setImgAlt] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  // const isToggled = useSelector((state) => state.auth.showUpload);

  const data = dummyData;
  let images = JSON.parse(localStorage.getItem('image') || '[]');

  const imagesArr = [...data, ...images];

  const handleClick = (img, i) => {
    setCurrentIndex(i);
    setClickedImage(img.src);
    setImgAlt(img.alt);
  };

  const rightHandler = () => {
    const totalLength = imagesArr.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = imagesArr[0].src;
      const newAlt = imagesArr[0].alt;
      setClickedImage(newUrl);
      setImgAlt(newAlt);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = imagesArr.filter((img) => {
      return imagesArr.indexOf(img) === newIndex;
    });
    const newItem = newUrl[0].src;
    const newAlt = newUrl[0].alt;
    setClickedImage(newItem);
    setImgAlt(newAlt);
    setCurrentIndex(newIndex);
  };
  const leftHandler = () => {
    const totalLength = imagesArr.length;

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = imagesArr[totalLength - 1].src;
      const newAlt = imagesArr[totalLength - 1].alt;
      console.log(newUrl, newAlt);

      setClickedImage(newUrl);
      setImgAlt(newAlt);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = imagesArr.filter((img) => {
      return imagesArr.indexOf(img) === newIndex;
    });
    const newItem = newUrl[0].src;
    const newAlt = newUrl[0].alt;
    setClickedImage(newItem);
    setImgAlt(newAlt);
    setCurrentIndex(newIndex);
  };

  const renderImg = images.map((img, i) => {
    // console.log(img, i);
    return (
      <div key={Math.random()}>
        <img
          id={i + 7}
          src={img.src}
          alt={img.alt}
          className={classes.hoverShadow}
          onClick={() => handleClick(img, i)}
        />
      </div>
    );
  });

  const renderDefaultImg = data.map((img, i) => {
    return (
      <div key={Math.random()}>
        <img
          id={i}
          src={img.src}
          alt={img.alt}
          className={classes.hoverShadow}
          onClick={() => handleClick(img, i)}
        />
      </div>
    );
  });
  // console.log(clickedImage);
  return (
    <div>
      {<UploadImage />}
      <div className={classes.container}>
        {renderImg}
        {renderDefaultImg}
      </div>
      {clickedImage && (
        <Modal
          clickedImage={clickedImage}
          imgAlt={imgAlt}
          leftHandler={leftHandler}
          rightHandler={rightHandler}
          setClickedImage={setClickedImage}
        />
      )}
    </div>
  );
};
export default Gallery;
