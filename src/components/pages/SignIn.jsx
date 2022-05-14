import React, { useState } from "react";
import MainContainer from "../container/MainContainer";
import logo from "../../images/logo.png";
import PrimaryInput from "../PrimaryInput";
import PrimatryButton from "../Buttons/PrimatryButton";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
	const [modal, setModal] = useState(false);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate();

	const move = () => {
		setModal(false);
		navigate("/fitness");
	};

	const handleSubmit = (e) => {
		if (email !== "" && password !== "") {
				e.preventDefault();
		setModal(true);
		} else {
			e.preventDefault();
            window.alert('Make sure all fields are filled up before submission')
			
		}
	
	};
	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6 h-screen w-full">
				<img src={logo} alt="logo" className="block mx-auto mt-14" />
				<p className="text-backgroundGreen text-center font-bold mt-6">
					Go Healthy
				</p>
				<div className="md:w-[400px] mx-auto w-full">
					<p className="text-2xl text-black">Sign In</p>
					<form onSubmit={handleSubmit}>
						<PrimaryInput placeholder="Email" value={email} onChange={ (e) =>setEmail(e.target.value)}/>
						<PrimaryInput placeholder="Password" value={password} onChange={ (e) =>setPassword(e.target.value)} />
						<div className="mt-20">
							<PrimatryButton
								text="Sign In"
								bgColor="#00B386"
								textColor="#fff"
							/>
						</div>
					</form>
					<p className=" mt-5 text-center">
						Don't have and account?{" "}
						<Link to="/signup">
							<span className="text-backgroundGreen ">
								Sign up
							</span>
						</Link>
					</p>
					{modal && (
						<div
							className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center px-6 text-sm"
							style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
						>
							<div className="bg-white rounded-lg shadow-lg px-4 py-6 w-full md:w-96">
								<p className="my-6 text-2xl text-center font-bold">
									Your data and Privacy
								</p>
								<p className="text-center">
									Our Services offers ways to find and share
									useful information, such as when you opt in
									to sharing some of your information through
									our One Drop Ambassador’s feed. We encourage
									you to carefully consider the information
									you share. <p></p>
								</p>
								<p
									className="text-center text-backgroundGreen mt-10"
									onClick={() => setModal(false)}
								>
									I dont agree
								</p>
								<div className="mt-6">
									<PrimatryButton
										text="I agree"
										bgColor="#00B386"
										textColor="#fff"
										onClick={move}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</MainContainer>
	);
};

export default SignIn;
