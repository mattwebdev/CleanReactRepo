import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import './styles/index.css';
import App from './containers/App/App';
import registerServiceWorker from './services/serviceWorker/ServiceWorker';

let reduxStore = store()
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('root')
)

registerServiceWorker();