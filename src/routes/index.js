import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';
const routes=(hashHistory)=>{
	return (
	<Router history={hashHistory}>
		<Route path="/" component={Frame}>
			<IndexRoute component={Home}/>
		</Route>
		<Route path='/detail/:id' component={Detail}/>
	</Router>
	);
}	
export default routes;