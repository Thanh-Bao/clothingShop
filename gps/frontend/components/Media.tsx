"use client";
import { MediaProps } from "@/types";

export const Media = ({ MediaUrl }: MediaProps) => {

  const modifiedUrls = MediaUrl.map((item) =>
  item.url.replace(
  "https://www.youtube.com/watch?v=",
  "https://www.youtube.com/embed/"
  )
);


  return (
    <div>
        <div className="grid xl:grid-cols-2 max-[430px]:grid-cols-1 gap-4">
          {MediaUrl.map((media, index) => (
            <div key={index} className="w-full h-full">
              {"url" in media ? (
                <iframe
                  className="xl:w-full xl:h-[320px] rounded-md max-[430px]:w-full max-[430px]:h-[220px]"
                  src={modifiedUrls[index]}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
          ))}
        </div>
    </div>
  );
};
