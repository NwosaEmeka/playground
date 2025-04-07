import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [nums, setNums] = useState(Array(5).fill(""));
  const [isAllNumsFilled, setIsAllNumsFilled] = useState(false);

  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    const allFilled = nums.every((num) => num !== "");
    setIsAllNumsFilled(allFilled);
  }, [nums]);

  const handleOnChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newNums = [...nums];
    newNums[index] = value.slice(-1);

    if (index < nums.length - 1 && newNums[index] !== "") {
      inputRef.current[index + 1]?.focus();
    }

    setNums(newNums);
  };

  const handleBackSpace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && nums[index] === "") {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <div className="input-wrapper">
        {nums.map((num, index) => (
          <input
            key={index}
            className="input"
            type="text"
            value={num}
            ref={(el) => {
              if (el) inputRef.current[index] = el;
            }}
            onChange={(e) => handleOnChange(e.target.value.trim(), index)}
            onKeyUp={(e) => handleBackSpace(e, index)}
          />
        ))}
      </div>
      <button type="button" disabled={!isAllNumsFilled}>
        Submit
      </button>
    </div>
  );
}

export default App;
