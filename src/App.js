import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import UploadImages from './components/UploadImage';

function App() {
  const isAuth = useSelector(state => state.auth.isLoggedIn)

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UploadImages />}
    </Fragment>
  );
}

export default App;
