import React, { useState } from "react";
import Backbutton from "../Backbutton";
import MainContainer from "../container/MainContainer";
import DayItem from "../DayItem";
import run from "../../images/run-removebg.png";
import walk from "../../images/walk-removebg.png";
import cycle from "../../images/cycle-removebg.png";
import PrimatryButton from "../Buttons/PrimatryButton";
import { useNavigate } from "react-router-dom";

const Journey = () => {
	const dataTab = ["All", "Daily", "Weekly"];
	const [activeTab, setActiveTab] = useState(0);

	const navigate = useNavigate();

	const move = () => {
		navigate("/nutrition");
	};
	const dailySteps = localStorage.getItem("dailySteps")
	const cycleSteps = localStorage.getItem("cycleSteps")
	const weeklySteps = localStorage.getItem("weeklySteps")

	// time

		const dailyDate  = localStorage.getItem(" dailyDate")
	const cycleDate = localStorage.getItem("cycleDate")
	const weeklyDate = localStorage.getItem("weeklyDate")


	const allData = [
		{
			id: 1,
			type: "Walk",
			day: "Daily",
			action:dailySteps,
			image: walk,
			distance: "10,000 steps",
			date: dailyDate,
			current: "0.00km",
			total: "10 kilometres",
		},
		{
			id: 2,
			type: "Cycle",
			day: "Weekly",
			action: cycleSteps,
			image: cycle,
			distance: "10,000 mile",
			total: "10 mile",
			current: "1,000mil",
			date: cycleDate,
		},
		{
			id: 3,
			type: "Run",
			day: "Weekly",
			action: weeklySteps,
			image: run,
			distance: "10,000 KM",
			total: "10 kilometres",
			date:weeklyDate,
			current: "2,000 km",
		},
	];
	const dailyData = [
		{
			id: 1,
			type: "Walk",
			day: "Daily",
			action: dailySteps,
			image: walk,
			distance: "10,000 steps",
			data: "03/04/2022",
			current: "0.00km",
			total: "10 kilometres",
		},
	];

	const weeklyData = [
		{
			id: 2,
			type: "Cycle",
			day: "Weekly",
			action: cycleSteps,
			image: cycle,
			distance: "10,000 mile",
			total: "10 mile",
			current: "1,000mil",
			date: "03/04/2022",
		},
		{
			id: 3,
			type: "Run",
			day: "Weekly",
			action: weeklySteps,
			image: run,

			distance: "10,000 KM",
			total: "10 kilometres",
			date: "03/04/2022",
			current: "2,000 km",
		},
	];

	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6 h-screen w-full">
				<Backbutton text1='Back' text2="Skip" onClick={() =>navigate(-1)} />
				<p className="font-black text-4xl">Start your journey</p>
				<div className="rounded-xl w-full   px-4 py-2 flex justify-between gap-3 mt-10">
					{dataTab.map((item, index) => (
						<div
							onClick={() => setActiveTab(index)}
							key={index}
							className={
								activeTab === index
									? "px-2 py-3 bg-gray-300 w-full rounded-lg flex justify-center items-center cursor-pointer"
									: "px-2  py-3 w-full rounded-lg flex justify-center items-center cursor-pointer"
							}
						>
							<p className="my-auto text-center">{item}</p>
						</div>
					))}
				</div>
				<div>
					{activeTab === 0 &&
						allData.map((item, index) => (
							<DayItem data={item} key={index} />
						))}
					{activeTab === 1 &&
						dailyData.map((item, index) => (
							<DayItem data={item} key={index} />
						))}
					{activeTab === 2 &&
						weeklyData.map((item, index) => (
							<DayItem data={item} key={index} />
						))}
				</div>
				<div className="mt-40 lg:mt-72">
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

export default Journey;
