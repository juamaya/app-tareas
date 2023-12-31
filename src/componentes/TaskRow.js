import React from "react";

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <div>
          <input
            name="inputCheck"
            type="checkbox"
            className="mx-3"
            checked={task.done}
            onChange={() => {
              toggleTask(task);
            }}
          />{" "}
          Done
        </div>
      </td>
    </tr>
  );
};