import pan from "../images/pan.png";
import can from "../images/can.png";
import pizza from "../images/pizza.png";
import avocado from "../images/avocado.png";
import bread from "../images/bread.png";
import cup2 from "../images/cup2.png";
import bolo from "../images/bolo.png";
import beans from "../images/beans.png";
import sausage from "../images/sausage.png";
import wich from "../images/wich.png";
import salad from "../images/salad.png";
import oat from "../images/oat.png";
import banana from "../images/banana.png";
import rice from "../images/rice.png";
import oat3 from "../images/oat3.png";
import cookie1 from "../images/cookie1.png";
import cookie2 from "../images/cookie2.png";
import toh from "../images/toh.png";





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

export const lunch = {
	title: "Lunch",
	mealArray: [
		{
			id: 1,
			mealName: "Chickpea and tuna salad",
			kcal: "130",
			grams: "10",
			image: toh,
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
	mealArray: [
		{
			id: 1,
			mealName: "Lemon Garlic Salmon",
			kcal: "130",
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

export const searchResult = [
		{
			id: 1,
			mealName: "Oatmeal ",
			kcal: "145 cals",
			grams: "1 cup of cooked",
			image: wich,
	},
	{
			id: 2,
			mealName: "Oatmeal",
			kcal: "97cals",
			grams: "1 packet(20g)",
			image: rice,
		},
	{
			id: 5,
			mealName: "Oatmeal with milk",
			kcal: "380 cals",
			grams: "100 g",
			image: oat3,
		},
	{
			id: 4,
			mealName: "Oatmeal Chocolate cookies",
			kcal: "112cals",
			grams: " 1 big",
			image: cookie1,
		},
	{
			id: 5,
			mealName: "Oatmeal Rasin cookies",
			kcal: "90cals",
			grams: " 1 small",
			image: cookie2,
		},
	{
			id: 6,
			mealName: "Oatmeal with banana",
			kcal: "166cals",
			grams: " 1 cup",
			image: banana,
		},
];






export const  newBreakFast = {
	title: "Breakfast",
	array: [
		{
			id: 1,
			mealName: "Oatmeal with banana ",
			kcal: "166",
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
