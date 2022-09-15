import classes from './Modal.module.css';

const Modal = (props) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('closeModal')) {
      props.setClickedImage(null);
    }
  };

  return (
    <>
      <div className={'overlay closeModal'} onClick={handleClick}>
        <h2 className={classes.title}>{props.imgAlt}</h2>
        <img src={props.clickedImage} alt={props.imgAlt} />
        <span className={'closeModal'} onClick={handleClick}>
          &times;
        </span>
        <div onClick={props.leftHandler} className={classes['arrow-left']}>
          <span>{'◀'}</span>
        </div>
        <div onClick={props.rightHandler} className={classes['arrow-right']}>
          <span>{'▶'}</span>
        </div>
      </div>
    </>
  );
};

export default Modal;
