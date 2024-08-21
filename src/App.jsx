import List from "./List.jsx";

function App() {
	const fruits = [];
	const vegetables = [];
	const chocolate = [{ name: lindt, calories: 233 }];
	return (
		<>
			{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
			{vegetables.length > 0 ? (
				<List items={vegetables} category="Vegetables" />
			) : null}
			{chocolate.length > 0 ? (
				<List items={chocolate} category="Chocolate" />
			) : null}
		</>
	);
}

export default App;
