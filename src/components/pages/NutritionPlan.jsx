import React from "react";
import MainContainer from "../container/MainContainer";
import Backbutton from "../Backbutton";

import NutritionPlanItem from "../NutritionPlanItem";
import PrimatryButton from "../Buttons/PrimatryButton";
import { nutritionData } from "../../utils/data";
import { useNavigate } from 'react-router-dom'


const NutritionPlan = () => {
    const navigate = useNavigate()

    const move = () => {
        navigate('/fitness')
    }
	
	return (
		<MainContainer>
			<div className="px-6 h-screen w-full mb-20">
				<Backbutton />
				<p className="font-black text-4xl">Nutrition Plan</p>
				<div>
					{nutritionData.map((item, index) => (
						<NutritionPlanItem data={item} key={index} />
					))}
				</div>
				<div className="mt-40  lg:mt-40 mb-20">
					<PrimatryButton
						text="save"
						bgColor="#00B386"
						textColor="#fff"
						onClick={move}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default NutritionPlan;
