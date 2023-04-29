import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [yavuz, setYavuz] = useState(0);
  const [tuba, setTuba] = useState(0);
  useEffect(() => {
    console.log("ilk kez render edildiğinde çalışır daha da çalışmaz.");
  }, []);

  useEffect(() => {
    console.log("Her zaman çalışır.");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır. yavuz değerin de bir değişiklik olduğunda çalışır."
    );
  }, [yavuz]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır. tuba değerin de bir değişiklik olduğunda çalışır."
    );
  }, [tuba]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır. yavuz veya tuba değerin de bir değişiklik olduğunda çalışır."
    );
  }, [yavuz, tuba]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setYavuz(yavuz + 1)}>Count ++</button>
        <div>Count:{yavuz}</div>
      </div>
      <div>
        <button onClick={() => setTuba(tuba + 1)}>Count ++</button>
        <div>Count:{tuba}</div>
      </div>
    </div>
  );
}

export default App;
