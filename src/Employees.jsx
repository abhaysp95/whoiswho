import maleProfile from './assets/images/icons8-male-96.png';
import femaleProfile from './assets/images/icons8-female-96.png';
import { Teams } from './assets/data/employees_data';


const Employees = ({currentTeam, employees, teamSelectionHandler, employeeClickHandler}) => {
	return (
		<main className="container">
			<div className="row justify-content-center mt-3 mb-3">
				<div className="col-8">
					<select className="form-select form-select-lg" value={currentTeam} onChange={teamSelectionHandler}>
						{
							Teams.map(team => (
								<option key={team} value={team}>{team}</option>
							))
						}
					</select>
				</div>
			</div>
			<div className="row justify-content-center mt-3 mb-3">
				<div className="col-8">
					<div className="card-collection">
						{
							employees.map(employee => (
								<div key={employee.id} id={employee.id} className={(employee.team === currentTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: "pointer" }} onClick={employeeClickHandler}>
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
