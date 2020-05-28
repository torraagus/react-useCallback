import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parent() {
	console.log("Rendering Parent component");
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	const incrementCount = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	const incrementCount2 = useCallback(() => {
		setCount2(count2 + 1);
	}, [count2]);

	return (
		<div>
			<Title />
			<Count count={count} name="Count" />
			<Button action={incrementCount} name="Increment count" />
			<Count count={count2} name="Count2" />
			<Button action={incrementCount2} name="Increment count2" />
		</div>
	);
}

export default Parent;
