import produce from "immer";
import { persistor } from "./store";
import { PURGE } from "redux-persist";

const initialState = {
	email: null,
	firstName: null,
	lastName: null,
	id: null,
	status: null,
	token: null,
};

const reducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case PURGE: {
				return initialState;
			}
			case "getUserInfos": {
				draft.email = action.payload.email;
				draft.firstName = action.payload.firstName;
				draft.lastName = action.payload.lastName;
				draft.id = action.payload.id;
				return;
			}
			case "logout": {
				return initialState;
			}
			case "getStatus": {
				draft.status = action.payload;
				return;
			}
			case "getToken": {
				draft.token = action.payload;
				return;
			}
			case "editName": {
				draft.firstName = action.payload.firstName;
				draft.lastName = action.payload.lastName;
				return;
			}
			case "getErrorForm": {
				draft.passwordError = action.payload.password;
				draft.userNameError = action.payload.username;
				draft.invalidLogin = action.payload.invalid;
				return;
			}
			default:
				return initialState;
		}
	});
};

export default reducer;
