import HeaderAnimation from "@/app/components/HeaderAnimation";
import { MdArrowOutward } from "react-icons/md";

const Header = ({ item }) => {
  return (
    <div className="relative">
      <HeaderAnimation
        text={item.name}
        className="text-cream capitalize center text-4xl"
      />
      <div className="w-10 h-10 absolute right-0 top-0 center">
        <MdArrowOutward
          size={25}
          className="text-cream hover:scale-125 duration-300"
        />
      </div>
    </div>
  );
};

export default Header;
