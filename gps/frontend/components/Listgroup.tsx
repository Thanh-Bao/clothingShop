'use client';
import { MdAssistant } from "react-icons/md";

export default function ListGroupWithLinks() {
  return (
<div className="w-full">
  <div className="flex items-center h-10 bg-sky-800 rounded-t-lg">
    <MdAssistant className="w-5 h-5 mx-2 text-red-600"/>
    <h1 className="text-white font-bold">TƯ VẤN HỔ TRỢ TRỰC TIẾP</h1>
  </div>
  <div className="items-center px-4 bg-gray-100 py-4 space-y-2 rounded-b-lg">
    <h1 className="font-bold text-xl text-black">MR.HOÀI</h1>
    <span className="flex font-bold text-red-600">
      <p className="px-1">ZALO :</p>
      <p>0950495866</p>
      </span>
    <span className="flex font-bold text-red-600">
      <p className="px-1">HOTLINE :</p>
      <p>0950495866</p> 
    </span>
  </div>

</div>
  )
}


