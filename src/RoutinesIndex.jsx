import { Link } from "react-router-dom";

export function RoutinesIndex(props) {
  return (
    <div>
      <h1>Routines</h1>
      <div className="routine-container">
        {props.routines.map((routine) => {
          const user = props.users.find((user) => user.id === routine.user_id);
          return (
            <div key={routine.id} className="routine">
              <h2>{routine.name}</h2>
              <p>{routine.description}</p>
              <p>Routine created by: </p>
              <button onClick={() => props.onShowRoutine(routine)}>Show Routine</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
