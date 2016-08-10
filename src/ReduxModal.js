'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from './redux';
import Modal from './Modal';

@connect(state => ({modals: state.modals.modals}), actions)
class ReduxModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="react-redux-modal">
        <div className="rr-modals">
          {this.props.modals.map((modal, i) => {
            return (
              <Modal
                index={i}
                key={modal.id}
                removeModal={this.props.removeModal}
                {...modal}/>
            );
          })}
        </div>
      </div>
    );
  }
}

ReduxModal.displayName = 'ReduxModal';

ReduxModal.propTypes = {
  modals: PropTypes.array
};

export default ReduxModal;
