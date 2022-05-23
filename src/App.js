import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import DiaryEditer from "./DiaryEditer";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditer onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
