import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function ToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleVisibility = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        setIsVisible(scrollTop + windowHeight >= fullHeight - 500); // Aparece 300 pixels antes do final
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 p-2 text-xl bg-white text-black border-none rounded cursor-pointer"
                >
                    <FaArrowUpLong />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default ToTopButton;
