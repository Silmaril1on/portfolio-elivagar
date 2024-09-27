import Image from "next/image";

const ProjectImages = ({ item }) => {
  return (
    <div className="w-full flex flex-col px-1 space-y-2 relative group">
      <div className="w-full">
        <Image
          className="w-full object-cover h-full brightness-75 duration-300 group-hover:brightness-100"
          src={item.images[0]}
          alt={item.name}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col space-y-2 xl:flex-row xl:justify-between xl:space-x-2 w-full h-full xl:*:w-[32.5%] *:brightness-75 *:group-hover:brightness-100">
        <Image src={item.images[1]} alt={item.name} quality={100} />
        <Image src={item.images[2]} alt={item.name} quality={100} />
        <Image src={item.images[3]} alt={item.name} quality={100} />
      </div>
    </div>
  );
};

export default ProjectImages;
