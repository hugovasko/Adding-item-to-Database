import React from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
  const sendData = useFetch();
  const taskAddHandler = (task) => {
    sendData.setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={sendData.tasks}
        loading={sendData.isLoading}
        error={sendData.error}
        onFetch={sendData}
      />
    </React.Fragment>
  );
}
export default App;
