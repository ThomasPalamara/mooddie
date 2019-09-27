import React, { useState } from 'react';
import Calendar from 'components/Calendar/CalendarPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import SignUp from 'components/Auth/SignUp';
import SignIn from 'components/Auth/SignIn';
import CalendarPage from 'components/Calendar/CalendarPage';
import * as ROUTES from 'utils/routes';

function App() {
  const [authUser, setAuthUser] = useState(null);
  return (
    <div>
      <Router>
        <Navigation authUser={authUser} />

        <Route exact path={ROUTES.LANDING} component={CalendarPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
