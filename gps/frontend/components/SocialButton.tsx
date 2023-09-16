import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiZalo } from "react-icons/si";
const SocialButtons = () => {
  return (
    <div>
      <div className="fixed bottom-[25%] right-0 p-4">
        <div className="flex flex-col space-y-3">
          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-3 rounded-full flex items-center animate-custom-spin"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className=" w-6 h-6"
              style={{ animationDuration: "0.8s" }}
            />
          </a>

          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-3 rounded-full"
          >
            <FaFacebookMessenger className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white bg-green-500 hover:bg-green-600 px-3 py-3 rounded-full"
          >
            <SiZalo className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white bg-red-500 hover:bg-red-600 px-3 py-3 rounded-full"
          >
            <MdLocationOn className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="fixed bottom-[25%] max-[430px]:hidden left-4">
        <div className="w-44 h-12 flex bg-black rounded-full">
  
            <a href="#" className="text-white bg-red-500 hover:bg-blue-600 px-3 py-3 rounded-full flex items-center animate-custom-spin" style={{
              animationName: "ping",
               animationDuration: "1s",
               animationIterationCount: "infinite",
    }}>
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6"
                style={{ animationDuration: "0.8s" }}
              />
            </a>

          <span className="flex items-center pl-3 text-white font-bold">039955564</span>
        </div>
        
      </div>
    </div>
  );
};

export default SocialButtons;
