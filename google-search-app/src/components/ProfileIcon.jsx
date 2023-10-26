import { TbGridDots } from "react-icons/tb";
import ProfileFrame from "../assets/profile-frame.jpg";
import Profile from "../assets/pic.jpeg"
const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex  items-center justify-center rounded-full 
      cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className="h-10 w-10 relative flex justify-center items-center ">
        <img className="absolute" src={ProfileFrame} />
        <span className="h-8 w-8 rounded-full overflow-hidden ">
          <img className="h-full w-full object-cover" src={Profile} />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
