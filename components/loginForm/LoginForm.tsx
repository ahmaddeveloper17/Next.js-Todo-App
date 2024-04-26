"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gLogo from "../../public/assets/google.png";
import useLoginForm from "./useLoginForm";

export default function LoginForm() {
  const { setEmail, setPassword, loading, email, password, login } =
    useLoginForm();

  return (
    <div>
      <div className="">
        <h2 className=" text-[#F4F4F4] font-ibm-plex-mono pl-[32px] text-2xl font-medium leading-[39px]">
          Email
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className=" placeholder-[#F4F4F4] text-[white] pl-[32px] bg-[#232020] mt-[16px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[307px] sm:w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className="">
        <h2 className=" text-[#F4F4F4] mt-[32px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px]">
          Confirm Password
        </h2>
        <input
          type="Password"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className=" placeholder-[#F4F4F4] text-[white] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[307px] sm:w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className="">
        <Link href="/forgot">
          <h3 className="font-ibm-mono text-[#F4F4F4] mt-[16px] font-medium text-20 leading-26 text-right">
            Forget Password
          </h3>
        </Link>
        <div className="flex sm:flex-row bg-[#232020] rounded-[55px] border-[5px] max-w-[447px] min-w-[200px] h-[auto] border-[#FF7315] gap-3 mt-[64px]">
          <Image
            src={gLogo}
            alt=""
            className="w-8 h-8 md:w-12 md:h-12 ml-[15px] mt-[3px]"
          />
          <h2 className="rounded-[30px] text-[#FF7315] bg-[#232020] font-ibm-plex-mono text-sm md:text-2xl font-medium leading-[39px] w-full h-full sm:ps-[8px] sm:py-[12px]">
            Sign In with Google
          </h2>
        </div>
        <div className="w-[100%] sm:w-[307px] md:w-[447px] border-[#FF7315] h-[63px] mt-[10px] bg-[#FF7315] border-[5px] rounded-[55px] ">
          <button
            className="font-ibm-plex-mono text-30  font-medium leading-39 text-[#232020] py-[12px]  px-[36%] sm:px-[180px]"
            onClick={login}
            disabled={loading}
          >
            <h2>Sign In</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
