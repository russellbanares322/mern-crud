import React, { useState } from "react";
import Form from "../components/Form";
import Workouts from "../components/Workouts";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  //Button for showing form
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="h-screen bg-[#F3F3F3]">
      <div className="flex  items-center justify-between">
        <p className="py-10 px-5 text-2xl font-medium text-black">Workouts</p>
        <button
          onClick={handleToggleForm}
          className="mr-5 cursor-pointer rounded-md bg-[#1A9082] p-3 text-white hover:bg-[#006e6f]"
        >
          <IoMdAdd />
        </button>
      </div>
      <Workouts />
      {showForm && <Form handleToggleForm={handleToggleForm} />}
    </div>
  );
};

export default Home;
