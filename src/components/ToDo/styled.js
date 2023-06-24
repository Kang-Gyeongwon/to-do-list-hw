import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ToDoInputBox = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #dcdcdc;
  padding: 0;
  margin: 0 auto;
`;

export const listStyle = {
  listStyle: "lower-roman",
  textAlign: "left",
  marginBottom: 5,
  marginRight: "2.5%",
  fontSize: 18.5,
};

export const completionStyle = {
  color: "#D3D3D3",
  cursor: "pointer",
  marginRight: "2%",
};
export const incompletionStyle = {
  color: "black",
  cursor: "pointer",
  marginRight: "2%",
};
