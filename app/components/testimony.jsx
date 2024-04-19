import { motion } from "framer-motion";
import React from "react";


const Testimony = ({ story, name }) => {

  const letter = {
    hidden: { opacity: 0, y: 30 },

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
      className="testimony flex flex-col justify-between items-start gap-6 px-6 py-12 flex-grow-0 flex-shrink-0 flex-auto max-w-[19rem] border border-[#333333] rounded-lg bg-gradient-to-r from-[#3333330c] from-2%  to-[#3333330c] to-100%"
      variants={letter}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="rating flex flex-row justify-start items-center gap-2">
        {[...Array(5)].map((st, index) => {
          return (
            <span key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#FFB905"
                  d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                ></path>
              </svg>
            </span>
          );
        })}
      </div>
      <p className="text-black text-[18px] text-left tracking-tighter">{story}</p>
      <span className="name text-black font-medium text-[20px] tracking-tighter">{name}</span>
    </motion.div>
  );
};

export default Testimony;
