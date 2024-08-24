import { useState } from "react";

function MyComponent() {
	const [name, setName] = useState("Guest");
	const [qty, setQty] = useState(0);
	const [comment, setComment] = useState("");
	const [payment, setPayment] = useState("");
	const [shipping, setShipping] = useState("");
	function handleNameChange(event) {
		setName(event.target.value);
	}
	function handleQtyChange(event) {
		setQty(event.target.value);
	}
	function handleCommentChange(event) {
		setComment(event.target.value);
	}
	function handlePaymentChange(event) {
		setPayment(event.target.value);
	}
	function handleShippingChange(event) {
		setShipping(event.target.value);
	}
	return (
		<>
			<div>
				<input value={name} onChange={handleNameChange} />
				<p>Name: {name}</p>
				<input value={qty} onChange={handleQtyChange} type="number" />
				<p>Quantity: {qty}</p>
				<textarea
					value={comment}
					onChange={handleCommentChange}
					placeholder="enter delivery instructions"
				/>
				<p>Comment: {comment}</p>
				<select value={payment} onChange={handlePaymentChange}>
					<option value="">Select an option</option>
					<option value="Visa">Visa</option>
					<option value="MasterCard">MasterCard</option>
				</select>
				<p>Payment methode : {payment}</p>
				<label>
					<input
						type="radio"
						value="Pickup"
						checked={shipping === "Pickup"}
						onChange={handleShippingChange}
					/>
					Pickup
				</label>
				<label>
					<input
						type="radio"
						value="Delivery"
						checked={shipping === "Delivery"}
						onChange={handleShippingChange}
					/>
					Delivery
				</label>
				<p>Shipping : {shipping}</p>
			</div>
		</>
	);
}
export default MyComponent;
