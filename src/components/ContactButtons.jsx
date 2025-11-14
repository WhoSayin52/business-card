import Button from './Button.jsx'

export default function ContactButtons() {
	return (
		<div className="contact-buttons flex-row">
			<Button
				cssClass="email-btn"
				icon={<i class="fa-solid fa-envelope"></i>}
				text=" Email"
			/>
			<Button
				cssClass="linkedin-btn"
				icon={<i class="fa-brands fa-linkedin"></i>}
				text=" LinkedIn"
			/>
		</div>
	)
}
