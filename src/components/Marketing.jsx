import React from "react";
import { motion } from "framer-motion";

const Marketing = () => {
  return (
    <div className="grid pb-5 place-content-center px-4 text-yellow-50">
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        Eleve o seu{" "}
        <span className="relative">
          Marketing
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.4,
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#F21"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        com edições de vídeo{" "}
        <motion.span
          initial={{ color: "#FFFFFF" }}
          whileInView={{ color: "#FF0000" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5}}
        >
          cativantes
        </motion.span>
        .
      </h1>
    </div>
  );
};

export default Marketing;
