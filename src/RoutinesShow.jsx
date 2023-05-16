/* eslint-disable react/prop-types */

export function RoutinesShow(props) {
  console.log(props);

  return (
    <div className="card">
      <div>
        <h1>{props.routine.name}</h1>
        <h6>{props.routine.description}</h6>
      </div>
      <strong>
        <h2>Exercises</h2>
      </strong>
      {props.routine.exercises.map((exercise) => (
        <li key={exercise.id} className="list-group-item">
          <h3>{exercise.name}</h3>
          <img src={exercise.image_url} />
          <h4>{exercise.description}</h4>
          <h6>
            Video Example:{" "}
            <a href={exercise.video_url} target="_blank" rel="noopener noreferrer">
              {exercise.video_url}
            </a>
          </h6>
        </li>
      ))}
    </div>
  );
}
