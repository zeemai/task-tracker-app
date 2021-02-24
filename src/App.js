import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task1",
      day: "Feb 4",
      reminder: true,
    },
    {
      id: 2,
      text: "task2",
      day: "Feb 5",
      reminder: true,
    },
    {
      id: 3,
      text: "task3",
      day: "Feb 7",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setToggleAddTask(!toggleAddTask)}
        showAdd={toggleAddTask}
      />
      {toggleAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Nothing to show"
      )}
    </div>
  );
}

export default App;
