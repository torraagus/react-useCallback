import React from "react";

function Button(props) {
    console.log(`Render Button component - ${props.name}`);
    return <button onClick={props.action}>{props.name}</button>;
}

export default React.memo(Button);
