"use client";

import { motion } from "framer-motion";
import imagem from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold ">
            {"Transforme suas ideias em vídeos incríveis"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mt-6 max-w-xl text-base md:text-lg font-normal text-slate-700 dark:text-slate-300"
          >
            Transformo suas ideias em vídeos curtos, impactantes e
            profissionais. Seja para negócios, projetos pessoais ou redes
            sociais, minhas edições são pensadas para atrair, engajar e gerar
            resultados de verdade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button className="w-72 sm:w-60 transform rounded-lg bg-black px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <a
                href="https://wa.me/558888301454?text=Ol%C3%A1%2C%20vi%20seu%20portifolio%20e%20me%20interessei%20em%20seus%20servi%C3%A7os.%20Gostaria%20de%20saber%20mais!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entre em contato
              </a>
            </button>
            <button className="w-72 sm:w-60 transform rounded-lg border border-gray-300 bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              <a
                href="https://www.instagram.com/_dudueditor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veja meus projetos
              </a>
            </button>
          </motion.div>
        </div>
        {/* Imagem à direita */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 0.7,
            }}
            className="rounded-3xl overflow-hidden border  shadow-md max-w-xl w-full"
          >
            <img
              src={imagem}
              alt="Foto de perfil"
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
