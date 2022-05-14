import React from "react";

const PrimatryButton = ({ text, onClick, bgColor, textColor }) => {
	return (
		<div className="flex justify-center items-center" onClick={onClick}>
			<button className=" w-full md:w-[400px] mx-auto py-2 text-center  rounded-lg" style={{ backgroundColor: `${bgColor}`, color:`${textColor}` }}>
				
				{text}
			</button>
		</div>
	);
};

export default PrimatryButton;
