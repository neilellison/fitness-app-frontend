import React from "react";

export function RoutinesIndex(props) {
  return (
    <div>
      <h1>Routines</h1>
      {props.routines.map((routine) => {
        const user = props.users.find((user) => user.id === routine.user_id);
        return (
          <div key={routine.id}>
            <h2>{routine.name}</h2>
            <p>{routine.description}</p>
            <p>Routine created by {user ? user.name : ""}</p>
            <button onClick={() => props.onShowRoutine(routine)}>Show Routine</button>
          </div>
        );
      })}
    </div>
  );
}