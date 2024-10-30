/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import ThemeToggle from "./components/ThemeToggle";
// App.jsx
import { useTodos } from "./Hooks/useTodos";
import useTheme from "./Hooks/useTheme";

function App() {
  const { todos, addTodo, toggleComplete, cyclePriority, deleteTodo } =
    useTodos();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Priority Todo List
          </h1>
          <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
        </div>

        <TodoForm onAdd={addTodo} />

        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleComplete}
              onCyclePriority={cyclePriority}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
