import { ADD_DATA } from "./Action";
import avocado from '../images/avocado.png'
import bread from '../images/bread.png'
import cup2 from '../images/cup2.png'


const initialState = {
	title: "Breakfast",
	mealArray: [
		{
			id: 1,
			mealName: "Avocado & Eggs/Grilled tomatoes",
			kcal: "120",
			grams: "20",
			image: avocado,
		},
		{
			id: 2,
			mealName: "Toasted brown bread",
			kcal: 120,
			grams: 15,
			image: bread,
		},
		{
			id: 3,
			mealName: "Tea/coffee with plant based milk ",
			kcal: 120,
			grams: 15,
			image: cup2,
		},
	],
};


export const breakfastReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DATA:
            const oldArray = state.mealArray.slice(1)
            console.log(oldArray, 'OLD');
            console.log(payload,'Payload');
            return {
                ...state,
               mealArray:[payload, ...oldArray]
            }
            
       
    
        default:
         return state
    }
    
  
}