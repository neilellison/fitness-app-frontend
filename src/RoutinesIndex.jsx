export function RoutinesIndex(props) {
  return (
    <div>
      <h1>All Routines</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.name}</h2>
          <p>{routine.description}</p>
          <button onClick={() => props.onShowRoutine(routine)}></button>
        </div>
      ))}
    </div>
  );
}
