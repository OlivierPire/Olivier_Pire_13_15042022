import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateName } from "../../CallApi";
import { store } from "../../Store/store";
import { EDIT_NAME } from "../../Actions/actions";

const Welcome = () => {
	const [firstName, setFirstName] = useState(store.getState().firstName)
    const [lastName, setLastName] = useState(store.getState().lastName)
	// const lastName = useSelector((state) => state.lastName);
	const token = useSelector((state) => state.token);

	const setName = () => {
		setFirstName(document.querySelector('.first-name').value)
		setLastName(document.querySelector('.last-name').value)
	}
    
    const saveEdit = async () => {
		const firstNameInputValue = document.querySelector('.first-name').value
		const lastNameInputValue = document.querySelector('.last-name').value
		await setName()
        await store.dispatch(EDIT_NAME(firstNameInputValue, lastNameInputValue))
        updateName(token, firstNameInputValue, lastNameInputValue)
        hideEditName()
    }

	const hideEditName = () => {
		document.querySelector(".edit-name").style.display = "none";
		document.querySelector(".edit-button").style.display = "inline-block";
        document.querySelector(".name").style.display = "block";
	};

	const displayEditName = () => {
        document.querySelector(".name").style.display = "none";
		document.querySelector(".edit-name").style.display = "inline-block";
		document.querySelector(".edit-button").style.display = "none";
	};

	return (
			<div className="header">
				<h1>
					Welcome back
					<br />
					<span className="name">{firstName + " " + lastName}</span>
				</h1>
				<div className="edit-name">
					<input type="text" className="first-name" placeholder={firstName} />
					<input type="text" className="last-name" placeholder={lastName} />
					<div className="edit-name-btn">
						<button className="save" onClick={() => saveEdit()}>
							Save
						</button>
						<button className="cancel" onClick={() => hideEditName()}>
							Cancel
						</button>
					</div>
				</div>
				<button className="edit-button" onClick={() => displayEditName()}>
					Edit Name
				</button>
			</div>
		
	);
};

export default Welcome;
