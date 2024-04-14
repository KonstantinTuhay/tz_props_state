import React from "react";

const ChildComponent = ({ name, count }) => {
  return (
    <div>
      Hello {name}!!
      <br />
      <p>Текущее значение счётчика {count}</p>
    </div>
  );
};

export default ChildComponent;
