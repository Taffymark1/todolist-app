import React from "react";
import TodoTemplate from "../components/ui/TodoTemplate";
import TodoInsert from "../components/features/TodoInsert";
import TodoList from "../components/features/TodoList";

const Home = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default Home;
