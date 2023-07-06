import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">WhoIsWho</a>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/groupmem">Group</Link></li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Nav;
