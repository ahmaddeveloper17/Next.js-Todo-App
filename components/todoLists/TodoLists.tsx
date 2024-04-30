"use client";
import React from "react";
import useTodoLists from "./useTodoLists";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

function TodoLists() {
  const { loading, todoList, handleDeleteList } = useTodoLists();
  console.log("todoList ", todoList);
  return (
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
                {todoList.map((todoItem, index) => (
                  <tr key={index}>
                    <td>
                      <a href={`/homePage?ListName=${todoItem.ListName}`}>
                        <h1>{todoItem.ListName}</h1>
                      </a>
                    </td>
                    <td>
                      <button className="text-[#F4F4F4] bg-[#232020] p-3 rounded-full md:ml-[200px]">
                        <RiEdit2Line size={30} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-[#F4F4F4] bg-[#232020] p-3 rounded-full"
                        onClick={() => {
                          console.log("Deleting task with id:", todoItem.id);
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
  );
}

export default TodoLists;
