export default function Button({ cssClass, icon, text }) {
	return (
		<button
			className={`${cssClass} btn`}
		>
			{icon}
			{text}
		</button >
	)
}
