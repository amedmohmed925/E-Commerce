// Card.js

export default function Card() {
	return (
		<div className="d-flex cards">
			<div className="card ml-5 mt-5" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title text-center font-weight-bold text-primary">Reach Us At</h5>
					<ul className="list-unstyled">
						<li className="mt-2">
							<i className="fa fa-phone mr-2"></i> +91-9998887776
						</li>
						<li className="mt-2">
							<i className="fa fa-envelope mr-2"></i> feedback@geeksforgeeks.org
						</li>
						<li className="mt-2">
							<i className="fa fa-map-pin mr-2"></i> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh
						</li>
					</ul>
				</div>
			</div>
			<div className="card ml-5 mt-5" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title text-center font-weight-bold text-primary">Branding & Collaboration</h5>
					<i className="fa fa-handshake fa-2x d-block text-center mb-4"></i>
					<div className="text-left">
						<i className="fa fa-envelope mr-2"></i> branding@geeksforgeeks.org
					</div>
					<div className="mt-2 text-left">
						<i className="fa fa-map-pin mr-2"></i> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh
					</div>
				</div>
			</div>
		</div>
	);
}
