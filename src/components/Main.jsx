import ProfileDetails from './ProfileDetails.jsx'
import ContactButtons from './ContactButtons.jsx'
import ProfileText from './ProfileText.jsx'

export default function Main() {
	return (
		<main>
			<ProfileDetails
				name="Laura Smith"
				profession="Frontend Developer"
				website="laurasmith.website"
			/>

			<ContactButtons />

			<ProfileText
				title="About"
				text={text1}
			/>

			<ProfileText
				title="Interests"
				text={text2}
			/>
		</main >
	)
}

const text1 = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."

const text2 = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
