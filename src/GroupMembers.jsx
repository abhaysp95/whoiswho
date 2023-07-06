import { useState } from "react"
import { Teams } from "./assets/data/employees_data"

const GroupMembers = ({employees, currentTeam, setCurrentTeam}) => {


	function getTeamData(teamData) {
		let transformedTeamData = employees.filter(employee => employee.team === teamData.team)
		teamData.members = transformedTeamData
		teamData.collapsed = currentTeam !== teamData.team
	}

	function groupTeamMembers() {
		let perTeamData = new Array()

		Teams.forEach(team => {
			let teamData = {
				team: team,
				members: undefined,
				collapsed: false,
			}
			getTeamData(teamData)
			perTeamData.push(teamData)
		})

		return perTeamData
	}

	const [groupEmployees, setGroupData] = useState(groupTeamMembers())

	const groupClickHandler = (event) => {
		console.log(groupEmployees)
		var transfromedGroupData = groupEmployees.map(groupData => groupData.team === event.currentTarget.id
			? {...groupData, collapsed: !groupData.collapsed}
			: groupData)

		console.log(transfromedGroupData)
		setGroupData(transfromedGroupData)
		setCurrentTeam(event.currentTarget.id)
	}


	return (
		<main className="container">
		{
			groupEmployees.map(item => {
				return (
					<div key={item.team} className="card mt-2" style={{cursor: "pointer"}}>
						<h4 id={item.team} className="card-header text-secondary bg-white" onClick={groupClickHandler}>Team: {item.team}</h4>
						<div id={"collapse_" + item.team} className={item.collapsed ? "collapse" : ""}>
							<hr />
							{
								item.members.map(member => {
									return (
										<div key={member.fullName} className="mt-2">
											<h5 className="card-title mt-2">
												<span className="text-dark">Name: {member.fullName}</span>
											</h5>
											<p>Designation: {member.designation}</p>
										</div>
									)
								})
							}
						</div>
					</div>
				)

			})
		}
		</main>
	)
}

export default GroupMembers
