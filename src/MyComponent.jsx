import { useState } from "react";

function MyComponent() {
	const [name, setName] = useState("guest");
	const [age, setAge] = useState(0);
	const [isEmployed, setIsEmployed] = useState(false);
	const updateName = () => {
		setName("spongebob");
	};
	const increamentAge = () => {
		setAge(age + 1);
	};
	const decreamentAge = () => {
		setAge(age - 1);
	};
	const resetAge = () => {
		setAge(0);
	};
	const toggleEmployedStatus = () => {
		setIsEmployed(!isEmployed);
	};
	return (
		<div>
			<p>Name: {name}</p>
			<button onClick={updateName}>Set name</button>
			<p>Age: {age}</p>
			<button onClick={increamentAge}>Increament Age</button>
			<button onClick={decreamentAge}>Decreament Age</button>
			<button onClick={resetAge}>Reset Age</button>
			<p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
			<button onClick={toggleEmployedStatus}>Toggle Employed Status</button>
		</div>
	);
}
export default MyComponent;
