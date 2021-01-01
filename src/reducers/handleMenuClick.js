import { MENU_CLICK } from '../actions/handleMenuClick';

export const showMenu = (state = false, action = {}) => {
	switch (action.type) {
		case MENU_CLICK:
			return !state;
		default:
			return state;
	}
};
