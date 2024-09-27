import HoverContainer from "@/app/components/HoverContainer";
import Image from "next/image";
import image1 from "@/public/assets/1.jpg";
import image2 from "@/public/assets/2.jpg";
import image3 from "@/public/assets/3.jpg";
import image4 from "@/public/assets/4.jpg";

const ContentFour = () => {
  const images = [image1, image2, image3, image4];

  return (
    <HoverContainer className="ml-24 w-5/12 h-32 center flex-row space-x-4">
      <div className="flex flex-row space-x-2 z-[3]">
        {images.map((item) => {
          return (
            <Image
              className="w-20 brightness-75"
              src={item}
              alt="collectibles"
              width={200}
              height={200}
            />
          );
        })}
      </div>
    </HoverContainer>
  );
};

export default ContentFour;
