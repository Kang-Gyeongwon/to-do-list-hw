import { Header, ToDoInputBox } from "./styled";

const ToDoInput = () => {
  const handleClickSubmit = (e) => {
    const todo = document.getElementById("todo_input").value;
    return todo;
  };
  return (
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
          }}
          onClick={handleClickSubmit}
        />
      </ToDoInputBox>
    </Header>
  );
};

export default ToDoInput;
