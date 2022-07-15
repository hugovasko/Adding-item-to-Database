import React from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
  const fetchData = useFetch();
  const taskAddHandler = (task) => {
    fetchData.setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={fetchData.tasks}
        loading={fetchData.isLoading}
        error={fetchData.error}
        onFetch={fetchData}
      />
    </React.Fragment>
  );
}
export default App;
