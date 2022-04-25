import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTest } from "../../CallApi";
import { store } from "../../Utils/store";
import { editName } from "../../Utils/actions";

const Welcome = () => {
	const [firstName, setFirstName] = useState(store.getState().firstName)
    const [lastName, setLastName] = useState(store.getState().lastName)
	// const lastName = useSelector((state) => state.lastName);
	const token = useSelector((state) => state.token);

    useEffect(() => {
        document.querySelector('.first-name').addEventListener('change', (e) => {
            setFirstName(e.target.value)
        })
        document.querySelector('.last-name').addEventListener('change', (e) => {
            setLastName(e.target.value)
        })
    }, [])
    
    const saveEdit = () => {
        getTest(token, firstName, lastName)
        store.dispatch(editName(firstName, lastName))
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
		<main className="main bg-dark">
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
		</main>
	);
};

export default Welcome;
