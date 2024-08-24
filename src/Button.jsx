function Button() {
	// eslint-disable-next-line no-unused-vars
	const handleClick = () =>
		alert(
			"Make your caracter so good, that blind man can see your kindness and a deaf man can hear your kind words"
		);
	//const handleClick2 = (e) => (e.target.textContent = "OUCH ! ");
	return (
		<>
			<button onClick={() => handleClick()}>Click me 😃</button>
		</>
	);
}
export default Button;
