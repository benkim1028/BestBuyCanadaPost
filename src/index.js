import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/app';
import SignIn from './components/signInPage'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/" component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.root'));
