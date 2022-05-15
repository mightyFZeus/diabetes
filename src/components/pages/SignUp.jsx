import React, {useState} from "react";
import MainContainer from "../container/MainContainer";
import logo from "../../images/logo.png";
import PrimaryInput from "../PrimaryInput";
import PrimatryButton from "../Buttons/PrimatryButton";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const move = (e) => {
				e.preventDefault();

		if (email !== '' && username !== "" && password !== "" && confirmPassword !== "") {
		navigate('/fitness')
		
		} else {
				e.preventDefault();
            window.alert('Make sure all fields are filled up before submission')
	}
	}
	


	return (
		<MainContainer bg="#F2F2F7">
			<div className="px-6 h-screen w-full">
				<img src={logo} alt="logo" className="block mx-auto mt-14" />
				<p className="text-backgroundGreen text-center font-bold mt-6">
					Go Healthy
				</p>
				<div className="md:w-[400px] mx-auto w-full">
					<p className="text-2xl text-black">Create an Account</p>
                    <form>
						<PrimaryInput placeholder="Username" value={username} onChange={ (e) =>setUsername(e.target.value)}/>
					<PrimaryInput placeholder="Email"  value={email} onChange={ (e) =>setEmail(e.target.value)}/>
					<PrimaryInput placeholder="Password" value={password} onChange={ (e) =>setPassword(e.target.value)} />
					<PrimaryInput placeholder="Confirm Password"  value={confirmPassword} onChange={ (e) =>setConfirmPassword(e.target.value)}/>
					<div className="mt-20">
						<PrimatryButton
							text="Sign In"
							bgColor="#00B386"
								textColor="#fff"
		
								onClick={move}
						/>
					</div>
                    </form>
					<p className=" mt-5 text-center">
						Already have an account?
						<Link to="/signin">
							<span className="text-backgroundGreen ">
								Sign in
							</span>
						</Link>
					</p>
				</div>
			</div>
		</MainContainer>
	);
};

export default SignIn;
