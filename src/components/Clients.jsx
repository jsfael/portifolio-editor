import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaStar } from "react-icons/fa";
import { clientReviews } from "../assets/constants/index.js";

const ROTATION_RANGE = 17; // Reduzindo a intensidade da rotação
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
    <div className="bg-black bg-opacity-20 p-4 rounded-lg">
      {" "}
      {/* Fundo preto atrás do card */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform }}
        className="relative p-6 rounded-lg bg-gray-300 shadow-lg" // Card branco
      >
        <p className="text-black font-light">{item.review}</p>
        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
          <div className="flex gap-3">
            <img
              src={item.img}
              alt="reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-black">{item.name}</p>
              <p className="text-gray-700 md:text-base text-sm font-light">
                {item.position}
              </p>
            </div>
          </div>
          <div className="flex self-end items-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Clients = () => {
  return (
    <section className="sm:px-10 px-5 my-7">
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map((item) => (
          <TiltCard key={`review-${item.id}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Clients;