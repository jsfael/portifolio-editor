import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaStar } from "react-icons/fa";
import { clientReviews } from "../assets/constants/index.js";

const ROTATION_RANGE = 14; 
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ item }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 100, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 15 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="bg-black bg-opacity-20 p-3 rounded-lg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform }}
        className="relative p-6 rounded-lg bg-gray-200 shadow-lg flex flex-col items-start min-h-[200px] sm:min-h-[240px]"
      >
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3 items-center">
            <img
              src={item.img}
              alt="reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-black">{item.name}</p>
              <p className="text-gray-700 md:text-base text-sm font-light">
                {item.position}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>
          {/* Vídeo com altura maior */}
          <div className="w-full mt-4 rounded overflow-hidden">
            {item.review && (
              <video
                src={item.review}
                controls
                className="w-full h-96 sm:h-96 object-contain rounded-md bg-black"
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Clients = () => {
  return (
    <section className="sm:px-10 px-5 mb-4">
      <motion.h3
        className="flex flex-wrap sm:flex-nowrap justify-center sm:text-4xl text-3xl font-semibold text-white group text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white mr-2">Opiniões dos meus</span>
        <span className="relative whitespace-nowrap">
          <motion.span
            className="text-white"
            initial={{ color: "#FFFFFF" }}
            whileInView={{ color: "#FFD700" }}
            transition={{ duration: 1 }}
          >
            clientes
          </motion.span>
          <motion.span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          ></motion.span>
        </span>
        <span className="whitespace-nowrap ml-2">:</span>
      </motion.h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {clientReviews.map((item) => (
          <TiltCard key={`review-${item.id}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
