import { useState, useEffect } from "react";

function MyComponent() {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("");
	useEffect(() => {
		document.title = `Count : ${count} ${color}`;
	}, [color, count]);
	function addCount() {
		setCount((c) => c + 1);
	}
	function subCount() {
		setCount((c) => c - 1);
	}
	function changeColor() {
		setColor((c) => (c === "green" ? "red" : "green"));
	}
	return (
		<div>
			<p style={{ color: color }}>Count:{count}</p>
			<button onClick={addCount}>Add</button>
			<button onClick={subCount}>Substract</button>
			<button onClick={changeColor}>Change Color</button>
		</div>
	);
}
export default MyComponent;
