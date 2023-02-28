import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Workouts from "../components/Workouts";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  //Button for showing form
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  //Fetching of workout data
  const handleFetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/workouts");
      const jsonResponse = await response.json();

      if (response.ok) {
        setWorkoutData(jsonResponse);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

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
      {isLoading && <p className="text-center text-2xl">Loading...</p>}
      <div className="mr-4 flex flex-row flex-wrap items-center px-5">
        {workoutData &&
          workoutData.map((workout) => (
            <Workouts key={workout._id} workout={workout} />
          ))}
      </div>
      {showForm && <Form handleToggleForm={handleToggleForm} />}
    </div>
  );
};

export default Home;
