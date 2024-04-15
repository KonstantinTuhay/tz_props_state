import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

const ParentComponent = () => {
  const maxNum = 10,
    minNum = 0,
    name = "Pasha",
    defaultTxt = "text";
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState(defaultTxt);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const random = () => {
    setCount(Math.floor(minNum + Math.random() * (maxNum + 1 - minNum)));
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <label>
        Увеличить на 1 <button onClick={increase}>Увеличить</button>
      </label>
      <br />

      <label>
        Сбросить значение <button onClick={reset}>Сбросить</button>
      </label>
      <br />

      <label>
        Случайное значение от 1 до 10 <button onClick={random}>Рандом</button>
      </label>
      <br />

      <label>
        Уменьшить на 1 <button onClick={decrease}>Уменьшить</button>
      </label>
      <br />

      <p>{count}</p>

      <ChildComponent name={name} count={count} />

      <SiblingComponent txt={txt} setTxt={setTxt} />
    </div>
  );
};

export default ParentComponent;
