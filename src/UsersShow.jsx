/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function UsersShow() {
  const [user, setUser] = useState({});
  const [routines, setRoutines] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${params.id}.json`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`http://localhost:3000/routines/user/${params.id}.json`)
      .then((response) => {
        console.log(response.data);
        setRoutines(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  console.log(user.name);
  return (
    <div>
      <h1>{user.name}'s Routines</h1>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            <Link to={`/routines/${routine.id}`}>{routine.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
