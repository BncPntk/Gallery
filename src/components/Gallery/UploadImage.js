import { useState } from 'react';

import dummyData from './dummyData.json';

const UploadImage = () => {
  //   const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgName, setImgName] = useState('');

  let jsonStr = dummyData;
  let imageId = Math.random() + 1;
  //   let imgURL;

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
    jsonStr.push(obj);
    console.log(jsonStr);
    localStorage.setItem('gallery', JSON.stringify(obj));
    setImgUrl('');
    setImgName('');
  };

  return (
    <div>
      <label htmlFor='imgURL'>Insert your URL here:</label>
      <input type='text' id='imgURL' value={imgUrl} onChange={urlChangeHandler} />
      <label htmlFor='imgName'>Name</label>
      <input type='text' id='imgName' value={imgName} onChange={nameChangeHandler} />
      <button onClick={uploadHandler}>Upload</button>
    </div>
  );
};

export default UploadImage;
