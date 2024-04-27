"use client";
import React from "react";
import useTodoLists from "./useTodoLists";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

function TodoLists() {
  const { loading, todoList } = useTodoLists();
  console.log("todoList ", todoList);
  return (
    <div>
      {loading ? (
        <div className="text-[#F4F4F4] text-[55px] mt-[80px] pl-[32px] font-ibm-plex-mono   md:text-[64px] font-medium leading-[39px]">
          Loading.....
        </div>
      ) : (
        <>
          <div className="text-[#F4F4F4] font-medium text-[64px] underline">
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
                      <button className=" text-[#F4F4F4] bg-[#232020] p-3 rounded-full md:ml-[200px]">
                        <RiEdit2Line size={30} />
                      </button>
                    </td>
                    <td>
                      <button className=" text-[#F4F4F4] bg-[#232020] p-3 rounded-full ">
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
