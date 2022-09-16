import classes from './SelectCategory.module.css';

const SelectCategory = () => {
  return (
    <>
      <ul className={classes.categories}>
        <li>Travel</li>
        <li>Wallpapers</li>
        <li>3D Renders</li>
        <li>Textures & Patterns</li>
        <li>Architecture</li>
        <li>Nature</li>
        <li>Film</li>
        <li>Music</li>
        <li>People</li>
      </ul>
    </>
  );
};

export default SelectCategory;
