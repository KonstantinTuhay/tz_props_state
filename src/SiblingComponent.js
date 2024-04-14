import React, { useState } from "react";

const SiblingComponent = ({ defaultTxt }) => {
  const [txt, setTxt] = useState(defaultTxt);

  const changeTxt = () => {
    setTxt("REDEV");
  };

  return (
    <div>
      <p>Текущий текст: {txt}</p>
      <button onClick={changeTxt}>Изменить текст</button>
    </div>
  );
};

export default SiblingComponent;
