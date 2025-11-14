export default function ProfileText({ title, text }) {
	return (
		<div className="profile-text-container">
			<h2 className="profile-text-title">{title}</h2>
			<p className="profile-text-text">{text}</p>
		</div>
	)
}
