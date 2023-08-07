export default function Contact({ selected, onDelete }) {
	return (
		<div id="contact">
			<div className="contact-header d-flex align-items-center">
				<div className="image d-flex justify-content-center align-items-center">
					<div className="initials">{selected.firstName[0]}</div>
				</div>
				<div className="details ms-4">
					<div className="name">
						{selected.firstName} {selected.lastName}
					</div>
					<div className="number">{selected.phone}</div>
				</div>
			</div>
			<div className="contact-details">
				<div className="row">
					<div className="col-sm-6">
						<div className="email detail">
							<div className="title">Email</div>
							<div className="deet">{selected.email}</div>
						</div>
						<div className="location detail">
							<div className="title">location</div>
							<div className="deet">{selected.location}</div>
						</div>
						<div className="birthday detail">
							<div className="title">Birthday</div>
							<div className="deet">{selected.birthday}</div>
						</div>
					</div>

					<div className="col-sm-6">
						<div className="tags detail">
							<div className="title">Tags</div>
							<div className="deet">{!selected.tags ? "-" : selected.tags}</div>
						</div>
						<div className="notes detail">
							<div className="title">Notes</div>
							<div className="deet">{!selected.notes ? "-" : selected.notes}</div>
						</div>
					</div>
				</div>
			</div>
			<button onClick={() => onDelete(selected.id)}>Delete</button>
		</div>
	);
}
