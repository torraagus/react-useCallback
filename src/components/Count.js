import React from "react";

function Count(props) {
    console.log(`Render Count component - ${props.name}`);
    return <div>{props.name}: {props.count}</div>;
}

export default React.memo(Count);
