import { useState, useEffect } from "react";

export function RoutinesShow(props) {
  const [routineExercises, setRoutineExercises] = useState([]);

  useEffect(() => {
    fetch(`/api/routines/${props.id}/routine_exercises`)
      .then((response) => response.json())
      .then((data) => setRoutineExercises(data));
  }, [props.id]);

  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          {routineExercises.map((routineExercise) => (
            <li key={routineExercise.id} className="list-group-item">
              <strong>{routineExercise.exercise.name}</strong>
              <p>Reps: {routineExercise.reps}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
