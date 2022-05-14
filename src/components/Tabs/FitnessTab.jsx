import React from "react";
import { Link } from "react-router-dom";

const FitnessTab = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="text-center mt-40">
				<p className=" text-gray-300  text-xl">Personalized Plan</p>
				<p>
					After getting your plan,
					<br /> it will appear here.
				</p>
				<Link to="/get-started">
					<button className="bg-backgroundGreen text-white font-bold px-6 rounded-lg py-3 mt-4">
						Get your plan
					</button>
				</Link>
			</div>
		</div>
	);
};

export default FitnessTab;
