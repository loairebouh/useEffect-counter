import List from "./List.jsx";

function App() {
	const fruits = [];
	const vegetables = [];
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
