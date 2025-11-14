export default function ProfileDetails({ name, profession, website }) {
	return (
		<div className="profile-details flex-col">
			<h1 className="name">{name}</h1>
			<h2 className="profession">{profession}</h2>
			<a className="personal-website">{website}</a>
		</div>
	)
}
