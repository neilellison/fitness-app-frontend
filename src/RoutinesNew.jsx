export function RoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Routine Name: <input name="routine name" type="text" />
        </div>
        <div>
          Routine Description: <input name="routine description" type="text" />
        </div>
        <div>
          Exercises: <input name="exercises" type="text" />
        </div>
        <div>
          Reps: <input name="reps" type="number" />
        </div>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}
