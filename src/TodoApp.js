import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import { ButtonHelp } from "./components/ButtonHelp";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
      {/* Dentro de Configurações → Usuários */}
      <ButtonHelp category="configuracoes" article="usuarios" />

      {/* Dentro de Financeiro → Faturas */}
      <ButtonHelp category="financeiro" article="faturas" />

      {/* Dentro de Financeiro → Reembolsos */}
      <ButtonHelp category="financeiro" article="reembolsos" />
    </div>
  );
}
