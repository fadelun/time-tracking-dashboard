import React, { useState } from "react";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Posts from "./data/data.json";
import Footer from "./components/Footer";

function App() {
  const [time, setTime] = useState("Weekly");

  const handleClick = (e) => {
    if (e.target.innerHTML == "Daily") {
      setTime("Daily");
    } else if (e.target.innerHTML == "Weekly") {
      setTime("Weekly");
    } else if (e.target.innerHTML == "Monthly") {
      setTime("Monthly");
    }
  };

  return (
    <>
      <main className="w-[326px] my-36 lg:w-3/4  mx-auto   lg:grid  lg:grid-cols-4 lg:grid-cols-[repeat(4,_minmax(260px,_1fr))]d  lg:grid-rows-2  gap-6">
        <Profile handleClick={handleClick} time={time} />
        <Dashboard time={time} Posts={Posts} />
        <Footer />
      </main>
    </>
  );
}

export default App;
