import React from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const name = useAppSelector((state) => state.users.name);
  const dispatch = useAppDispatch();

  return <div className="App">Hello World</div>;
}

export default App;
