import pan from "../images/pan.png";
import can from "../images/can.png";
import pizza from "../images/pizza.png";
import avocado from "../images/avocado.png";
import bread from "../images/bread.png";
import cup2 from "../images/cup2.png";
import bolo from "../images/bolo.png";
import sand from "../images/sand.png";
import beans from "../images/beans.png";
import sausage from "../images/sausage.png";
import wich from "../images/wich.png";
import salad from "../images/salad.png";
import oat from "../images/oat.png";

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
	array: [
		{
			id: 1,
			mealName: "Chickpea and tuna salad",
			kcal: "130",
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
		name: "Oatmeal",
		desc: "145 cals / 1 cup cooked",
		image: "",
	},
	{
		id: 2,
		name: "Oatmeal",
		desc: "87cals / 1 packet(20g)",
		image: "",
	},
	{
		id: 3,
		name: "Oatmeal",
		desc: "380cals / 100g",
		image: "",
	},
	{
		id: 4,
		name: "Oatmeal with milk",
		desc: "70 cals / 1 cup",
		image: "",
	},
	{
		id: 5,
		name: "Oatmeal chocolate cookies",
		desc: "112 cals / 1 big",
		image: "",
	},
	{
		id: 6,
		name: "Oatmeal Rasincookies",
		desc: "90 cals / 1 small",
		image: "",
	},
	{
		id: 7,
		name: "Oatmealwith banana",
		desc: "166cals / 1 cup",
		image: "",
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
