import { useState, useEffect } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const sendData = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movies-fa5ce-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    sendData();
  }, []);

  return {
    isLoading: isLoading,
    error: error,
    tasks: tasks,
    setTasks: setTasks,
  };
};

export default useFetch;
