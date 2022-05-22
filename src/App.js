import React, { useState, useEffect } from "react";
import "./App.css";
import DiaryEditer from "./DiaryEditer";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "홍길동",
    content: "내용1",
    emotion: 2,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이순신",
    content: "내용2",
    emotion: 1,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "유여진",
    content: "내용3",
    emotion: 4,
    create_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditer />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
