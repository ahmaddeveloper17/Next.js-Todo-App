"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodoItem } from "@/app/types/type";

function useTodoLists() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const handleListData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/addList");
      console.log("🚀 ~ handleListData ~ data:", response.data);
      setTodoList(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleListData();
  }, []);

  return { loading, todoList };
}

export default useTodoLists;
