import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Gallery from './components/Gallery/Gallery';

function App() {
  const isAuth = useSelector(state => state.auth.isLoggedIn)

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Gallery />}
    </Fragment>
  );
}

export default App;
