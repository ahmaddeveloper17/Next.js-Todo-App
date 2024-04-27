import React, { useEffect, useState } from "react";
import axios from "axios";
import { taskName } from "@/app/types/type";
import toast from "react-hot-toast";
function useHomeTask() {
  const [tasks, setTasks] = useState<taskName[]>([]);
  const [taskName, setTaskName] = useState("");

  const handleCreateTask = async () => {
    try {
      console.log(taskName);

      const response = await axios.post(
        "http://localhost:3000/api/addTask",
        {
          TaskName: taskName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      console.log(responseData);
      toast.success("List Added Successfully");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };
  const handleGetTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/addTask");
      const fetchedTasks = response.data;
      console.log("🚀 ~ handleGetTasks ~ fetchedTasks:", fetchedTasks);
      setTasks(fetchedTasks);
    } catch (error) {
      console.log("🚀 ~ handleGetTasks ~ error:", error);
    }
  };
  useEffect(() => {
    handleGetTasks();
  }, []);

  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleCompletion = (index: number) => {
    const newCompletedTasks = [...completedTasks];
    if (newCompletedTasks.includes(index)) {
      newCompletedTasks.splice(newCompletedTasks.indexOf(index), 1);
    } else {
      newCompletedTasks.push(index);
    }
    setCompletedTasks(newCompletedTasks);
  };

  return {
    taskName,
    tasks,
    handleCreateTask,
    handleInputChange,
    completedTasks,
    setCompletedTasks,
    toggleCompletion,
  };
}

export default useHomeTask;
