import React from "react";

function Title() {
    console.log('Render Title component');
	return (
		<div>
			<h1>Counters</h1>
		</div>
	);
}

export default React.memo(Title);
