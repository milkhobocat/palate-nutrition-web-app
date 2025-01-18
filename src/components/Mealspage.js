import React, {useState, useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";
import style from '../design/style.css'
import authlogo from '../design/authlogo.png'
import background3 from '../design/background3.png'
//import MealsContext from '../contexts/MealsContext'
import AppControlsCounter from './AppControls/AppControlsCounter'
import AppControlsDelete from './AppControls/AppControlsDelete'
import AppControlsInput from './AppControls/AppControlsInput'
import AppMealsList from './AppMealsList/AppMealsList'


//this is the main user page that the user will be redirected to once they have successfully logged in/ signed in
const Mealspage = () => {

  //these have no values yet as these will depend on the user's input, essentially empty values
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState(""); //empty string
  const [calories, setCalories] =useState(0); //since input for calories is number so 0
  const [openModal, setOpenModal] = useState(false);

  const addMealsHandler = () =>{
    //for debugging to check if user inputted food has gone through
    //console.log("food has been added! :D");
    //console.log(mealName);
    //console.log(calories);

   //when meals are added, they are put into an array 
   const oldMeals =[...meals];

   const meal = {
    mealName,
    calories,
    id: Math.floor(Math.random()* 1000),
   };
    
   const newMeals = oldMeals.concat(meal);

   //if statement to prevent user from entering empty details
   if(calories <= 0 || mealName === ""){
     alert("cannot enter empty details");//alert pops up
     //debugging
    // console.log("hi u reached this alert :)");
   }else{
  
     setMeals(newMeals);
   }


   setMealName("");
   setCalories(0);
  };
   
  //this const handler is in charge of deleting meal entries
   const deleteMealHandler = (id) => {
    //we get the current state
    //meals are spread out in an array
    const oldMeals = [...meals];
    //filter our meals
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
   };
  
   //this function deals with deleting ALL meal entries
   const deleteAllMeals = () => {
     //setting meals into an empty array
     setMeals([])
   }


   //this function deals with accumalating the total amount of calories 
   //creating array only containing calories
   //we add another method which will take in an accumulator
   //returns accumulator + value, where 0 is the initial value
   const total = meals
   .map((meal) => meal.calories)
   .reduce((acc,value) => acc + +value, 0);
   //debugging 
   console.log(total);
  


   //html part
   //we are calling our functions to the various .js files
  return (

    
       <div className="banner3">
        <div className="navbar2">
          <img src={authlogo} className="logo2"/>
        </div>
        <AppControlsCounter total={total}/>
        
        <div className = "calorieEntry">
          <AppControlsInput addMealsHandler={addMealsHandler} mealName={mealName} calories={calories}
           setMealName={setMealName} setCalories={setCalories}/>

          <AppControlsDelete deleteAllMeals = {deleteAllMeals}/>
          </div>

          <div className="listMeals">
           <AppMealsList meals={meals} deleteMealHandler = {deleteMealHandler} /> 
          </div>
       </div>
    
  );
};

export default Mealspage;

// //---------------------------------------------------------------------------------------
// import React, {useState, useEffect} from 'react'
// import style from '../design/style.css'
// import authlogo from '../design/authlogo.png'
// import background3 from '../design/background3.png'
// //import MealsContext from '../contexts/MealsContext'
// import AppControlsCounter from './AppControls/AppControlsCounter'
// import AppControlsDelete from './AppControls/AppControlsDelete'
// import AppControlsInput from './AppControls/AppControlsInput'
// import AppMealsList from './AppMealsList/AppMealsList'


// export default function Mealspage() {

//   //these have no values yes as these will depend on the user's input, essentially empty values
//   const [meals, setMeals] = useState([]);
//   const [mealName, setMealName] = useState(""); //empty string
//   const [calories, setCalories] =useState(0); //since input for calories is number so 0
//   const [openModal, setOpenModal] = useState(false);

//   const addMealsHandler = () =>{
//     //for debugging to check if user inputted food has gone through
//     //console.log("food has been added! :D");
//     console.log(mealName);
//     console.log(calories);

//    //when meals are added, they are put into an array 
//    const oldMeals =[...meals];

//    const meal = {
//     mealName,
//     calories,
//     id: Math.floor(Math.random()* 1000),
//    };
    
//    const newMeals = oldMeals.concat(meal);

//    //if statement to prevent user from entering empty details
//    if(calories <= 0 || mealName === ""){
//      alert("cannot enter empty details");
//      //debugging
//     // console.log("hi u reached this alert :)");
//    }else{
  
//      setMeals(newMeals);
//    }


//    setMealName("");
//    setCalories(0);
//   };

 
  

//   return (

    
//        <div className="banner3">
//         <div className="navbar2">
//           <img src={authlogo} className="logo2"/>
//           <ul>
//             <li><a href="/stats">My Stats</a></li>
//             <li><a href="/meals">My Meals</a></li>
//             <li><a href="/recipes">Recipes</a></li>
//           </ul>
//         </div>
//         <AppControlsCounter/>
        
//         <div className = "calorieEntry">
//           <AppControlsInput addMealsHandler={addMealsHandler} mealName={mealName} calories={calories}
//            setMealName={setMealName} setCalories={setCalories}/>

//           <AppControlsDelete/>
//           </div>

//           <div className="listMeals">
//            <AppMealsList meals={meals} />
//           </div>
//        </div>
    
//   )
// }