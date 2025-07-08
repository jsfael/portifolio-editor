import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("e.rdrgs18@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 ">
      <aside className="text-center">
        <img src={logo} alt="Logo" className="mx-auto" width={90} height={90} />
        <div
          className={`flex items-center justify-center space-x-2 mt-4 ${
            hasCopied ? "text-green-500" : ""
          }`}
          onClick={handleCopy}
        >
          {hasCopied ? (
            <FaCheck className="text-xl cursor-pointer" />
          ) : (
            <FaRegCopy className="text-xl cursor-pointer" />
          )}
          <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
            e.rdrgs18@gmail.com
          </p>
        </div>
        <p className="font-bold mt-2">Tornando ideias em vídeos dês de 2020</p>
        <p className="mt-4">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
        <p className="mt-1 text-sm text-gray-300">
          Site desenvolvido profissionalmente por Rafael Lima.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
