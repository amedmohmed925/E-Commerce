// Feedback.js

export default function Feedback() {
	return (
		<div className="cardFeedback position-absolute mt-5 ml-5 w-50 float-left border border-2 p-2 rounded shadow-lg">
			<form>
				<p className="text-2xl">Feedback & Queries</p>
				<div>
					<label className="text-sm">Select Issue*</label>
					<br></br>
					<select className="form-select bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:border-blue-500 w-full p-2.5">
						<option value="Feedback">-- Select Your Query --</option>
						<option value="Feedback">Feedback</option>
						<option value="Course Related Queries">Course Related Queries</option>
						<option value="Payment Related Issue">Payment Related Issue</option>
						<option value="Hiring Related Queries">Hiring Related Queries</option>
						<option value="Advertise With Us">Advertise With Us</option>
					</select>
					<br></br>
					<label className="text-sm">Email Address*</label>
					<br></br>
					<input className="form-control bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5" type="email" placeholder="abc@geeksforgeeks.org" />
					<br></br>
					<label className="text-sm">Contact No.</label>
					<br></br>
					<input className="form-control bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5" type="text" placeholder="1324567890" />
					<br></br>
					<label className="text-sm">Drop Your Query</label>
					<br></br>
					<textarea className="form-control bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5" rows="4" cols="25" maxLength="300" placeholder="Max Allowed Characters: 300"></textarea>
					<br></br>
					<button className="btn btn-primary py-2 px-4 rounded" type="button">Submit</button>
				</div>
			</form>
		</div>
	);
}
