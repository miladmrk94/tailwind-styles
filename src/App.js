import React, { useState } from "react";
import Selector from "./Styles/Selector";

export default function App() {
  const [showItem, setShowItem] = useState();
  const sortHandler = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h3>milasd </h3>
      <p>miaasdasd aksjdhasd anbskjdhjkasn dajkshdjkasd</p>
      <Selector />
    </div>
  );
}
