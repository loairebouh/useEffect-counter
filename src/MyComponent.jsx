import { useState } from "react";

function MyComponent() {
	const [count, setCount] = useState(0);
	function increament() {
		setCount((c) => c + 1);
		setCount((c) => c + 1);
		setCount((c) => c + 1);
	}
	function decreament() {
		setCount((c) => c - 1);
		setCount((c) => c - 1);
	}
	function reset() {
		setCount(0);
	}
	return (
		<>
			<div>
				<h1>COUNT : {count}</h1>
			</div>
			<div>
				<button onClick={increament}>Increament</button>
				<button onClick={decreament}>Decreament</button>
				<button onClick={reset}>Reset</button>
			</div>
		</>
	);
}
export default MyComponent;
