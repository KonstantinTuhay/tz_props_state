import React from "react";

const SiblingComponent = ({ txt, setTxt }) => {
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
