"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodoItem } from "@/app/types/type";
import toast from "react-hot-toast";

function useTodoLists() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [listName, setListName] = useState<string>("");
  console.log("🚀 ~ useTodoLists ~ listName:", listName);
  const [listId, setListId] = useState<string>("");
  console.log("🚀 ~ useTodoLists ~ listId:", listId);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // get
  const handleListData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todoList");
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
// update
  const handleUpdateList = async (todoItem: TodoItem) => {
    setListId(todoItem.id);
    setListName(todoItem.ListName);
    setIsVisible(true);
  };

  const update = async () => {
    try {
      const response = await axios.put("http://localhost:3000/api/todoList", {
        list: listName,
        id: listId,
      });
      console.log("🚀 ~ update ~ response:", response);
      if (response.status === 200) {
        toast.success("Task Updated Successfully");
        setIsVisible(false);
      } else {
        toast.error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
    }
  };
  useEffect(() => {
    handleListData();
  }, []);

  return {
    loading,
    todoList,
    isVisible,
    listName,
    setListName,
    handleDeleteList,
    handleUpdateList,
    update,
  };
}

export default useTodoLists;
