import React from "react";
import { Link } from "react-router-dom";

const DayItem = ({ data }) => {
	return (
		<Link  to={`/day-details`} state={{ data }}>
			<div
				className={
					data.id === 1
						? "flex justify-between  items-center mt-10 rounded-lg p-4 bg-boxGreen"
						: data.id === 2
						? "flex justify-between items-center  mt-10 rounded-lg p-4 bg-[#FFD062]"
						: "flex justify-between  items-center mt-10 rounded-lg p-4 bg-screenGreen"
				}
			>
				<img
					src={data.image}
					className="w-[150px] h-[150px] bg-transparent relative top-10"
					alt="data-img"
				/>
				<div>
					<p className="font-bold text-xl">{data.type}</p>
					<p>{data.day}</p>
					<p>{data.action}</p>
				</div>
			</div>
		</Link>
	);
};

export default DayItem;
