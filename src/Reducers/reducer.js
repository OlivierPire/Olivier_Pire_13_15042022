import produce from "immer";
import { PURGE } from "redux-persist";

const initialState = {
	email: null,
	firstName: null,
	lastName: null,
	id: null,
	status: null,
	token: null,
	rememberChecked: false,
};

const reducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case PURGE: {
				return initialState;
			}
			case 'REMEMBER_CHECKED': {
				draft.rememberChecked = action.payload;
				return;
			}
			case "GET_USER_INFOS": {
				draft.email = action.payload.email;
				draft.firstName = action.payload.firstName;
				draft.lastName = action.payload.lastName;
				draft.id = action.payload.id;
				return;
			}
			case "LOGOUT": {
				return initialState;
			}
			case "GET_STATUS": {
				draft.status = action.payload;
				return;
			}
			case "GET_TOKEN": {
				draft.token = action.payload;
				return;
			}
			case "EDIT_NAME": {
				draft.firstName = action.payload.firstName;
				draft.lastName = action.payload.lastName;
				return;
			}
			default:
				return initialState;
		}
	});
};

export default reducer;
