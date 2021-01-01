export const HANDLE_MODAL = 'HANDLE_MODAL';

const handleModalPayload = payload => ({
	type: HANDLE_MODAL,
	payload,
});

export const handleModal = () => dispatch => {
	return dispatch(handleModalPayload());
};
