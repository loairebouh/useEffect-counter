import { useState } from "react";

function MyComponent() {
	const [cars, setCars] = useState([]);
	const [carYear, setCarsYear] = useState(new Date().getFullYear());
	const [carMake, setCarMake] = useState("");
	const [carModel, setCarModel] = useState("");
	function handleAddCar(event) {
		const newCar = { year: carYear, Make: carMake, Model: carModel };
		setCars((c) => [...c, newCar]);
		setCarsYear(new Date().getFullYear());
		setCarModel("");
		setCarMake("");
	}
	function handleRemoveCar(index) {
		setCars((c) => c.filter((_, i) => i !== index));
	}
	function handleYearChange(event) {
		setCarsYear(event.target.value);
	}
	function handleMakeChange(event) {
		setCarMake(event.target.value);
	}
	function handleModelChange(event) {
		setCarModel(event.target.value);
	}
	return (
		<>
			<div>
				<h2>List of cars object</h2>
				<ul>
					{cars.map((car, index) => (
						<li key={index} onClick={() => handleRemoveCar(index)}>
							{car.year}
							{car.Make}
							{car.Model}
						</li>
					))}
				</ul>
				<input
					type="number"
					value={carYear}
					onChange={handleYearChange}
					placeholder="Enter Car Year"
				></input>
				<br />
				<input
					type="text"
					value={carMake}
					onChange={handleMakeChange}
					placeholder="Enter Car Make"
				></input>
				<br />
				<input
					type="text"
					value={carModel}
					onChange={handleModelChange}
					placeholder="Enter Car Model"
				></input>
				<br />
				<button onClick={handleAddCar}>Add Car</button>
			</div>
		</>
	);
}
export default MyComponent;
