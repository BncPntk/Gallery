import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../store/store';
import classes from './UploadImages.module.css';

let uploadedImages = [];

const UploadImage = () => {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState('');
  const [imgName, setImgName] = useState('');
  const toggleRefresh = useSelector((state) => state.auth.showRedreshBtn);



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

  const toggleRefreshHandler = () => {
    dispatch(authActions.toggleRefresh());
  }

  const uploadBtnHandlers = () => {
    uploadHandler();
    toggleRefreshHandler();
  }

  return (
    <div className={classes.container}>
      <label htmlFor='imgURL'>Paste your link here</label>
      <input type='text' id='imgURL' value={imgUrl} onChange={urlChangeHandler} />
      <label htmlFor='imgName'>Name</label>
      <input type='text' id='imgName' value={imgName} onChange={nameChangeHandler} />
      <button onClick={uploadBtnHandlers}>Upload </button>
      {toggleRefresh && <button className={classes.refresh} onClick={uploadHandler}>Refresh <span >&#10227;</span></button>}

    </div>
  );
};

export default UploadImage;
