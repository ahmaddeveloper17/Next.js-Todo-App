"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gLogo from "../../public/assets/google.png";
import useRegisterForm from "./useRegisterForm";

export default function RegisterForm() {
  const {
    email,
    password,
    name,
    setEmail,
    setName,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    register,
  } = useRegisterForm();

  return (
    <div className="">
      <div className="">
        <h2 className=" text-[#F4F4F4] mt-[32px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px]">
          Name
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className=" placeholder-[#F4F4F4] text-[white] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[300px] md:w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className="mt-[32px]">
        <h2 className=" text-[#F4F4F4] font-ibm-plex-mono pl-[32px] text-2xl font-medium leading-[39px]">
          Email
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className=" placeholder-[#F4F4F4] text-[white] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[300px] md:w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className="">
        <h2 className=" text-[#F4F4F4] mt-[32px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px]">
          Password
        </h2>
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className=" placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[300px] md:w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className="">
        <h2 className=" text-[#F4F4F4] mt-[32px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px]">
          Confirm Password
        </h2>
        <input
          type="Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={loading}
          className=" placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[300px] md:w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className="">
        <div
          className="flex flex-row items-center bg-[#232020] rounded-[55px] border-[5px] w-[307px] md:w-[447px] h-[72px] border-[#FF7315] gap-3 mt-[64px]"
          onClick={() => {
            signIn("google");
          }}
        >
          <Image
            src={gLogo}
            alt=""
            className="w-8 h-8 md:w-12 md:h-12 ml-[24px]"
          />
          <h2 className=" rounded-[30px] text-[#FF7315] bg-[#232020] font-ibm-plex-mono text-sm md:text-2xl font-medium leading-[39px] w-full h-full ps-[8px] py-[12px]">
            Sign In with Google
          </h2>
        </div>
        <div className="w-[307px] md:w-[447px] border-[#FF7315] h-[63px] left-496 mt-[10px] bg-[#FF7315] border-[5px] rounded-[55px] ">
          <button
            className=" font-ibm-plex-mono text-30 font-medium leading-39 text-left text-[#232020] py-[12px] px-[110px] md:px-[180px]"
            onClick={register}
          >
            <h2>Sign In</h2>
          </button>
        </div>
      </div>
      <div className="flex  space-x-4 ">
        <h2 className="text-[#F4F4F4] text-[13px] md:text-[20px] ">
          Already have an account?{" "}
        </h2>
        <Link href="/signin">
          <button>
            <h2 className="text-[#FF7315] text-[13px] md:text-[20px] underline">
              {" "}
              Log In
            </h2>
          </button>
        </Link>
      </div>
    </div>
  );
}
