import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginUser } from "../../CallApi";
import { store } from "../../Utils/store";

const Form = () => {
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	
	useEffect(() => {
		document.querySelector("#username").addEventListener("change", (e) => {
			setUserName(e.target.value);
		});
		document.querySelector("#password").addEventListener("change", (e) => {
			setPassword(e.target.value);
		});
	});

	const nameInput = document.querySelector("#username");
	const passwordInput = document.querySelector("#password");

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FontAwesomeIcon icon={faUserCircle} />
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
						<span className="error-id">
							{nameInput
								? nameInput.value === ""
									? "Enter your username"
									: ""
								: null}
						</span>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
						<span className="error-id">
							{passwordInput
								? passwordInput.value === ""
									? "Enter your password"
									: ""
								: null}
						</span>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button
						className="sign-in-button"
						onClick={async (e) => {
							e.preventDefault();
							await dispatch(getLoginUser(userName, password));
							if (store.getState().status === 200) {
								navigate("/profile");
							} else {
								alert('Invalid username or password')
							}
						}}
					>
						Sign In
					</button>
					{/* <span className={store.getState().status === 400 ? 'error-id' : "error-hidden"}>Invalid username or password</span> */}
				</form>
			</section>
		</main>
	);
};

export default Form;
