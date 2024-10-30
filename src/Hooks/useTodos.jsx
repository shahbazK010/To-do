import { useState, useEffect } from "react";

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
        priority: "low",
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos((todos) =>
      sortTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      )
    );
  };

  const cyclePriority = (id) => {
    const priorities = ["low", "medium", "high"];
    setTodos((todos) =>
      sortTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            const currentIndex = priorities.indexOf(todo.priority);
            const nextPriority =
              priorities[(currentIndex + 1) % priorities.length];
            return { ...todo, priority: nextPriority };
          }
          return todo;
        })
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // Helper function to sort todos
  const sortTodos = (todos) => {
    return todos.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  return { todos, addTodo, toggleComplete, cyclePriority, deleteTodo };
}
