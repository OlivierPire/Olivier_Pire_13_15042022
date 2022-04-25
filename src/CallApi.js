import { getStatus, getToken, getUserInfos } from "./Utils/actions";
import { store } from "./Utils/store";


export const getLoginUser = (userEmail, userPassword) => {
	return async () => {
		try{
			const response = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				body: JSON.stringify({
					email: userEmail,
					password: userPassword,
				}),
			});
			const data = await response.json();
			await store.dispatch(getStatus(data.status));
			await store.dispatch(getToken(data.body.token))
	
			const res = await fetch("http://localhost:3001/api/v1/user/profile", {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
					Authorization: "Bearer " + data.body.token,
				}),
			});
			const d = await res.json();
	
			const email = d.body.email;
			const firstName = d.body.firstName;
			const lastName = d.body.lastName;
			const id = d.body.id;
			store.dispatch(getUserInfos(email, firstName, lastName, id));
		} catch(err) {
			console.log(err);
		}
	};
};

export const getTest = async (token, firstName, lastName) => {
	const response = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "PUT",
			headers: new Headers({
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			}),
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
			}),
		});
		const data = await response.json()
		return data
}


