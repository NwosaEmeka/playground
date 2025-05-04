import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const LENGTH = 5;
  const [otp, setOtp] = useState(Array(LENGTH).fill(""));
  const [isAllNumsFilled, setIsAllNumsFilled] = useState(false);

  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleOnChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (index < LENGTH - 1 && value) {
      inputRef.current[index + 1]?.focus();
    }

    setIsAllNumsFilled(newOtp.every((num) => num !== ""));
  };

  const handleBackSpace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, LENGTH);
    if (!pasted) return;

    const newOtp = [...otp];

    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
      const input = inputRef.current[i];
      if (input) {
        input.value = pasted[i];
      }
    }

    const nextIndex = pasted.length < LENGTH ? pasted.length : LENGTH - 1;
    inputRef.current[nextIndex]?.focus();
    setOtp(newOtp);
    setIsAllNumsFilled(newOtp.every((num) => num !== ""));
  };

  return (
    <div>
      <div className="input-wrapper" onPaste={handleOnPaste}>
        {otp.map((num, index) => (
          <input
            key={index}
            className="input"
            type="text"
            value={num}
            maxLength={1}
            inputMode="numeric"
            ref={(el) => {
              if (el) inputRef.current[index] = el;
            }}
            onChange={(e) => handleOnChange(e.target.value.trim(), index)}
            onKeyDown={(e) => handleBackSpace(e, index)}
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
