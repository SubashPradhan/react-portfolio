import { combineReducers } from 'redux';
import { showModal } from './handleModal';
import { showMenu } from './handleMenuClick';

export default combineReducers({
	showModal,
	showMenu,
});
