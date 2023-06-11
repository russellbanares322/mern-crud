import React, { useState, useContext } from "react";
import Form from "../components/Form";
import Workouts from "../components/Workouts";
import { IoMdAdd } from "react-icons/io";
import WorkoutContext from "../context/WorkoutContext";

const Home = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const { selectedWorkout, setSelectedWorkout } = useContext(WorkoutContext);

  //Button for showing form
  const handleOpenFormModal = () => {
    setShowFormModal(true);
  };
  const handleCloseFormModal = () => {
    if (selectedWorkout === null) {
      setShowFormModal(false);
    } else {
      setSelectedWorkout(null);
    }
  };

  return (
    <div className="h-screen bg-[#F3F3F3]">
      <div className="flex  items-center justify-between">
        <p className="py-10 px-5 text-2xl font-medium text-black">Workouts</p>
        <button
          onClick={handleOpenFormModal}
          className="mr-5 cursor-pointer rounded-md bg-[#1A9082] p-3 text-white hover:bg-[#006e6f]"
        >
          <IoMdAdd />
        </button>
      </div>
      <Workouts />
      <Form
        handleCloseFormModal={handleCloseFormModal}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
      />
    </div>
  );
};

export default Home;
