import './App.css';
import Header from './Header';
import Employees from './Employees';
import GroupMembers from './GroupMembers';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import EmployeesData from './assets/data/employees_data';
import Nav from './Nav';

const App = () => {
	const [currentTeam, setCurrentTeam] = useState(JSON.parse(localStorage.getItem("currentTeam")) || "Solarbreeze")

	const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || EmployeesData)

	useEffect(() => {
		localStorage.setItem("currentTeam", JSON.stringify(currentTeam))
	}, [currentTeam])

	useEffect(() => {
		localStorage.setItem("employees", JSON.stringify(employees))
	}, [employees])

	const teamSelectionHandler = (event) => {
		console.log("current team: ", event.target.value)
		setCurrentTeam(event.target.value)
	}

	const employeeClickHandler = (event) => {
		const transformedEmployees = employees.map(employee => employee.id === parseInt(event.currentTarget.id)
			? (employee.team === currentTeam ? {...employee, team: ""} : {...employee, team: currentTeam})
			: employee)
		setEmployees(transformedEmployees)
	}

	return (
		<BrowserRouter>
			<Nav />
			<Header currentTeam={currentTeam} employeeCount={employees.filter(employee => employee.team === currentTeam).length} />
			<Routes>
				<Route path="/" element={<Employees currentTeam={currentTeam}
					employees={employees} teamSelectionHandler={teamSelectionHandler}
					employeeClickHandler={employeeClickHandler}
				/>}>
				</Route>
				<Route path="/groupmem" element={<GroupMembers />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};

export default App;
