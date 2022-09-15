import dummyData from './dummyData.json';
import classes from './Gallery.module.css';
import UploadImage from './UploadImage';

const Gallery = () => {
  const data = dummyData;

  let newObject = [localStorage.getItem('gallery')];
  let storedImages = [...newObject];
  console.log(storedImages)
  data.push(JSON.parse(storedImages));

  function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  const renderImg = data.map((img, i) => {
    // console.log(img);
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
        <div className={classes.mySlides}>{renderImg}</div>
      </div>
    </div>
  );
};
export default Gallery;
