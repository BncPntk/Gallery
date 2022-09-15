import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/store';

import classes from './Auth.module.css';

const Auth = (props) => {
  let correctUsername = true;
  const [enteredUsername, setEnteredUsername] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedIn === '1') {
      dispatch(authActions.login());
    }
  }, []);

  useEffect(() => {
    if (enteredUsername.trim().length < 6) {
      correctUsername = false;
    }
    if (enteredUsername.trim() === 'admin') {
      correctUsername = true;
    }
  }, [enteredUsername, correctUsername]);

  const loginHandler = (e) => {
    e.preventDefault();

    setEnteredUsername('');
    if (correctUsername) {
      dispatch(authActions.login());
      localStorage.setItem('isLoggedIn', '1');
    }
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  return (
    <main className={classes.login}>
      <section>
        <form onSubmit={loginHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            {correctUsername && (
              <input type='text' id='username' value={enteredUsername} onChange={usernameChangeHandler} />
            )}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
