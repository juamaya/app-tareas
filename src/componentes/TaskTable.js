import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => {
        return <TaskRow task={task} key={task.name} toggleTask={toggleTask} />;
      });
  };

  return (
    <table className="table table-success table-striped table-bordered border-3 border-dark">
      <thead>
        <tr className="  table-dark ">
          <th>Tareas </th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};