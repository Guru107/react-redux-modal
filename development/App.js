'use strict';

import './index.less';
import './../src/less/index.less';
import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import ReduxModal, {actions} from './../src/';
import DevTools from './containers/DevTools';
import config from './../config';

import loremIpsum from 'lorem-ipsum';

class myLargeModalComponent extends Component {
  static displayName = 'MySUperModal';

  constructor(props) {
    super(props);
    console.log('##myLargeModalComponent props##', this.props);
  }

  render() {
    return (
      <div>
        <p>{loremIpsum({count: 1})}</p>
        <button
          type="button"
          onClick={() => this.props.removeModal()}>Remove this modal</button>
      </div>
    );
  }
}

export default class App extends Component {
  static displayName = 'ReduxModalDev';

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.renderDev = this.renderDev.bind(this);
  }

  addModalLarge() {
    this.props.store.dispatch(actions.addModal({
      component: myLargeModalComponent,
      options: {
        title: 'This one there is no close botton.',
        size: 'large',
        hideCloseButton: true}
    }));
  }

  renderDev() {
    if (config.env !== 'production') {
      return <DevTools />;
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="wrapper">
          <div className="content">
            <button
              className="btn btn-primary"
              onClick={this.addModalLarge.bind(this)}>add large modal</button>
          </div>
          <ReduxModal />
          {this.renderDev()}
        </div>
      </Provider>
    );
  }
}
