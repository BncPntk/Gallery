import dummyData from './dummyData.json';
import classes from './Gallery.module.css';
import UploadImage from './UploadImage';

const Gallery = () => {
  const data = dummyData;
  function openModal() {
    document.getElementById('myModal').style.display = 'block';
    // document.getElementById('img').style.transfrom = 'scale(1.5)';
    // document.getElementById(`${img}`).style.width = '100px';
    // document.getElementById('mySlides').style.display = 'block';
  }
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  const renderImg = data.map((img, i) => {
    return (
      <div key={i}>
        <img id={i} src={img.src} alt={img.alt} className={classes.hoverShadow} onClick={openModal} />
      </div>
    );
  });

  return (
    <div>
      <UploadImage />
      <h2>Gallery</h2>
      <div className={classes.container}>{renderImg}</div>
      <div id='myModal' className={classes.modal} onClick={closeModal}>
        <span className={classes.close} onClick={closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
};
export default Gallery;
