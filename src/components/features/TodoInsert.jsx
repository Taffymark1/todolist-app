import React, { useState, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from "styled-components";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from '../../redux/modules/todos';
 
const TodoInsert = () => {
  const id = nextId();
  const dispatch = useDispatch();

  const inputTitleRef = useRef(); //ref 객체 생성
  const inputTextRef = useRef(); //ref 객체 생성

  const [todo, setTodo] = useState({
    id: id,
    title: "",
    text: "",
    checked: false,
  });

  const onReset = () => {
    setTodo({
      id: id,
      title: "",
      text: "",
      checked: false,
    });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
 
  const onSubmit = (e) => {
      if(todo.title.trim() === ""){
        alert("제목을 입력해주세요!");
        inputTitleRef.current.focus();
        return e.preventDefault();
      } else if(todo.text.trim() === "") {
        alert("할 일을 입력해주세요!");
        inputTextRef.current.focus();
        return e.preventDefault();
      }
      dispatch(addTodo({...todo, id}));
      onReset();

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    };

  return (
    <StTodoInsert onSubmit={onSubmit}>
      <input
        type="text"
        name='title'
        value={todo.title}
        onChange={onChange}
        placeholder="제목을 입력하세요"
        ref={inputTitleRef} // 접근할 DOM에 ref 값 설정
      />
      <input
        type="text"
        name='text'
        value={todo.text}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
        ref={inputTextRef} // 접근할 DOM에 ref 값 설정
      />
      <button type="submit">
        <MdAdd />
      </button>
    </StTodoInsert>
  );
};
 
export default TodoInsert;

const StTodoInsert = styled.form`
  display: flex;
  background: #495057;
  input {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    // 버튼을 제외한 영역을 모두 차지하기
    flex: 1;
  }
  button {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;
  