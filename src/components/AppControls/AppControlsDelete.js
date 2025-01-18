import React from 'react'

//---------------this is the delete function for the ALL food items in meals page--------------
//passing in deleteAllMeals from Mealspage
//when 'Delete all entries' button is pressed, onClick executes deleteAllMeals function
const AppControlsDelete = ({deleteAllMeals}) => {
  return (
         <div className ="deleteButton">
          <button type="submit" onClick={()=> deleteAllMeals ()}><span></span>Delete All Entries</button>
          </div>
  );
};

export default AppControlsDelete;