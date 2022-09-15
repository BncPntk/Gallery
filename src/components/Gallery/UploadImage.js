import { useState } from 'react';
import store from '../../store/store';

import dummyData from './dummyData.json';
import classes from './UploadImages.module.css';

let uploadedImages = [];

const UploadImage = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [imgName, setImgName] = useState('');

  let imageId = +Math.random().toFixed(4);

  const obj = {
    id: imageId,
    alt: imgName,
    src: imgUrl,
  };

  const nameChangeHandler = (e) => {
    setImgName(e.target.value);
  };
  const urlChangeHandler = (e) => {
    setImgUrl(e.target.value);
  };

  const uploadHandler = () => {
    console.log(obj);
    uploadedImages.push(obj);
    console.log(uploadedImages);
    localStorage.setItem('image', JSON.stringify(uploadedImages));

    setImgUrl('');
    setImgName('');
  };

  return (
    <div className={classes.container}>
      <label htmlFor='imgURL'>Paste your link here</label>
      <input type='text' id='imgURL' value={imgUrl} onChange={urlChangeHandler} />
      <label htmlFor='imgName'>Name</label>
      <input type='text' id='imgName' value={imgName} onChange={nameChangeHandler} />
      <button onClick={uploadHandler}>Upload</button>
    </div>
  );
};

export default UploadImage;
