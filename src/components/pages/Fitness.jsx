import React, { useState } from "react";
import MainContainer from "../container/MainContainer";
import profile from "../../images/Profile.png";
import FitnessTab from "../Tabs/FitnessTab";
import NutritionTab from "../Tabs/NutritionTab";

const Fitness = () => {
	const dataTab = [
		{ id: 1, text: "Fitness" },
		{ id: 2, text: "Nutrition" },
	];
	const [activeTab, setActiveTab] = useState(0);
	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6 h-screen w-full text-sm">
				<div className="flex justify-between">
					<p className="font-black text-3xl">Hi John</p>
					<img src={profile} alt="profile-img" />
				</div>
				<div className="rounded-xl w-full bg-gray-300 h-10 px-4 py-2 flex justify-between gap-3 mt-10">
					{dataTab.map((item, index) => (
                        <div
                            onClick={() =>setActiveTab(index)}
							key={index}
							className={
								activeTab === index
									? "px-2 bg-white w-full rounded-lg flex justify-center items-center"
									: "px-2  w-full rounded-lg flex justify-center items-center"
							}
						>
							<p className="my-auto text-center">{item.text}</p>
						</div>
					))}
				</div>
				{activeTab ===0 && <FitnessTab />}
				{activeTab ===1 && <NutritionTab />}
			</div>
		</MainContainer>
	);
};

export default Fitness;
