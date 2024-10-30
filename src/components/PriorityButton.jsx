/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const priorityColors = {
  low: "text-green-600 dark:text-green-400",
  medium: "text-yellow-600 dark:text-yellow-400",
  high: "text-red-600 dark:text-red-400",
};

function PriorityButton({ priority, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-sm font-medium rounded-lg ${priorityColors[priority]} bg-opacity-10 hover:bg-opacity-20 transition-colors`}
    >
      {priority}
    </button>
  );
}

export default PriorityButton;
