import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../Actions/actions";

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch()
	const firstName = useSelector((state) => state.firstName)

	return (
		<div>
			<nav className="main-nav">
				<NavLink to={"/"}>
					<img
						className="main-nav-logo-image"
						src="./img/argentBankLogo.png"
						alt="Argent Bank Logo"
					/>
				</NavLink>
				<div>
					{location.pathname === "/profile" ? (
						<div>
							<NavLink to={"/profile"} className="main-nav-item">
								<FontAwesomeIcon icon={faUserCircle} />
								{firstName}
							</NavLink>
							<NavLink to={"/"} className="main-nav-item" onClick={() => dispatch(LOGOUT())}>
								<FontAwesomeIcon icon={faSignOut} />
								Sign Out
							</NavLink>
						</div>
					) : (
						<div>
							<FontAwesomeIcon icon={faUserCircle} />
							<NavLink to={"/login"} className="main-nav-item">
								Sign In
							</NavLink>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
