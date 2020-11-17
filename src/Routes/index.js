import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from "../Pages/Home";

const Routes = () => {
  return (
		<Fragment>
			<Switch>
				<Route path="/home" component={HomePage} />
				<Route path="/about" component={()=><h2><center>About Page</center></h2>} />
				<Redirect to="/home" />
			</Switch>
		</Fragment>
	);
};

export default Routes;