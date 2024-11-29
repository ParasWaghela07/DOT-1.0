import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState("");
  const [isUpper, setIsUpper] = useState(false);
  const [isLower, setIsLower] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [isSym, setIsSym] = useState(false);
  const [len, setLen] = useState(0);

  const symbols = ['@', '$', '%', '^', '&', '*', '#', '~'];

  function shuffle(s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
      let rand = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[rand];
      arr[rand] = temp;
    }
    return arr.join('');
  }

  function generatePassword() {
    if (len < 4) {
      alert("Password length must be at least 4 characters!");
      return;
    }

    let s = "";
    let count = 0;

    if (isUpper) count++;
    if (isLower) count++;
    if (isNum) count++;
    if (isSym) count++;

    if (count === 0) {
      alert("Please select at least one option (uppercase, lowercase, number, or symbol)!");
      return;
    }

    const charsPerType = Math.floor(len / count);
    let remaining = len % count;

    if (isLower) {
      for (let i = 0; i < charsPerType + (remaining > 0 ? 1 : 0); i++) {
        let rand = Math.floor(Math.random() * 26);
        s += String.fromCharCode(97 + rand); // Random lowercase letter
      }
      remaining--;
    }

    if (isUpper) {
      for (let i = 0; i < charsPerType + (remaining > 0 ? 1 : 0); i++) {
        let rand = Math.floor(Math.random() * 26);
        s += String.fromCharCode(65 + rand); // Random uppercase letter
      }
      remaining--;
    }

    if (isNum) {
      for (let i = 0; i < charsPerType + (remaining > 0 ? 1 : 0); i++) {
        let rand = Math.floor(Math.random() * 10);
        s += rand; // Random digit
      }
      remaining--;
    }

    if (isSym) {
      const symbols = "!@#$%^&*()_+-=<>?"; 
      for (let i = 0; i < charsPerType + (remaining > 0 ? 1 : 0); i++) {
        let rand = Math.floor(Math.random() * symbols.length);
        s += symbols[rand]; // Random symbol
      }
    }

    s = shuffle(s);
    setPassword(s);
  }

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="input-section">
        <label>Enter Length of password (min 4)</label>
        <input type="number" value={len} onInput={(e) => setLen(e.target.value)} />

        <div className="checkbox-group">
          <input type="checkbox" id="lc" checked={isLower} onClick={() => setIsLower(!isLower)} />
          <label htmlFor="lc">Lowercase</label>

          <input type="checkbox" id="uc" checked={isUpper} onClick={() => setIsUpper(!isUpper)} />
          <label htmlFor="uc">Uppercase</label>

          <input type="checkbox" id="num" checked={isNum} onClick={() => setIsNum(!isNum)} />
          <label htmlFor="num">Numbers</label>

          <input type="checkbox" id="sym" checked={isSym} onClick={() => setIsSym(!isSym)} />
          <label htmlFor="sym">Symbols</label>
        </div>

        <button className="generate-btn" onClick={generatePassword}>Generate</button>
      </div>

      <div className="result">
        <p>{password}</p>
      </div>
    </div>
  );
}

export default App;
