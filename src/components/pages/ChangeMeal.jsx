import React, { useState } from "react";
import { searchResult } from "../../utils/data";
import MainContainer from "../container/MainContainer";
import PrimaryButton from "../../components/Buttons/PrimatryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../../store/Action";


const ChangeMeal = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState("");

	const [click, setClick] = useState(false)


	const navigate = useNavigate();

	const move = () => {
		if (click) {
			navigate('/fitness')
		}
		
	}


	


	

	

	

	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6  w-full text-sm mb-20">
				<div className="flex justify-between items-center mb-14">
					<p className="font-bold text-3xl ">Search Meal</p>
					<p
						className="cursor-pointer"
						onClick={() => {
							navigate(-1);
						}}
					>
						cancel
					</p>
				</div>
				<div className="bg-gray-200 flex  gap-3  rounded-lg border px-2 py-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<input
						className="w-full outline-none bg-transparent"
						placeholder="Search for an item"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				{/* search result */}
				{value.length > 3 && (
					<div className="bg-white rounded-lg shadow-lg p-4 mt-10">
						{searchResult.map((item, index) => (
							<>
								<div
									onClick={() => {
										dispatch(addData(item));
										setClick(true)
									}}
									key={index}
									className=" py-2 items-center flex w-full justify-between"
								>
									<img src={item.image} alt="ggggg" />
									<div className="">
										<p className="font-semibold text-md mb-2">
											{item.mealName}
										</p>
										<p className="text-gray-500">
											{item?.kcal} / {item?.grams}
										</p>
									</div>
									<input
										type="checkbox"
										className="ml-auto"
									/>
								</div>
								<hr className="" />
							</>
						))}
					</div>
				)}

				<div className="mt-20">
					<PrimaryButton
						text="+ Add item"
						bgColor="#00B386"
						textColor="#fff"
						onClick={move}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default ChangeMeal;
