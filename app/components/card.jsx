import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";

const Card = ({ icon, heading, body, classname }) => {
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };


  return (
    <motion.div
      className="service flex flex-row gap-4 max-w-[345px] lg:gap-8 lg:max-w-[630px] xl:max-w-[800px] lg:mb-6"
      variants={letter}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
    >
      <div className="images flex flex-col items-center justify-around">
        <div className="icon-box w-[54px] h-[54px] bg-purple grid place-content-center rounded mt-4">
          <Image
            src={icon}
            alt="Service Icon"
            width={24}
            height={24}
            loading="lazy"
          />
        </div>
        <Image
          src="/line.svg"
          alt="dashed line"
          height={0}
          width={0}
          id={classname}
          className="mt-4 w-auto h-auto"
        />
      </div>
      <div className="service-link flex flex-col ">
        <Link
          href="/"
          className="text-darkpurple text-[25px] leading-7 font-bold tracking-tighter lg:text-[60px] lg:leading-[66px] xl:text-[80px] xl:leading-[88px] "
        >
          {heading}
        </Link>
        <p className="body text-purpleText text-base font-medium tracking-tighter mt-10 lg:max-w-[500px]">
          {body}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
