"use client";
import { MediaProps } from "@/types";

export const Media = ({ MediaUrl }: MediaProps) => {
  // Tạo mảng con chỉ chứa 2 phần tử đầu tiên
  const firstTwoMedia = MediaUrl.slice(0, 2);

  const modifiedUrls = firstTwoMedia.map((item) =>
    item.url.replace(
      "https://www.youtube.com/watch?v=",
      "https://www.youtube.com/embed/"
    )
  );

  return (
    <div>
      <div className="grid xl:grid-cols-2 max-[430px]:grid-cols-1 gap-4">
        {modifiedUrls.map((modifiedUrl, index) => (
          <div key={index} className="w-full h-full">
            <iframe
              className="xl:w-full xl:h-[320px] rounded-md max-[430px]:w-full max-[430px]:h-[220px]"
              src={modifiedUrl}
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};
