/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

function TodoItem({ todo, onToggle, onCyclePriority, onDelete }) {
  const priorityColors = {
    low: "text-green-600 dark:text-green-400",
    medium: "text-yellow-600 dark:text-yellow-400",
    high: "text-red-600 dark:text-red-400",
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 priority-${todo.priority} transform transition-all duration-200 hover:scale-[1.02]`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5"
      />
      <span
        className={`flex-1 ${
          todo.completed
            ? "line-through text-gray-500"
            : "text-gray-800 dark:text-white"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onCyclePriority(todo.id)}
        className={`px-3 py-1 text-sm font-medium rounded-lg ${
          priorityColors[todo.priority]
        } bg-opacity-10 hover:bg-opacity-20 transition-colors`}
      >
        {todo.priority}
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
