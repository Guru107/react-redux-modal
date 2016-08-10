'use strict';

import ReduxModal from './ReduxModal';
import reduxDuck from './redux';
import * as modalActions from './redux';

export default ReduxModal;
export const reducer = reduxDuck;
export const actions = modalActions;
