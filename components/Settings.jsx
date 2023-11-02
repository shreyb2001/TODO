"use client";

import React from "react";
import { SettingsIcon } from "./Icons/Settings";
import { LogOutIcon } from "./Icons/LogOut";
import { signOut } from "next-auth/react";

const Settings = () => {
  return (
    <div className="flex gap-8 justify-start py-1">
      <SettingsIcon />
      <div>
        <p className="font-extrabold text-lg text-[#717082b4] tracking-widest">
          Settings
        </p>
        <div className="flex flex-col items-start">
          <div className="flex justify-center items-center gap-2 py-3">
            <LogOutIcon />
            <button onClick={() => signOut()}>
              <p className="font-extrabold text-lg text-[#717082b4]">Logout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
