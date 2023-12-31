
import React from "react";
import Swal from "sweetalert2";

export const VerTaskDone = ({ isChecked, setshowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your tasks has been deleted.",
          position: "top-end",
          showConfirmButton: false,
          icon: "success",
          background: "#234567",
          color: "#fff",
          width: "300",
          timer: 1500,
        });
      }
    });
    cleanTasks();

    // if(window.confirm('Are you sure you want to delete it?')) {
    //   cleanTasks();
    // }
  };

  return (
    <div className="d-flex justify-content-between text-center">
      <div className="form-check form-switch">
        <input
          name="inputForm"
          className="form-check-input   "
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />{" "}
        <h4 className="text-white  ">Show Tasks Done</h4>
      </div>

      <button onClick={handleDelete} className="btn btn-danger m-3 ">
        Clear Tasks Done
      </button>
    </div>
  );
};