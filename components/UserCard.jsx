import Image from "next/image";
import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="max-h-screen flex gap-3 items-center justify-center">
      <Image
        src={userData.user.image}
        width={60}
        height={60}
        alt="Picture of the user"
        className="rounded-full"
      />
      <div className="leading-5 text-[#717082b4] p-2">
        <p className="font-bold text-xl">Do-it</p>
        <p className="text-[#A18AFF] font-bold text-3xl">
          {userData.user.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
