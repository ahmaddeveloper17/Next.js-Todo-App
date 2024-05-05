"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodoItem } from "@/app/types/type";
import toast from "react-hot-toast";
import { getSession } from "next-auth/react";

function useTodoLists() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [listName, setListName] = useState<string>("");
  const [listId, setListId] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // get
  const handleListData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todoList");
      setTodoList(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  console.log("todoList ", todoList);
  const handleEmail = async () => {
    const session = await getSession();
    const email = session?.user?.email || "";
    setCurrentUserEmail(email);
  };
  useEffect(() => {
    handleEmail();
  }, []);
  const filteredTodoList = todoList.filter(
    (todoItem) => todoItem.Email === currentUserEmail
  );

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
    filteredTodoList,
    setListName,
    handleDeleteList,
    handleUpdateList,
    update,
  };
}

export default useTodoLists;
