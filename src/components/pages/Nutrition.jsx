import React from "react";
import MainContainer from "../container/MainContainer";
import nutrition from "../../images/nutrition.png";
import PrimatryButton from "../Buttons/PrimatryButton";
import { useNavigate } from "react-router-dom";

const Nutrition = () => {
    const navigate = useNavigate()

    const move = () => {
        navigate('/nutrition-plan')
	}
	

	
	return (
		<MainContainer>
			<div className="px-6 h-screen w-full">
				<div className="  h-52 rounded-lg px-6 bg-[#F98461]">
					<img
						src={nutrition}
						alt="woman"
						className=" block ml-auto  h-[200px]"
						style={{ marginLeft: "auto" }}
					/>
					<p className="font-black text-4xl text-white relative bottom-32">
						Nutrition plan you will enjoy
					</p>
				</div>
				<div className="flex justify-between mt-20">
					<div>
						<p className="font-bold text-2xl sm:text-4xl">kcal</p>
						<p className="mt-3 text-center">350</p>
					</div>
					<div className=" border-l-2 h-[30px] border-backgroundGreen" />
					<div>
						<p className="font-bold text-2xl sm:text-4xl">Grams</p>
						<p className="mt-3 text-center">45</p>
					</div>
                </div>
                	<div className="mt-40 mb-20 lg:mt-72">
							<PrimatryButton
								text="Get Started"
								bgColor="#00B386"
                            textColor="#fff"
                            onClick={move}
							/>
						</div>
			</div>
		</MainContainer>
	);
};

export default Nutrition;
