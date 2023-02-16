import React from 'react';
import styled from "styled-components";
 
const TodoTemplate = ({ children }) => {
  return (
    <StTodoTemplate>
      <App_title>My Todo List</App_title>
      <div className="content">{children}</div>
    </StTodoTemplate>
  );
};
 
export default TodoTemplate;


const StTodoTemplate = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  border-radius: 4px;
  overflow: hidden;
`; 

const App_title =  styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;