import ProfilePic from './ProfilePic.jsx'
import person from '../assets/person.png'

export default function Header() {
	return (
		<header>
			<ProfilePic
				src={person}
			/>
		</header>
	)
}
