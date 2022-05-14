import React from "react";
import MainContainer from "../container/MainContainer";
import woman2 from "../../images/test.png";
import PrimatryButton from "../Buttons/PrimatryButton";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
    const navigate = useNavigate()

    const move = () => {
        navigate('/journey')
    }
	return (
		<MainContainer bgColor="#B3F4AA">
			<div className="px-6 h-screen w-full text-sm">
				<div className="bg-boxGreen  h-52 rounded-lg px-6">
					<img
						src={woman2}
						alt="woman"
						className=" block ml-auto  h-[300px]"
						style={{ marginLeft: "auto" }}
					/>
					<p className="font-black text-4xl text-white relative bottom-60">
						Fitness plan you will enjoy
					</p>

					<div className="flex justify-between">
						<div>
							<p className="font-bold text-2xl sm:text-4xl">Steps</p>
							<p className="mt-3 text-center">10000</p>
						</div>
						<div className=" border-l-2 h-[30px] border-[#F98461]" />
						<div>
							<p className="font-bold text-2xl sm:text-4xl">Run</p>
							<p className="mt-3 text-center">5km</p>
						</div>
                        <div className=" border-l-2 h-[30px] border-[#F98461]" />
                        	<div >
							<p className="font-bold text-2xl sm:text-4xl">Cycle</p>
							<p className="mt-3 text-center">3mil</p>
						</div>
                    </div>
                    	<div className="mt-20">
							<PrimatryButton
								text="Get Started"
								bgColor="#00B386"
                            textColor="#fff"
                            onClick={move}
							/>
						</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default GetStarted;
