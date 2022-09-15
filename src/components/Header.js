import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../store/store';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    dispatch(authActions.logout());
  };

  const toggleUploadHandler = () => {
    dispatch(authActions.toggleUpload());
  };

  return (
    <header className={classes.Header}>
      <p />
      <h1>Gallery</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a onClick={toggleUploadHandler}>Upload</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
