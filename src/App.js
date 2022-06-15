import React, { useState } from "react";
import Dropdown from "./Styles/Dropdown";

export default function App() {
  const [selected, setSelected] = useState("Choose...");
  console.log(selected);
  const options = ["React", "Vue", "Next"];
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Dropdown
        //need useState for selected & setSelected
        // options array list
        selected={selected}
        setSelected={setSelected}
        Items={options}
      />
    </div>
  );
}
