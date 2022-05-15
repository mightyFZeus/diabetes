import React, { createContext, useState, useContext } from "react"
import avocado from '../images/avocado.png'
import bread from '../images/bread.png'
import cup2 from '../images/cup2.png'



export const OverHeat = createContext()


export const useAuth = () => {
    return useContext(OverHeat);
};



 export const OverProvider = ({ children }) => {
     const [breakfast, setBreakfast] = useState({
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
     });

     const updateArray = (item) => {

         console.log(item);
         const test = breakfast.array.push(item)

         setBreakfast({...test})


         console.log(breakfast.array);


    
         
     }



     

    const value = {
        breakfast,
        updateArray
    };
    return (
        <OverHeat.Provider value={value}>
            {children}
        </OverHeat.Provider>
    );
}