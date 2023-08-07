export default function Contact({ selected, onDelete }) {
	return (
		<div id="contact">
			<div className="contact-header d-flex align-items-center">
				<div className="image d-flex justify-content-center align-items-center">
					<div className="initials">{selected.firstName[0].toUpperCase()}</div>
				</div>
				<div className="details ms-4">
					<div className="name">
						{selected.firstName} {selected.lastName}
					</div>
					<div className="number">
						<a href={`tel:${selected.phone}`}>
							{selected.phone.replace(
								/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
								"$1$2$3 $4$5$6 $7$8$9$10"
							)}
						</a>
					</div>
				</div>
			</div>
			<div className="contact-details">
				<div className="row">
					<div className="col-sm-6">
						<div className="email detail">
							<div className="title">Email</div>
							<div className="deet">
								<a href={!selected.email ? null : `mailto:${selected.email}`}>
									{!selected.email ? "-" : selected.email}
								</a>
							</div>
						</div>
						<div className="location detail">
							<div className="title">Location</div>
							<div className="deet">
								{!selected.location ? "-" : selected.location}
							</div>
						</div>
						<div className="birthday detail">
							<div className="title">Birthday</div>
							<div className="deet">
								{!selected.birthday ? "-" : selected.birthday}
							</div>
						</div>
					</div>

					<div className="col-sm-6">
						<div className="tags detail">
							<div className="title">Tags</div>
							<div className="deet">{!selected.tags ? "-" : selected.tags}</div>
						</div>
						<div className="notes detail">
							<div className="title">Notes</div>
							<div className="notes deet">
								{!selected.notes ? "-" : selected.notes}
							</div>
						</div>
					</div>
				</div>
			</div>
			<button onClick={() => onDelete(selected.id)}>Delete</button>
		</div>
	);
}
