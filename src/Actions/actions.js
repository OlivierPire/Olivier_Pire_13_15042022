export const GET_USER_INFOS = (email, firstName, lastName, id) => ({
	type: "GET_USER_INFOS",
	payload: {
		email,
		firstName,
		lastName,
		id,
	},
});

export const REMEMBER_CHECKED = (bool) => ({
	type: 'REMEMBER_CHECKED',
	payload: bool,
})

export const LOGOUT = () => ({
	type: "LOGOUT",
});

export const CLEAR_STORAGE = () => ({
	type: "CLEAR_STORAGE",
});

export const GET_STATUS = (status) => ({
	type: "GET_STATUS",
	payload: status,
});

export const GET_TOKEN = (payload) => ({
	type: "GET_TOKEN",
	payload,
});

export const EDIT_NAME = (firstName, lastName) => ({
	type: "EDIT_NAME",
	payload: {
		firstName,
		lastName,
	},
});
