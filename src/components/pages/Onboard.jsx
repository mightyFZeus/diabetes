import React from "react";
import { useNavigate } from "react-router-dom";
import PrimatryButton from "../Buttons/PrimatryButton";
import MainContainer from "../container/MainContainer";
import logo from '../../images/logo.png'

const Onboard = () => {
    const navigate = useNavigate()
    const move = () => {
        navigate('/action')
    }
	return (
		<MainContainer bgColor="#00B386">
			<div className="bg-backgroundGreen px-6 h-screen flex-col justify-center items-center">
				<>
					<div className="mb-14">
				<img src={logo} alt="logo" className="block mx-auto mt-14" />

						<p className="text-white text-4xl mt-40 font-bold text-center">
							Go Healthy
						</p>
						<p className="text-white mt-10 px-4 text-center lg:w-[400px] mx-auto">
							Take charge of your health with personal fitness and
							nutrition plan, your own behavior change plan, chat
							with your coach, and more.
						</p>
					</div>
					<>
						<PrimatryButton text="Get Started" onClick={move} bgColor="#fff"  textColor="#00b386"/>
					</>
				</>
			</div>
		</MainContainer>
	);
};

export default Onboard;
