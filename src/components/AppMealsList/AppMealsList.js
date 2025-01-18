import React from 'react'
//this deals with the food inputs + calories, and the delete button for each food
//this function is called when user inputs food + calories and will be displayed on to the page
//calling functions meals, deleteMealHandler from Mealpage
const AppMealsList = ({meals, deleteMealHandler})=> {

  //returns and displays list of food entries and calories
  //meals.map creates a new array which is populated by the the called results of the functions from Mealspage
  return (
    <div className="listMealsContainer">
    {meals.map((meal,index)=>(
        <div key={index} className="mealsInnerContainer">
            <div>{`${meal.mealName} : ${meal.calories}`}</div>
            <div className ="deleteButton">
                <button type="submit" onClick = { () => deleteMealHandler(meal.id)}> <span></span>Delete</button>
            </div>
        </div>
    ))}
    </div>
  );
};

export default AppMealsList;