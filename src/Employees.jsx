import maleProfile from './images/icons8-male-96.png';
import femaleProfile from './images/icons8-female-96.png';


const Employees = ({currentTeam, employees, teamSelectionHandler, employeeClickHandler}) => {
	return (
		<main class="container">
			<div class="row justify-content-center mt-3 mb-3">
				<div class="col-8">
					<select className="form-select form-select-lg" value={currentTeam} onChange={teamSelectionHandler}>
						<option value="Wrapsafe">Wrapsafe</option>
						<option value="Domainer">Domainer</option>
						<option value="Redhold">Redhold</option>
						<option value="Sonair">Sonair</option>
						<option value="Tempsoft">Tempsoft</option>
						<option value="Namfix">Namfix</option>
						<option value="Treeflex">Treeflex</option>
						<option value="Wrapsafe">Wrapsafe</option>
						<option value="Keylex">Keylex</option>
						<option value="Solarbreeze">Solarbreeze</option>
						<option value="Toughjoyfax">Toughjoyfax</option>
					</select>
				</div>
			</div>
			<div class="row justify-content-center mt-3 mb-3">
				<div class="col-8">
					<div class="card-collection">
						{
							employees.map(employee => (
								<div id={employee.id} className={(employee.team === currentTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: "pointer" }} onClick={employeeClickHandler}>
									{employee.gender === "Male"
										? <img className="card-img" src={maleProfile} />
										: <img className="card-img" src={femaleProfile} />}
									<div className="card-body">
										<h5 className="card-title">{employee.fullName}</h5>
										<p><b>Designation: </b>{employee.designation}</p>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Employees
