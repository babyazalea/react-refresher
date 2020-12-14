import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import "./App.css";

const App = () => {
  /*
  Core concept of React => State!
  : React dose not re-render this jsx code and therefore the real UI,
    all the time whenever some event is triggered anywhere in the app.
    So just i click some button like in NewGoal.js, dose not mean that
    React will re-render the entire screen.

    we have to tell React when it should re-render and we do so
    by using a concept State!

    Whenever you update the state-snapshot-, React to do will two things.
    : first, it will update the internally stored state data,
      second, it will call this(App) component function again and excute
      the entire fucntion hence also re-render this jsx code.
  */
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  // const courseGoals = [
  //   { id: "cg1", text: "Finish the Course" },
  //   { id: "cg2", text: "Learn all about the Course Main Topic" },
  //   { id: "cg3", text: "Help other students in the Course Q&A" },
  // ];

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
