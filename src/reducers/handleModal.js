import { HANDLE_MODAL } from '../actions/handleModal';

export const showModal = (state = false, action = {}) => {
	switch (action.type) {
		case HANDLE_MODAL:
			return !state;
		default:
			return state;
	}
};
