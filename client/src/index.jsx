import React from 'react';
import { render } from 'react-dom';

import styles from './css/defaults.css';
import { Provider } from 'react-redux';
import store from './store';

import config from './config/config';

import { AntsListing } from './components';

import { configAction } from './actions';

class App extends React.Component {

  componentWillMount(){
    store.dispatch(configAction(config));
  }

  render() {
    return <Provider store={store}>
      <AntsListing />
    </Provider>
  }
}

render(<App />, document.getElementById('app-wrapper'));
