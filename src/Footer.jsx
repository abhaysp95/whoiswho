const Footer = () => {
	return (
		<div className="container" style={{position: "fixed", bottom: "0", left: "0"}}>
			<div className="footer row justify-content-center mt-3">
				<div className="col-8">
					<h5>WhoIsWho - {new Date().getFullYear()}</h5>
					<p style={{fontSize: "0.75rem"}} className="text-end">icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
				</div>
			</div>
		</div>
	)
}

export default Footer
