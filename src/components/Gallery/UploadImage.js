import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import { authActions } from '../../store/store';
import classes from './UploadImages.module.css';

let uploadedImages = [];

const UploadImage = () => {
  let correctImage = false;

  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState('');
  const [imgName, setImgName] = useState('');
  const [categories, setCategories] = useState([]);

  const toggleRefresh = useSelector((state) => state.auth.showRedreshBtn);

  if (imgUrl.trim().length > 5 && imgName.trim().length >= 3 && categories != '') {
    correctImage = true;
  }

  let imageId = +Math.random().toFixed(4);

  let obj = {
    id: imageId,
    alt: imgName,
    src: imgUrl,
    categories: categories,
  };

  const nameChangeHandler = (e) => {
    setImgName(e.target.value);
  };
  const urlChangeHandler = (e) => {
    setImgUrl(e.target.value);
    // console.log(imgUrl);
  };

  const optionsCategory = [
    { value: 'travel', label: 'Travel' },
    { value: 'currentEvents', label: 'Current Events' },
    { value: 'wallpapers', label: 'Wallpapers' },
    { value: '3DRenders', label: '3D Renders' },
    { value: 'texturesPatterns', label: 'Textures & Patterns' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'nature', label: 'Nature' },
    { value: 'flm', label: 'Film' },
    { value: 'music', label: 'Music' },
    { value: 'people', label: 'People' },
  ];

  const uploadHandler = () => {
    // console.log(obj);
    uploadedImages.push(obj);
    localStorage.setItem('image', JSON.stringify(uploadedImages));
    setImgUrl('');
    setImgName('');
    setCategories('');
  };

  const toggleRefreshHandler = () => {
    dispatch(authActions.toggleRefresh());
  };

  const uploadBtnHandlers = () => {
    uploadHandler();
    toggleRefreshHandler();
  };
  const refreshHandler = () => {
    window.location.reload();
  };
  return (
    <div className={classes.container}>
      <label htmlFor='imgURL'>Paste your link here</label>
      <input type='text' id='imgURL' value={imgUrl} onChange={urlChangeHandler} />
      <label htmlFor='imgName'>Name</label>
      <input type='text' id='imgName' value={imgName} onChange={nameChangeHandler} />
      <div className={classes.select}>
        <Select
          value={categories}
          className={classes.select}
          options={optionsCategory}
          isMulti
          autoFocus
          isSearchable
          noOptionsMessage={() => 'No such type of category'}
          onChange={setCategories}
          placeholder='Select a category'
        />
      </div>
      {correctImage && <button onClick={uploadBtnHandlers}>Upload </button>}
      {toggleRefresh && (
        <button className={classes.refresh} onClick={refreshHandler}>
          Refresh <span>&#10227;</span>
        </button>
      )}
    </div>
  );
};

export default UploadImage;
