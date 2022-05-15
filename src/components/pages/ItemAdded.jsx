import React from "react";
import MainContainer from "../container/MainContainer";
import pan from "../../images/pan.png";
import can from "../../images/can.png";
import pizza from "../../images/pizza.png";
import Backbutton from "../Backbutton";
import { useNavigate } from "react-router-dom";

import { newBreakFast } from "../../utils/data";

const ItemAdded = () => {

	const navigate = useNavigate();





	return (
		<MainContainer>
			<div className="px-6 h-screen w-full text-sm mb-20">
				<Backbutton text1="Home" onClick={() => navigate(-1)} />

				<p className="text-5xl font-bold">{newBreakFast.title}</p>
				<img
					src={
						newBreakFast.title === "Breakfast"
							? pan
							: newBreakFast.title === "Lunch"
							? can
							: pizza
					}
					alt="product-mig"
					className="relative top-36 mb-10"
				/>
				
				<div
					className={
						newBreakFast.title === "Breakfast"
							? "rounded-lg p-4 bg-[#F98461] mt-10 flex justify-between items-center text-sm"
							: newBreakFast.title === "Lunch"
							? "rounded-lg p-4 bg-[#FFD062] mt-10 flex justify-between items-center text-sm"
							: "rounded-lg p-4 bg-[#B3F4AA] mt-10 flex justify-between items-center text-sm"
					}
				>
					<div className="w-full mt-14">
						{newBreakFast.array.map((item, index) => (
							<div key={index} className="w-full mt-10 ">
								<p className="font-bold text-xl mb-3">
									{item.mealName}
								</p>
								
								<div className="flex justify-between w-full">
									<img
										src={item.image}
										alt=""
										className="block mr-auto"
									/>
									<div className="flex gap-2">
										<div>
											<p className="font-bold ">kcal</p>
											<p className="mt-1 text-center">
												{item.kcal}
											</p>
										</div>
										<div className=" border-l-2 h-[50px] border-[#000]" />
										<div>
											<p className="font-bold ">Grams</p>
											<p className="mt-1 text-center">
												{item.grams}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default ItemAdded;
