"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodoItem } from "@/app/types/type";
import toast from "react-hot-toast";

function useTodoLists() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  // get
  const handleListData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todoList");
      console.log("🚀 ~ handleListData ~ data:", response.data);
      setTodoList(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  //delete
  const handleDeleteList = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/todoList/?id=${id}`);

      toast.success("Task Deleted Successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };

  useEffect(() => {
    handleListData();
  }, []);

  return { loading, todoList, handleDeleteList };
}

export default useTodoLists;
