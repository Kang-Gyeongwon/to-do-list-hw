const ToDoInput = () => {
  return (
    <div>
      <input
        id="todo_input"
        type="text"
        placeholder="할일을 입력하세요&#128393;"
      />
      <input id="todo_btn" type="submit" value="추가" />
    </div>
  );
};

export default ToDoInput;
