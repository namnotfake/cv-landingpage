import Image from "next/image";
import profilePic from "../../../public/images/pic1.jpg";
const LayoutLeft = () => {
  return (
    <div>
      <Image src={profilePic} alt="Picture of the author" priority />
    </div>
  );
};

export default LayoutLeft;
