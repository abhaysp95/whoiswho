import { useState } from "react"
import maleProfile from '../public/images/icons8-male-96.png';
import femaleProfile from '../public/images/icons8-female-96.png';


const Employees = () => {

	const [employees, setEmployees] = useState([
		{
			"id": 1,
			"fullName": "Gerri Leghorn",
			"email": "gleghorn0@is.gd",
			"designation": "Health Coach I",
			"gender": "Male",
			"team": "Solarbreeze"
		}, {
			"id": 2,
			"fullName": "Issi Wellen",
			"email": "iwellen1@goo.gl",
			"designation": "Senior Quality Engineer",
			"gender": "Genderfluid",
			"team": "Solarbreeze"
		}, {
			"id": 3,
			"fullName": "Dolli Vaun",
			"email": "dvaun2@nymag.com",
			"designation": "Physical Therapy Assistant",
			"gender": "Female",
			"team": "Toughjoyfax"
		}, {
			"id": 4,
			"fullName": "Tadeo Ionnidis",
			"email": "tionnidis3@instagram.com",
			"designation": "Programmer III",
			"gender": "Male",
			"team": "Kanlam"
		}, {
			"id": 5,
			"fullName": "Loraine Simmons",
			"email": "lsimmons4@sitemeter.com",
			"designation": "Research Associate",
			"gender": "Female",
			"team": "Voltsillam"
		}, {
			"id": 6,
			"fullName": "Anthony Brinded",
			"email": "abrinded5@tumblr.com",
			"designation": "Paralegal",
			"gender": "Male",
			"team": "Wrapsafe"
		}, {
			"id": 7,
			"fullName": "Raine Jump",
			"email": "rjump6@ed.gov",
			"designation": "Assistant Manager",
			"gender": "Female",
			"team": "Domainer"
		}, {
			"id": 8,
			"fullName": "Sigfrid Fulford",
			"email": "sfulford7@webmd.com",
			"designation": "VP Product Management",
			"gender": "Male",
			"team": "Pannier"
		}, {
			"id": 9,
			"fullName": "Eugenio Dosdale",
			"email": "edosdale8@bbc.co.uk",
			"designation": "Environmental Specialist",
			"gender": "Non-binary",
			"team": "Tempsoft"
		}, {
			"id": 10,
			"fullName": "Alastair Beeby",
			"email": "abeeby9@edublogs.org",
			"designation": "Accounting Assistant III",
			"gender": "Male",
			"team": "Keylex"
		}, {
			"id": 11,
			"fullName": "Tiffi Mottley",
			"email": "tmottleya@sfgate.com",
			"designation": "Mechanical Systems Engineer",
			"gender": "Female",
			"team": "Keylex"
		}, {
			"id": 12,
			"fullName": "Katti Domelaw",
			"email": "kdomelawb@go.com",
			"designation": "Financial Analyst",
			"gender": "Female",
			"team": "Wrapsafe"
		}, {
			"id": 13,
			"fullName": "Matthias Hamley",
			"email": "mhamleyc@bloglovin.com",
			"designation": "Executive Secretary",
			"gender": "Male",
			"team": "Sonsing"
		}, {
			"id": 14,
			"fullName": "Gradey Spacy",
			"email": "gspacyd@arstechnica.com",
			"designation": "Food Chemist",
			"gender": "Male",
			"team": "Treeflex"
		}, {
			"id": 15,
			"fullName": "Mellicent Bugbee",
			"email": "mbugbeee@mapy.cz",
			"designation": "Programmer II",
			"gender": "Female",
			"team": "Andalax"
		}, {
			"id": 16,
			"fullName": "Nan Humbey",
			"email": "nhumbeyf@dailymotion.com",
			"designation": "Nurse Practicioner",
			"gender": "Female",
			"team": "Job"
		}, {
			"id": 17,
			"fullName": "Daron Spadoni",
			"email": "dspadonig@alexa.com",
			"designation": "Product Engineer",
			"gender": "Female",
			"team": "Pannier"
		}, {
			"id": 18,
			"fullName": "Miguela Dobbins",
			"email": "mdobbinsh@a8.net",
			"designation": "Cost Accountant",
			"gender": "Female",
			"team": "Tampflex"
		}, {
			"id": 19,
			"fullName": "Fremont Perazzo",
			"email": "fperazzoi@army.mil",
			"designation": "Quality Control Specialist",
			"gender": "Male",
			"team": "Sub-Ex"
		}, {
			"id": 20,
			"fullName": "Stevana MacCaughen",
			"email": "smaccaughenj@scientificamerican.com",
			"designation": "VP Marketing",
			"gender": "Female",
			"team": "Zamit"
		}, {
			"id": 21,
			"fullName": "Jamill Blumire",
			"email": "jblumirek@github.com",
			"designation": "Project Manager",
			"gender": "Male",
			"team": "Namfix"
		}, {
			"id": 22,
			"fullName": "Robinet Bulleyn",
			"email": "rbulleynl@mozilla.com",
			"designation": "Director of Sales",
			"gender": "Female",
			"team": "Sonair"
		}, {
			"id": 23,
			"fullName": "Raviv Hallatt",
			"email": "rhallattm@about.me",
			"designation": "Automation Specialist II",
			"gender": "Male",
			"team": "Redhold"
		}, {
			"id": 24,
			"fullName": "Kaitlin Nolleau",
			"email": "knolleaun@bloomberg.com",
			"designation": "Software Test Engineer II",
			"gender": "Female",
			"team": "Domainer"
		}, {
			"id": 25,
			"fullName": "Lindy Ker",
			"email": "lkero@wikipedia.org",
			"designation": "Safety Technician IV",
			"gender": "Male",
			"team": "Wrapsafe"
		}
	])

	return (
		<main class="container">
			<div class="row justify-content-center mt-3 mb-3">
				<div class="col-6">
					<div class="card-collection">
						{
							employees.map(employee => (
								<div id={employee.id} className="card m-3" style={{ cursor: "pointer" }}>
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

// <a target="_blank" href="https://icons8.com/icon/12351/male">Male</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/12140/female">Female</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
