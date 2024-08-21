import List from "./List.jsx";
import PropTypes from "prop-types";

function App() {
	const fruits = [
		{ id: 1, name: "banana", calories: 21 },
		{ id: 2, name: "apple", calories: 50 },
		{ id: 3, name: "lemon", calories: 17 },
		{ id: 4, name: "concut", calories: 110 },
	];
	const vegetables = [
		{ id: 2, name: "potatos", calories: 27 },
		{ id: 3, name: "celery", calories: 50 },
		{ id: 4, name: "carrots", calories: 17 },
		{ id: 5, name: "corn", calories: 10 },
	];
	return (
		<>
			{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
			{vegetables.length > 0 ? (
				<List items={vegetables} category="Vegetables" />
			) : null}
		</>
	);
}

export default App;
