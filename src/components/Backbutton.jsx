import React from "react";

const Backbutton = ({onClick, onClick2, text1, text2}) => {
	return (
		<div className="flex justify-between items-center text-sm font-bold mb-6 text-blue-500">
			<div onClick={onClick} className="flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				<p >{ text1}</p>
            </div>
			<p onClick={onClick2}>{text2}</p>
		</div>
	);
};

export default Backbutton;
