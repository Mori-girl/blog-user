import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from  './redux/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';
const store=configureStore();
const history=syncHistoryWithStore(hashHistory,store);
ReactDOM.render(
    <Provider store={store}>
      <div>
        {routes(history)}
        {process.env.NODE_ENV==='production'?'':<DevTools/>}
      </div>
    </Provider>
,document.getElementById('root'));