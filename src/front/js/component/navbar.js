import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("access-token");

	const handleLogOut = () => {
		localStorage.removeItem("access-token");
		navigate("/");
	};

	const handleProfileClick = () => {
		navigate("/profile", { replace: true }); // El replace: true opcionalmente puede reemplazar la entrada actual en el historial de navegación
		window.location.reload(); // Fuerza la recarga de la página
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				<div className="ml-auto d-flex">
					<button className="btn btn-success me-3" onClick={handleProfileClick}>Profile</button>
					{!token ? (
						<div>
							<button className="btn btn-primary me-2" onClick={() => navigate("/login")}>Login</button>
							<button className="btn btn-primary" onClick={() => navigate("/register")}>Register</button>
						</div>
					) : (
						<button onClick={handleLogOut} className="btn btn-primary">LogOut</button>
					)}
				</div>
			</div>
		</nav>
	);
};
