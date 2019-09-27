import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from 'utils/routes';
import FirebaseContext from 'contexts/Firebase/context';
import { regexEmail } from 'utils/constants';
import { SignUpLink } from './SignUp';

//! Do not Hesitate to add a component signup page if there is a lot added beside the form
//TODO : Validation email autocomplete
const INITIAL_STATE_USER = {
  email: '',
  password: '',
};
const SingIn = props => {
  const firebase = useContext(FirebaseContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const onSubmit = e => {
    const { email, password } = userInfo;
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        setUserInfo(INITIAL_STATE_USER);
        setError(null);
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
    e.preventDefault();
  };
  const onChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { email, password } = userInfo;

  const isInvalid = password === '' || email === '';

  return (
    <div>
      <h1>SingIn</h1>
      <form onSubmit={onSubmit}>
        <input name="email" value={email} onChange={onChange} type="text" placeholder="Email Address" />
        <input name="password" value={password} onChange={onChange} type="password" placeholder="Password" />
        <button type="submit" disabled={isInvalid}>
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
      <SignUpLink />
    </div>
  );
};

SingIn.propTypes = {};

export default withRouter(SingIn);
