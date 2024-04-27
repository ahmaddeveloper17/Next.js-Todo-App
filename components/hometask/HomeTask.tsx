"use client";
import React from "react";
import useHomeTask from "./useHomeTask";

function HomeTask() {
  const {
    taskName,
    tasks,
    handleCreateTask,
    handleInputChange,
    completedTasks,
    toggleCompletion,
  } = useHomeTask();

  return (
    <div>
      <div className="mt-[32px]">
        <input
          type="email"
          placeholder="[task]"
          value={taskName}
          onChange={handleInputChange}
          className="placeholder-[#EA5455] w-[300px] sm:w-[450px] text-[#EA5455] pl-[32px] bg-[#F9F5EB] mt-[16px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[16px] border-[5px] bordor-color-[#FF7315] lg:w-[597px] h-[58px] border-[#FF7315]"
        />
      </div>{" "}
      <div className="mt-[49px]">
        {tasks.map((task, index) => (
          <div key={index}>
            <input
              className="w-6 h-6 mr-2 cursor-pointer"
              type="checkbox"
              style={{
                appearance: "none",
                border: "2px solid #FF7315",
                borderRadius: "4px",
                outline: "none",
              }}
              onClick={() => toggleCompletion(index)}
            />
            <label
              className={`font-ibm-plex-mono text-[40px] md:text-[60px] text-[#EA5455] font-medium ${
                completedTasks.includes(index) ? "line-through" : ""
              }`}
            >
              {task.TaskName}
            </label>{" "}
          </div>
        ))}
      </div>
      <div
        className="flex items-center justify-center"
        onClick={handleCreateTask}
      >
        <div className="w-[210px] mt-[34px] border-[#FF7315] h-[63px] bg-[#FF7315] border-[5px] rounded-[55px]">
          <button className="font-ibm-plex-mono text-30 font-medium leading-39 text-[#232020] py-[12px] px-[55px]">
            <h2>Add Task.</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeTask;
