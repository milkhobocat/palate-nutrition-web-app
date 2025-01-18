import React from 'react'


//calling addMealsHandler, calories, mealName, setCalories, setMealName functions from Mealpage
const AppControlsInput = ({addMealsHandler, calories, mealName, setCalories, setMealName}) => {

     //when 'Enter' button is clicked, addMealsHandler will be called
  const onAddMealsClick = () =>{
    addMealsHandler();
 };

 //onChange, corresponding function will be excecuted
 //min = {0} to prevent value from going into a negative value as calorie's min value will always be 0
  return (
  
    <div className ="mealsInput">
     <h1>Let's add a meal!</h1>
    <p>Meal</p>
    <input type ="text" placeholder ="meal" value={mealName} onChange={(e)=>setMealName(e.target.value)}/>
    <p>Calorie Amount</p>
    <input type ="number" placeholder ="calories" value={calories} onChange={(e)=>setCalories(e.target.value)} min ={0}/>
    <button onClick ={onAddMealsClick}><span></span>Enter</button>
    </div>

  );
};

export default AppControlsInput;