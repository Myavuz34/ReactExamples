import { useState } from "react";
import "./App.css";

function App() {
  const nameSurname = "Mustafa Yavuz";
  const students = 1000;
  const isValid = false;
  const date = "date";
  const url = "https://picsum.photos/250/250";
  return (
    // <div>
    //   <h1>İsim soyisim: {nameSurname}</h1>
    //   <p>Öğrenci sayısı: {students}</p>
    //   <p>Doğru mu :{isValid}</p>
    //   <input type="text" />
    //   {isValid ? <p>Öğrenci sayısı</p> : <p> Kurs sayısı</p>}

    //   <input type={date} name="" id="" />
    //   <img src={url} alt="" />
    // </div>
    <div
      style={{
        width: "250px",
        height: "250px",
        backgroundColor: "blue",
        fontSize: "30px",
      }}
    ></div>
  );
}

export default App;
