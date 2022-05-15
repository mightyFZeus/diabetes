import React from "react";
import MainContainer from "../container/MainContainer";
import logo from "../../images/logo.png";
import apple from "../../images/apple.png";
import google from "../../images/google.png";
import PrimatryButton from "../Buttons/PrimatryButton";
import { Link } from "react-router-dom";

const data = [
	{
		text: "Sign in with Apple",
		image: apple,
	},
	{
		text: "Sign in with Google",
		image: google,
	},
];

const ActionPrompt = () => {
	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6 h-screen w-full">
				<img src={logo} alt="logo" className="block mx-auto mt-14" />
				<p className="text-backgroundGreen text-center font-bold mt-6">
					Go Healthy
				</p>

				<div>
					<div className="mt-40 mx-auto  w-full">
						{data.map((item, index) => (
							<div
								className={
									index === 0
										? "flex justify-between  bg-black text-white px-6 py-4 rounded-lg mt-4 lg:w-[400px] mx-auto"
										: "flex justify-between bg-backBlue text-white px-6 py-4 rounded-lg mt-4 lg:w-[400px] mx-auto"
								}
								key={index}
							>
								<img src={item.image} alt="logo" />
								<p className="font-bold text-sm">{item.text}</p>
							</div>
						))}
					</div>
					<p className="mt-10 font-bold text-3xl text-gray-500 text-center">
						Or
					</p>

					<Link to='/signup'>
						<div className="my-10">
							<PrimatryButton
								text="Create an account"
								bgColor="#00B386"
								textColor="#fff"
							/>
						</div>
					</Link>
					<div>
						<p className="mt-4 text-center">
							Already have an account?{" "}
							<span className="font-bold text-backBlue">
								<Link to='/signin'>
									Sign in
								</Link>
							</span>
						</p>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default ActionPrompt;
