"use client";
import { MediaProps } from "@/types";


export const Media = ({ MediaUrl }: MediaProps) => {

	const modifiedUrls = MediaUrl.map(item => item.url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/'));

	return (
	  <div className="">
		<div className="flex justify-between w-full space-x-4">
		  {MediaUrl.map((media, index) => (
			<div className="w-1/2" key={index}>
			  {("url" in media) ? (
				<iframe
				  width="560"
				  height="315"
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
  