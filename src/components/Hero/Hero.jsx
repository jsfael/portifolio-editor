import profilePic from "../../assets/raviKumarProfile.webp";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen pb-4 lg:mb-20 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10 gap-1 text-center lg:text-left">
            <h2 className="py-1 text-6xl font-medium t">
              Eduardo Oliveira
            </h2>
            <span>
              <HeroText />
            </span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 2 }}
            >
              Edição de vídeo com precisão e criatividade. Transformo seus vídeos
              brutos em narrativas envolventes, destacando cada detalhe com
              qualidade, fluidez e impacto visual. Seu projeto ganha vida em
              cada frame.
            </motion.p>
            <div>
              <HeroButton />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="/"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;