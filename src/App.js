import React, { useState } from "react";
import "./styles.css";
import BBoxForm from "./BBoxForm";
import BBoxDisplay from "./BBoxDisplay";

export default function App() {
  const defaultPoint = {
    lat: 47,
    lon: -122
  };
  const handleForm = (location) => {
    setBBox(location);
  };
  const [bbox, setBBox] = useState({ location: "not calculated" });
  return (
    <div className="App">
      <p>Bounding Box:</p>
      <BBoxForm handleForm={handleForm} initialPoint={defaultPoint} />
      <BBoxDisplay bbox={bbox} />
    </div>
  );
}
