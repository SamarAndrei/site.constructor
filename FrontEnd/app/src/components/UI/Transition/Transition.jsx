import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TransitionButton from './TransitionButton';
import NewPage from './NewPage';

const Transition = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={TransitionButton}/>
                <Route path='/new-page' component={NewPage}/>
            </Switch>
        </Router>
    );
};

export default Transition;