import React from 'react'

//----------this is the TOTAL Calorie counter function for the meals page------------
//calling total from Mealspage
//returning total value
const AppControlsCounter = ({total}) => {
  return (
    <div className="calorieCounter">
          <p>calorie count:</p>
          <b>{total}</b><br/>
        </div>
  );
};

export default AppControlsCounter;