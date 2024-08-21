import PropTypes from "prop-types";

function List(props) {
	const itemList = props.items;
	const category = props.category;
	//sorting by lexico
	//fruits.sort((a, b) => a.name.localeCompare(b.name));
	//sorting by calories
	//fruits.sort((a, b) => a.calories - b.calories);
	//const lowCalFruits = fruits.filter((fruit) => fruit.calories < 50);
	const listItems = itemList.map((item) => (
		<li key={item.id}>
			{item.name}: &nbsp;
			<b>{item.calories}</b>
		</li>
	));
	/*const listItemLowCalFruit = lowCalFruits.map((fruit) => (
		<li key={fruit.id}>
			{fruit.name}: &nbsp;
			<b>{fruit.calories}</b>
		</li>
	));*/
	return (
		<>
			<h3 className="list-category">{category}</h3>
			<ol className="list-item">{listItems}</ol>
		</>
	);
}
List.defaultProps = {
	category: "Category",
	items: [],
};
List.PropTypes = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.int,
			name: PropTypes.string,
			calories: PropTypes.number,
		})
	),
};

export default List;
