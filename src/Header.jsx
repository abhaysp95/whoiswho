const Header = ({currentTeam, employeeCount}) => {
	var today = new Date()

	return (
		<header className="container">
			<div className="row justify-content-center mt-3 mt-3 mb-4">
				<div className="col-8">
					<h1>WhoIsWho</h1>
					<h3>Team {currentTeam} have {employeeCount} members</h3>
				</div>
			</div>
		</header>
	)
}

export default Header
