import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="App">
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default App;
