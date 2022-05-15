import React, { useState } from "react";
import Backbutton from "../Backbutton";
import MainContainer from "../container/MainContainer";
import DataInput from "../DataInput";
import { useLocation, useNavigate } from "react-router-dom";

const AddData = () => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [steps, setSteps] = useState("");
	const [modal, setModal] = useState(false);
	const location = useLocation();
	const item = location.state;
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		if (date !== "" && steps !== "") {
			e.preventDefault();
			const step = localStorage.setItem(
				item.item.data.id === 1
					? "dailySteps"
					: item.item.data.id === 2
					? "cycleSteps"
					: "weeklySteps",
				steps
			);

			const newDate = localStorage.setItem(
				item.item.data.id === 1
					? "dailyDate"
					: item.item.data.id === 2
					? "cycleDate"
					: "weeklyDate",
				date
			);

			console.log(step, newDate);
			setModal(true);
		} else {
			e.preventDefault();
			window.alert(
				"Make sure all fields are filled up before submission"
			);
		}
	};

	const onCancel = () => {
		setModal(false);
		navigate(-1);
	};
	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6 h-screen w-full text-sm">
				<Backbutton
					text1="Cancel"
					text2="Add"
					onClick2={handleSubmit}
					onClick={() => navigate(-1)}
				/>
				<form onSubmit={handleSubmit}>
					<div className="rounded-lg bg-white shadow-lg px-2 py-2">
						<DataInput
							placeholder="10 April 2022"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							text="Date"
						/>
						<hr />
						<DataInput
							placeholder="08:00"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							text="Time"
						/>
						<hr />

						<DataInput
							placeholder="10,000"
							value={steps}
							onChange={(e) => setSteps(e.target.value)}
							text={
								item.item.data.id === 1
									? "Steps"
									: item.item.data.id === 2
									? "Cycling"
									: "Running"
							}
						/>
					</div>
				</form>
				{modal && (
					<div
						className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center px-6 text-sm"
						style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
					>
						<div className="bg-white rounded-lg shadow-lg px-4 py-6 w-full md:w-96">
							<p className="my-6 text-2xl text-center font-bold">
								Add Data
							</p>
							<p className="text-center">
								You're manual steps has been added in your
								current Apple Health walking
							</p>
							<hr className="mt-4" />
							<div className="mt-3">
								<p
									className="font-bold text-center text-xl text-blue-500"
									onClick={onCancel}
								>
									OK
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainContainer>
	);
};

export default AddData;
