import React, {useEffect, useState} from "react";
import {  lunch, dinner } from "../utils/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NutritionPlanItem = ({ data }) => {
	const {breakfast} = useSelector(state =>state)
	
	console.log(breakfast, 'eeeeeeeeeeeeeeeeeeeeeee');



	
	return (
		<Link to='/nutrition-details' state={data.id === 1 ?breakfast :data.id === 2?lunch : dinner}>
			<div
				className={
					data.id === 1
						? "rounded-lg p-4 bg-[#F98461] mt-10 flex justify-between items-center text-sm"
						: data.id === 2
						? "rounded-lg p-4 bg-[#FFD062] mt-10 flex justify-between items-center text-sm"
						: "rounded-lg p-4 bg-[#B3F4AA] mt-10 flex justify-between items-center text-sm"
				}
			>
				<img
					src={data.image}
					alt="meal-img"
					className="w-[150px] h-[150px] bg-transparent relative top-10"
				/>
				<div>
					<p className="text-xl font-bold">{data.mealType}</p>
					<p>{data.food}</p>
					<div className="flex gap-2">
						<div>
							<p className="font-bold ">kcal</p>
							<p className="mt-1 text-center">350</p>
						</div>
						<div className=" border-l-2 h-[50px] border-[#000]" />
						<div>
							<p className="font-bold ">Grams</p>
							<p className="mt-1 text-center">45</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default NutritionPlanItem;
