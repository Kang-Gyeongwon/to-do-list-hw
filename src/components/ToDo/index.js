import { useState } from "react";
import {
  Header,
  ToDoInputBox,
  completionStyle,
  incompletionStyle,
  listStyle,
} from "./styled";

const ToDo = () => {
  const [todos, updateTodo] = useState([]);
  const [todoId, updateTodoId] = useState(0);
  const [curText, updateText] = useState("");

  const handleClickSubmit = () => {
    if (todoId >= 0) {
      updateTodo([
        ...todos,
        {
          content: curText,
          id: todoId,
          completion: false,
        },
      ]);
      updateTodoId(todoId + 1);
      updateText("");
    }
  };
  const handleClickRemove = (removeId) => {
    const result = todos.filter((todo) => {
      return todo.id !== removeId;
    });
    updateTodo(result);
  };
  const handleClickCompletion = (currentId) => {
    const result = todos.map((todo) => {
      return todo.id !== currentId
        ? todo
        : { ...todo, completion: !todo.completion };
    });
    updateTodo(result);
  };
  return (
    <div>
      <Header>
        <ToDoInputBox>
          <input
            id="todo_input"
            type="text"
            placeholder="할일을 입력하세요&#128393;"
            style={{
              width: "85%",
              margin: "0",
              paddingLeft: "1.2%",
              border: "0",
            }}
            value={curText}
            onChange={(e) => updateText(e.target.value)}
          />
          <input
            id="todo_btn"
            type="submit"
            value="추가"
            style={{
              width: "15%",
              height: "40px",
              backgroundColor: "#E6E6FA",
              border: "none",
              marginLeft: "auto",
              borderRadius: "0",
              color: "#212529",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={handleClickSubmit}
          />
        </ToDoInputBox>
      </Header>
      <div id="body">
        <ul>
          {todos.map((todo, idx) => {
            return (
              <li key={idx} style={listStyle}>
                <span
                  style={todo.completion ? completionStyle : incompletionStyle}
                  onClick={() => handleClickCompletion(todo.id)}
                >
                  {todo.content}
                </span>
                <spna
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickRemove(todo.id)}
                >
                  &#128465;
                </spna>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
