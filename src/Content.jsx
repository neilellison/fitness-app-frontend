import axios from "axios";
import { useState, useEffect } from "react";
import { RoutinesIndex } from "./RoutinesIndex";
import { RoutinesNew } from "./RoutinesNew";
import { RoutinesShow } from "./RoutinesShow";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { UsersShow } from "./UsersShow";

export function Content() {
  const [routines, setRoutines] = useState([]);
  const [users, setUsers] = useState([]);
  const [isRoutinesShowVisible, setIsRoutinesShowVisible] = useState(false);
  const [currentRoutine, setCurrentRoutine] = useState({});
  const [exercises, setExercises] = useState([]);

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  const handleCreateRoutine = (params, successCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      console.log(response.data);
      setRoutines([...routines, response.data]);
      successCallback();
    });
  };

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleShowRoutine = (routine) => {
    console.log("handShowRoutine", routine);
    setIsRoutinesShowVisible(true);
    setCurrentRoutine(routine);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRoutinesShowVisible(false);
    setCurrentRoutine(null);
  };

  useEffect(handleIndexRoutines, []);
  useEffect(handleIndexExercises, []);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/routines/new"
          element={<RoutinesNew onCreateRoutine={handleCreateRoutine} exercises={exercises} />}
        />
        <Route
          path="/"
          element={<RoutinesIndex users={users} routines={routines} onShowRoutine={handleShowRoutine} />}
        />
        <Route path="/users/:id" element={<UsersShow users={users} routines={routines} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      --------------
      <LogoutLink />
      --------------
      <Modal show={isRoutinesShowVisible} onClose={handleClose}>
        <RoutinesShow routine={currentRoutine} />
      </Modal>
    </div>
  );
}
