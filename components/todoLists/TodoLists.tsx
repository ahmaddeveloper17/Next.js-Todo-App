"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useTodoLists from "./useTodoLists";

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
            {todoList.map((todoItem, index) => (
              <Link
                key={index}
                href={`/homePage?ListName=${todoItem.ListName}`}
              >
                <h1>{todoItem.ListName}</h1>
              </Link>
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default TodoLists;
