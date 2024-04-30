"use client";
import React from "react";
import useTodoLists from "./useTodoLists";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { TodoItem } from "@/app/types/type";

function TodoLists() {
  const {
    loading,
    todoList,
    isVisible,
    listName,
    setListName,
    handleDeleteList,
    handleUpdateList,
    update,
  } = useTodoLists();
  console.log("todoList ", todoList);
  return (
    <>
      {!isVisible ? (
        <div>
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="350"
              height="350"
              className="ml-[-60px] md:ml-10 lg:ml-20 xl:ml-60"
            >
              <linearGradient id="a11">
                <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFFFFF"></stop>
              </linearGradient>
              <circle
                fill="none"
                stroke="url(#a11)"
                stroke-width="11"
                stroke-linecap="round"
                stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
                cx="100"
                cy="100"
                r="70"
                transform-origin="center"
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="discrete"
                  dur="1.1"
                  values="360;324;288;252;216;180;144;108;72;36"
                  repeatCount="indefinite"
                ></animateTransform>
              </circle>
            </svg>
          ) : (
            <>
              <div className="text-[#F4F4F4]  font-medium text-[30px] md:text-[64px] underline">
                <table>
                  <tbody>
                    {todoList.map((todoItem: TodoItem, index) => (
                      <tr key={index}>
                        <td>
                          <a href={`/homePage?ListName=${todoItem.ListName}`}>
                            <h1>{todoItem.ListName}</h1>
                          </a>
                        </td>
                        <td>
                          <button
                            className="text-[#F4F4F4] bg-[#232020] p-3 rounded-full md:ml-[200px]"
                            onClick={() => handleUpdateList(todoItem)}
                          >
                            <RiEdit2Line size={30} />
                          </button>
                        </td>
                        <td>
                          <button
                            className="text-[#F4F4F4] bg-[#232020] p-3 rounded-full"
                            onClick={() => {
                              console.log(
                                "Deleting task with id:",
                                todoItem.id
                              );
                              handleDeleteList(todoItem.id as any);
                            }}
                          >
                            <RiDeleteBinLine size={30} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>{" "}
            </>
          )}
        </div>
      ) : (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center">
                      <input
                        type="text"
                        placeholder="List name"
                        className="placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#232020] mt-[16px] pl-[32px] pr-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] max-w-[447px] h-[58px] border-[#FF7315]"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={update}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TodoLists;
