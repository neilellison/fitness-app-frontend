/* eslint-disable react/prop-types */
import { useState } from "react";

export function RoutinesNew(props) {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [routineExercises, setRoutineExercises] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine({ ...Object.fromEntries(params), exercises: routineExercises });
  };

  const handleAddExercise = () => {
    if (!selectedExercise) return;
    setRoutineExercises([...routineExercises, selectedExercise]);
    setSelectedExercise("");
  };

  return (
    <div>
      <h1>New Routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Routine Name: <input name="routine_name" type="text" />
        </div>
        <div>
          Routine Description: <input name="routine_description" type="text" />
        </div>
        <div>
          <label htmlFor="exercises">Exercises:</label>
          <select
            id="exercises"
            name="exercises"
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
          >
            <option value="">Select an exercise</option>
            {props.exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddExercise}>
            Add Exercise
          </button>
        </div>
        <div>
          <ul>
            {routineExercises.map((exerciseId) => {
              const exercise = props.exercises.find((ex) => ex.id === exerciseId);
              return <li key={exercise.id}>{exercise.name}</li>;
            })}
          </ul>
        </div>
        <div>
          Reps: <input name="reps" type="number" />
        </div>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}
