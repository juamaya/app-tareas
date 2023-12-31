import "./App.css";
import { useState, useEffect } from "react";

import { TaskCreator } from "./componentes/TaskCreator";
import { TaskTable } from "./componentes/TaskTable";
import { VerTaskDone } from "./componentes/VerTaskDone";
import   Footer  from "./componentes/Footer";

function App() {
  const [showCompleted, setshowCompleted] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  function createNewTask(taskName) {
    // console.log(taskName)
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) =>
        t.name === task.name ? { ...t, done: !task.done } : t
      )
    );
  };

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setshowCompleted(false)
  };

  useEffect(() => {
    // console.log("cargo");
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // console.log("cambio");
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="container col-md-6 offset-md-3 border  border-5 border-light p-5">
      <h1 className="text-white text-center  ">APP TAREAS</h1>
      <hr />

      <TaskCreator createNewTask={createNewTask} />
      <hr />
      <h4 className="text-light"> Tareas pendientes ⭕ </h4>
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <hr />
     
      <VerTaskDone
      isChecked={showCompleted}
        setshowCompleted={(checked) => setshowCompleted(checked)}
        cleanTasks={cleanTasks}
      />
 <h4 className="text-light"> Tareas terminadas ✅</h4>
      {showCompleted === true && (
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
