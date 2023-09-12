'use client';

import { video } from "@/types";
import { FcLike } from "react-icons/fc";


type Props={
  MediaUrl: video[] ; 
  index : number;
}

export default function ListGroupWithLinks3({ MediaUrl, index }: Props) {

 // Tạo mảng con chỉ chứa 2 phần tử đầu tiên
 const firstTwoMedia = MediaUrl[index];

 const modifiedUrls = firstTwoMedia.url.replace(
  "https://www.youtube.com/watch?v=",
  "https://www.youtube.com/embed/"
);

 
  return (
    <div>
      
      <div className="flex items-center h-10 bg-sky-800 rounded-t-lg">
        <FcLike className="w-5 h-5 mx-2 text-red-600"/>
        {index ===2 ? (
          <h1 className="text-white font-bold">UNBOX THIẾT BỊ ĐỊNH VỊ</h1>
        ):(
          <h1 className="text-white font-bold">VIDEO REVIEWS SẢN PHẨM</h1>
        )
        }
      </div>

      <div className="w-full p-2 bg-gray-100 rounded-b-lg border">
      {modifiedUrls ? (
          <div className="w-full h-full">
            <iframe
              className="w-full h-[180px] rounded-lg"
              src={modifiedUrls}
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
        
      </div>

    </div>
  )
}


