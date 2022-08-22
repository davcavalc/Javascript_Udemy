import React from "react";

function Lista({ items }) {
	return (
		<>
			{items.map((item) => (
				<React.Fragment>
                    <p>{item}</p>
                </React.Fragment>
			))}
		</>
	);
}

export default Lista;
