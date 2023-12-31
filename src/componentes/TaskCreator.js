import Swal from "sweetalert2";
import { useState } from "react";

export const TaskCreator = (props) => {
  // console.log(props)
  const [newTaskName, setnewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);

    // localStorage.setItem("tasks", newTaskName);

    Swal.fire({
      icon: "success",
      title: "Your task has been saved",
      position: "top-end",
      width: "300",
      background: "#234567",
      color: "#fff",
      showConfirmButton: false,
      timer: 1500,
    });

    setnewTaskName("");
  };

  return (
    <div className="formulario  bg-primary p-2   ">
      <h2 className="text-white">Task Creator</h2>
      <form onSubmit={handleSubmit} className="col-md-6    ">
        <input
          name="inputTask"
          type="text"
          placeholder="Enter new task"
          value={newTaskName}
          onChange={(e) => setnewTaskName(e.target.value)}
          className="form-control p-2 mb-3 "
        />

        <button className="p-2  btn btn-success">Save Task</button>
      </form>
    </div>
  );
};