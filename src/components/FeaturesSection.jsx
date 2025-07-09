import { motion } from "framer-motion";
import { features } from "../assets/constants/index";

const FeaturesSection = () => {
  return (
    <section>
      <div className="container max-w-xl mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="group relative text-3xl font-bold text-center sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-200 to-pink-300 animate-gradient-xy transition-colors duration-[600ms]">
            Sobre meus serviços
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Entenda mais sobre como trabalho e o que posso fazer por você.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row lg:gap-8 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.02 }}
                  delay={1.5}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-md"
                      initial={{ filter: "grayscale(100%)" }}
                      whileInView={{ filter: "grayscale(0%)" }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <motion.h4
                      className="text-xl font-medium"
                      initial={{ color: "#FFFFFF" }}
                      whileInView={{ color: feature.color }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      whileHover={{ scale: 1.01 }}
                    >
                      {feature.title}
                    </motion.h4>
                    <motion.p className="mt-2">{feature.description}</motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            className="lg:mt-0 mt-4 pb-10 lg:pb-0"
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1.01 }}
            transition={{ duration: 1 }}
          >
            <img
              width="700"
              height="700"
              src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
              className="mx-auto rounded-lg shadow-lg"
              alt="Feature Illustration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
