import React from "react";

const MainContainer = ({ children, bgColor }) => {
	return (
		<div
			className="xl:rounded-lg h-full  mx-auto py-10 xl:max-w-6xl xl:shadow-lg xl:mx-auto xl:p-10  "
			style={{ backgroundColor: `${bgColor}` }}
		>
			{children}
		</div>
	);
};

export default MainContainer;
