import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Backbutton from "../Backbutton";
import MainContainer from "../container/MainContainer";
import trophy from "../../images/Cup.png";
import kilo from '../../images/kilo.png'
const DayDetails = () => {
	const location = useLocation();
	const item = location.state;
    const navigate = useNavigate()
    
    const move = () => {
        navigate("/add-data", { state: { item } })
    }
	const dailySteps = localStorage.getItem("dailySteps");
	const cycleSteps = localStorage.getItem("cycleSteps");
    const weeklySteps = localStorage.getItem("weeklySteps");


    	const dailyDate = localStorage.getItem("dailyDate");
	const cycleDate = localStorage.getItem("cycleDate");
    const weeklyDate = localStorage.getItem("weeklyDate");
    console.log(dailyDate);
    
    const kiloArray  = [
        {id:1, image:kilo, text:"April Challenge 2020"},
        {id:2, image:kilo, text:"April Challenge 2020"},
        {id:3, image:kilo, text:"April Challenge 2020"}
    ]

	return (
		<MainContainer>
			<div className="px-6 h-screen w-full text-sm">
				<Backbutton text1="Fitness" onClick={() => navigate(-1)} text2="Add Data" onClick2={move} />
				<div className="flex justify-between items-end">
					<img
						src={item?.data?.image}
						alt=""
						className="h-[150px]  w-[150px]  relative top-8"
					/>
					<p className="text-gray-300 text-4xl font-bold">
						{item?.data?.type}
					</p>
				</div>
				<div
					className={
						item.data.id === 1
							? "bg-[#B3F4AA] py-10 px-6 rounded-2xl "
							: item.data.id === 2
							? "bg-[#FFD062] py-10 px-6 rounded-2xl "
							: "bg-screenGreen py-10 px-6 rounded-2xl "
					}
				>
					<div className="w-full md:w-[400px] mx-auto">
						<div className="flex justify-around">
							<img src={trophy} alt="trophy" />
							<p className="text-3xl font-bold">
								{item.data.id === 1
									? `${dailySteps} steps`
									: item.data.id === 2
									? `${cycleSteps} kilometers`
									: `${weeklySteps} kilometers`}
							</p><span></span>
						</div>
						<div className="flex justify-around mt-4">
							<div>
								<p className="text-left font-bold">
									Daily Plan
								</p>
							</div>
							<p>{item.data.id === 1 ? dailyDate : item.data.id === 2 ? cycleDate:weeklyDate}</p>
						</div>
						{/* total */}
						<div className="flex justify-around mt-4">
							<div>
								<p className="text-left font-bold mr-auto">
									Total
								</p>
							</div>
							<p>{item.data.total}</p>
						</div>
						{/* current */}
						<div className="flex justify-around mt-4">
							<div>
                                <p className="text-left font-bold">{  item.data.id === 1 ? "Walking" :item.data.id === 2 ? "Cycling" : 'Running'}</p>
							</div>
							<p>{item.data.current}</p>
						</div>
					</div>
				</div>

				{/* awards section */}
				<section>
					<div className="flex justify-between font-bold mt-6">
						<p>Unlock Rewards</p>
                        <p className="text-blue-500">See All Rewards</p>
                       
                    </div>
                     <div className="flex justify-between">
                            {kiloArray.map((item, index) => (
                                <div key={index}>
                                    <img src={item.image} className="h-[150px] w-[150px]" alt="kilo-img" />
                                    <p className="text-center">{ item.text }</p>
                                </div>
                            ))}
                        </div>
				</section>
			</div>
		</MainContainer>
	);
};

export default DayDetails;
