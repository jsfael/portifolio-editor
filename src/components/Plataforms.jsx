import { SiGoogleadsense, SiYoutubeshorts } from "react-icons/si";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Plataforms = () => {
  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1}}
        initial={{ opacity: 0}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-10 text-center text-4xl font-bold text-primary"
      >
        Plataformas
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1}}
        initial={{ opacity: 0}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center text-2xl my-10"
      >
        Transformando Seus Vídeos Para As Melhores Plataformas
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 hover:text-blue-500 transition-colors duration-500"
          title="TikTok"
        >
          <FaTiktok className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 hover:text-pink-500 transition-colors duration-500"
          title="Instagram"
        >
          <FaInstagram className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 hover:text-blue-700 transition-colors duration-500"
          title="Facebook"
        >
          <FaFacebookSquare className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4 hover:text-red-500 transition-colors duration-500"
          title="YouTube"
        >
          <FaYoutube className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 hover:text-red-400 transition-colors duration-500"
          title="YouTube Shorts"
        >
          <SiYoutubeshorts className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4 hover:text-green-500 transition-colors duration-500"
          title="Google Ads"
        >
          <SiGoogleadsense className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Plataforms;
