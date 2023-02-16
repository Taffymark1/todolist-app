import React from 'react';
import styled from "styled-components";
import {
  MdUndo,
  MdDone,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleCheckedTodo } from "../../redux/modules/todos.js";
import { Link } from "react-router-dom";
 
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleCheckedTodo = (id) => {
    dispatch(toggleCheckedTodo(id));
  };


  return (
    <TodoListContainer>
      <StTodoList>
        <Working>working..🔥</Working>
        {todos.map((todo) => {
          if(!todo.checked) {
            return (
              <TodoListItem key={todo.id}>
                <Detail to={`/${todo.id}`} key={todo.id}>상세보기</Detail>
                <Title>{todo.title}</Title>
                <Text>{todo.text}</Text>
                <CheckboxList>
                  <Checkbox className={todo.checked ? "checked" : null}>
                    <Checkbox_check onClick={() => onToggleCheckedTodo(todo.id)}>{todo.checked ? <MdUndo /> : <MdDone />}</Checkbox_check>
                  </Checkbox>
                  <Checkbox_remove onClick={() => onDeleteTodo(todo.id)}>
                    <MdRemoveCircleOutline />
                  </Checkbox_remove>
                </CheckboxList>
              </TodoListItem>
            );
          } else {
            return null;
          }
        })}
      </StTodoList>
      <StTodoListDone>
        <Done>Done..!🎉</Done>
        {todos.map((todo) => {
          if(todo.checked) {
            return (
              <TodoListItem key={todo.id}>
                <Detail to={`/${todo.id}`} key={todo.id}>상세보기</Detail>
                <Title className={todo.checked ? "checked" : null}>{todo.title}</Title>
                <Text className={todo.checked ? "checked" : null}>{todo.text}</Text>
                <CheckboxList>
                  <Checkbox className={todo.checked ? "checked" : null}>
                    <Checkbox_check onClick={() => onToggleCheckedTodo(todo.id)}>{todo.checked ? <MdUndo /> : <MdDone />}</Checkbox_check>
                  </Checkbox>
                  <Checkbox_remove onClick={() => onDeleteTodo(todo.id)}>
                    <MdRemoveCircleOutline />
                  </Checkbox_remove>
                </CheckboxList>
              </TodoListItem>
            );
          } else {
            return null;
          }
        })}
      </StTodoListDone>
    </TodoListContainer>
  );
};
 
export default TodoList;

const TodoListContainer = styled.div`
  padding: 0 24px;
`;

const StTodoList = styled.div`
  float: left;
  margin-top: 15px;
  width: 550px;
  overflow-y: auto;
`; 
 
const Working = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const StTodoListDone = styled.div`
  float: right;
  margin-top: 15px;
  width: 550px;
  overflow-y: auto;
`;
 
const Done = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;


const TodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-start; // 세로 중앙 정렬
  flex-direction: column;
  background: white;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  // 엘리먼트 사이사이에 테두리를 넣어 줌
  & + & {
  border-top: 1px solid #dee2e6;
  }
`;

const Detail = styled(Link)`
  margin-inline-start: auto;
  text-decoration: none;
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: x-large;
  &.checked {
    color: #adb5bd;
    text-decoration: line-through;
  }
`;

const Text = styled.div`
  &.checked {
    color: #adb5bd;
    text-decoration: line-through;
  }
`;

const CheckboxList = styled.div`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  margin: auto;
  padding-top: 15px;
  gap: 40px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  svg {
    // 아이콘
    cursor: pointer;
    color: #22b8cf;
    font-size: 1.5rem;
    &:hover {
      color: green;
    }
  }
  // 체크되었을 때 보여 줄 스타일
  &.checked {
    svg {
      cursor: pointer;
      color: black;
      &:hover {
        color: gray;
      }
    }
  }
`;

const Checkbox_check = styled.div`
  height: 24px;
`; 

const Checkbox_remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;