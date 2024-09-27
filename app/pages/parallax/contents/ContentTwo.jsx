import BorderSvg from "@/app/components/BorderSvg";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/framer/motionvalues";

const someData = [
  {
    prop: "color:",
    value: "white",
  },
  {
    prop: "height:",
    value: "186cm",
  },
  {
    prop: "wieght:",
    value: "65kg",
  },
  {
    prop: "date:",
    value: "19.09.1990",
  },
  {
    prop: "gender:",
    value: "male",
  },
  {
    prop: "country:",
    value: "georgia",
  },
  {
    prop: "city:",
    value: "tbilisi",
  },
];

const ContentTwo = () => {
  return (
    <div className="w-[200px] xl:w-[330px] ml-[23%] xl:ml-[38%] relative hover:rounded-3xl">
      <BorderSvg />
      <Image
        className="h-full w-full brightness-75"
        src="/assets/me.jpg"
        width={400}
        height={400}
        alt="me"
      />
      <motion.div
        variants={staggerOpacity}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px", once: true }}
        className="absolute bottom-[6%] bg-stone-800 font-tetriary p-2 text-[8px] xl:text-[12px] -right-[32%]"
      >
        <BorderSvg />
        <span className="text-amber-600">.some-info {`{`} </span>
        {someData.map((item, index) => {
          return (
            <motion.div
              variants={staggerOpacity}
              key={index}
              className="flex flex-row pl-5 space-x-1"
            >
              <span className="text-neutral-300">{item.prop}</span>
              <span className="text-gold">{item.value}</span>
            </motion.div>
          );
        })}
        <span className="text-amber-600 pl-2"> {`}`} </span>
      </motion.div>
    </div>
  );
};

export default ContentTwo;
