"use client";
import { Label, TextInput } from "flowbite-react";
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdAddHomeWork } from "react-icons/md";

export const PayInfor = () => {
  return (
   
    <div>
      
        {/* Họ và tên */}
      <div className="w-full pr-10 pb-2">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="" />
        </div>
        <TextInput
          icon={HiMail}
          id="email4"
          placeholder="Họ và Tên"
          required
          type="email"
        />
      </div>

       {/* địa chỉ giao hàng */}
      <div className="w-full pr-10 py-2">
        <TextInput icon={MdAddHomeWork} id="" placeholder="Đại chỉ giao hàng" required type="" />
      </div>

       {/* số điện thoại */}
      <div className="w-full pr-10 py-2">
        <TextInput
          icon={FaPhoneVolume}
          id="email4"
          placeholder="Số điên thoại"
          required
          type="email"
        />
      </div>

      {/*Địa chỉ gmail */}
      <div className="w-full pr-10 pt-2">
        <TextInput
          icon={CgMail}
          id="email4"
          placeholder="name@gamil.com"
          required
          type="email"
        />
      </div>
    </div>
  );
};
