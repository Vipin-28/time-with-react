import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isCharacter) str += "#$%^&*()?><:";
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }
    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isCharacter, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-node bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipBoard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />
            <label>Number</label>

            <input
              type="checkbox"
              defaultChecked={isCharacter}
              id="characterInput"
              onChange={() => {
                setIsCharacter((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
