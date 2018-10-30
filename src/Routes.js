import React from 'react'
import {Switch, Route} from 'react-router-dom';
import WallApp from './components/Wall';


const Routes = () => {
    return(
        <Switch>
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/" component={WallApp} />
        </Switch>
    )
}

export default Routes