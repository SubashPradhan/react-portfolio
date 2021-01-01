export const MENU_CLICK = 'MENU_CLICK';

const handleMenuClickPayload = payload => ({
	type: MENU_CLICK,
	payload,
});

export const handleMenuClick = () => dispatch => {
	return dispatch(handleMenuClickPayload());
};
