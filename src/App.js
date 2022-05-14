import "./App.css";
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import Onboard from "./components/pages/Onboard";
import ActionPrompt from "./components/pages/ActionPrompt";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Fitness from "./components/pages/Fitness";
import GetStarted from "./components/pages/GetStarted";
import Journey from "./components/pages/Journey";
import Nutrition from "./components/pages/Nutrition";
import NutritionPlan from "./components/pages/NutritionPlan";
import DayDetails from "./components/pages/DayDetails";
import AddData from "./components/pages/AddData";
import NutritionDetails from "./components/pages/NutritionDetails";

// steps
	 localStorage.setItem("cycleSteps", '10,000')
 localStorage.setItem("weeklySteps", '10,000')
localStorage.setItem("dailySteps", '10,000')
    
   //  time

   localStorage.setItem('weeklyDate', "03/02/202")
   localStorage.setItem('cycleDate', "03/02/2022")
   localStorage.setItem('dailyDate', "03/02/2022")
   


function App() {
	return (
		<div className="app">
			<Router>
        <Routes>
           <Route path="/" element={<Onboard />} />
           <Route path="/action" element={<ActionPrompt />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/signup" element={<SignUp />} />
           <Route path="/fitness" element={<Fitness />} />
           <Route path="/get-started" element={<GetStarted />} />
           <Route path="/journey" element={<Journey />} />
           <Route path="/nutrition" element={<Nutrition />} />
           <Route path="/nutrition-plan" element={<NutritionPlan />} />
           <Route path="/day-details" element={<DayDetails />} />
           <Route path="/add-data" element={<AddData />} />
           <Route path="/nutrition-details" element={<NutritionDetails />} />
        </Routes>
			</Router>
		</div>
	);
}

export default App;
