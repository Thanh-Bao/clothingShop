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
   
    <span className="flex font-bold text-red-600">
      <p className="px-1">HOTLINE1 :</p>
      <p>0866844225</p> 
    </span>

    <span className="flex font-bold text-red-600">
      <p className="px-1">HOTLINE2 :</p>
      <p>0961003471</p> 
    </span>

    <span className="flex font-bold text-red-600">
      <p className="px-1">ZALO :</p>
      <p>0866844225</p>
    </span>


  </div>
</div>
  )
}


