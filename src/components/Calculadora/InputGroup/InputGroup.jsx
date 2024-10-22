import React from "react";
import "./InputGroup.css";
export default function InputGroup(props) {
  const { id, label, type, placeholder, values, onChange } = props;
  if (type == "dropdown") {
    return (
      <div className="inputGroup">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
            console.log(e.target.value);
          }}
        >
          {values.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        min="0"
        type={type}
        onChange={(e) => {
          onChange(e.target.value);
          console.log(e.target.value);
        }}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
