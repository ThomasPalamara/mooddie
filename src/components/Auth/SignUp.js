import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from 'utils/routes';
import FirebaseContext from 'contexts/Firebase/context';
import { regexEmail } from 'utils/constants';

//! Do not Hesitate to add a component signup page if there is a lot added beside the form
//TODO : Validation email autocomplete
const INITIAL_STATE_USER = {
  email: '',
  password: '',
  passwordConfirmation: '',
};
const SignUp = props => {
  const firebase = useContext(FirebaseContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [error, setError] = useState(null);

  const onSubmit = e => {
    const { email, password } = userInfo;
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        setUserInfo(INITIAL_STATE_USER);
        setError(null);
        props.history.push(ROUTES.HOME);
        console.log('SignedUP');
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

  const { email, password, passwordConfirmation } = userInfo;
  console.log(email, password, passwordConfirmation);

  const isInvalid = password === '' || password !== passwordConfirmation || email === '' || !regexEmail.test(email);
  console.log(isInvalid, password === '', password !== passwordConfirmation, email === '', !regexEmail.test(email));

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={onSubmit}>
        <input name="email" value={email} onChange={onChange} type="text" placeholder="Email Address" />
        <input name="password" value={password} onChange={onChange} type="password" placeholder="Password" />
        <input name="passwordConfirmation" value={passwordConfirmation} onChange={onChange} type="password" placeholder="Confirm Password" />
        <button type="submit" disabled={isInvalid}>
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

SignUp.propTypes = {};

export default withRouter(SignUp);
export { SignUpLink };
