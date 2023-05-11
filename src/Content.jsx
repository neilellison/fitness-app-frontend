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

export function Content() {
  const [routines, setRoutines] = useState([]);
  const [isRoutinesShowVisible, setIsRoutinesShowVisible] = useState(false);
  const [currentRoutine, setCurrentRoutine] = useState({});

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  const handleCreateRoutine = (params, successCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json", params);
    setRoutines([...routines, response.data]);
    successCallback();
  };

  const handleShowRoutine = (routine) => {
    console.log("handShowRoutine", routine);
    setIsRoutinesShowVisible(true);
    setCurrentRoutine(routine);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRoutinesShowVisible(false);
  };

  useEffect(handleIndexRoutines, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/routines/new" element={<RoutinesNew onCreateRoutine={handleCreateRoutine} />} />
        <Route path="/" element={<RoutinesIndex routines={routines} onShowRoutine={handleShowRoutine} />} />
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
