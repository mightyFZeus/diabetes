import pan from "../images/pan.png";
import can from "../images/can.png";
import pizza from "../images/pizza.png";
import oat from '../images/oat.png'
import bread from '../images/bread.png'
import cup2 from '../images/cup2.png'
import bolo from '../images/bolo.png'
import sand from '../images/sand.png'
import beans from '../images/beans.png'
import sausage from '../images/sausage.png'
import wich from '../images/wich.png'
import salad from '../images/salad.png'

export const nutritionData = [
	{
		id: 1,
		mealType: "BreakFast",
		food: "Toast with egg & avacado",
		image: pan,
	},
	{
		id: 2,
		mealType: "Lunch",
		food: "Tuna, Ham sandwich& Fish",
		image: can,
	},
	{
		id: 3,
		mealType: "Dinner",
		food: "Salmon, Salad & Sandwich",
		image: pizza,
	},
];

export const breakFast = {
	title: "Breakfast",
	array: [
		{
			id: 1,
			mealName: "Avocado & Eggs/Grilled tomatoes",
			kca: "120",
			grams: "20",
			image: oat,
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

export const lunch = {
	title: "Lunch",
	array: [
		{
			id: 1,
			mealName: "Chickpea and tuna salad",
			kca: "130",
			grams: "10",
			image: sand,
		},
		{
			id: 2,
			mealName: "Ham salad sandwich",
			kcal: 120,
			grams: 25,
			image: bolo,
		},
		{
			id: 3,
			mealName: "Tea/coffee with plant based milk ",
			kcal: 120,
			grams: 15,
			image: beans,
		},
	],
};

export const dinner = {
	title: "Dinner",
	array: [
		{
			id: 1,
			mealName: "Lemon Garlic Salmon",
			kca: "130",
			grams: "20",
			image: sausage,
		},
		{
			id: 2,
			mealName: "Mexican Chopped Salad",
			kcal: 120,
			grams: 15,
			image: salad,
		},
		{
			id: 3,
			mealName: "Healthy Sandwich ",
			kcal: 120,
			grams: 15,
			image: wich,
		},
	],
};
