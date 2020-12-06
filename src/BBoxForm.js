import React from "react";
import { useFormik } from "formik";
import calculateBBox from "./calculate-bbox";

export default function BBoxForm({ handleForm, initialPoint }) {
  const formik = useFormik({
    initialValues: initialPoint,
    onSubmit: (values) => {
      console.log(values);
      const bbox = calculateBBox(values, 25);
      console.log(bbox);
      handleForm(bbox);
    }
  });

  return (
    <form className="bbox-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="lat">Latitude</label>
      <input
        id="lat"
        name="lat"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lat}
      />
      <label htmlFor="lon">Longitude</label>
      <input
        id="lon"
        name="lon"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lon}
      />
      <button type="submit">Calculate</button>
    </form>
  );
}
