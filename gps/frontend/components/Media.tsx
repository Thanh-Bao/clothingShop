"use client";
import { MediaProps } from "@/types";
import { useEffect, useState } from "react";

export const Media = ({ MediaUrl }: MediaProps) => {

  const modifiedUrls = MediaUrl.map((item) =>
  item.url.replace(
  "https://www.youtube.com/watch?v=",
  "https://www.youtube.com/embed/"
  )
);

  // ##################################################################################################

	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);
	const handleResize = () => {
	  if (window.innerWidth <= 768) {
		setIsMobile(true);
	  } else {
		setIsMobile(false);
	  }
	};
  
	useEffect(() => {
	  window.addEventListener("resize", handleResize);
  
	  // Kiểm tra kích thước ban đầu khi trang web được tải
	  if (window.innerWidth <= 768) {
		setIsMobile(true);
	  }
  
	  return () => {
		window.removeEventListener("resize", handleResize);
	  };
	}, []);

// ########################################################################################################


  return (
    <div>
      {isMobile ? (
        <div className="grid grid-cols-1 gap-4">
          {MediaUrl.map((media, index) => (
            <div key={index} className="w-full h-full">
              {"url" in media ? (
                <iframe
                  className="min-[320px]:w-[280px] min-[320px]:h-[160px] rounded-md"
                  src={modifiedUrls[index]}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {MediaUrl.map((media, index) => (
            <div key={index} className="w-full h-full">
              {"url" in media ? (
                <iframe
                  className="w-[550px] h-[320px] rounded-md"
                  src={modifiedUrls[index]}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
