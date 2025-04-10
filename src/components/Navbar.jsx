import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6x" >
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={85} height={85} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/ravikumar-rajendran-7b7a7b1b4/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="transition-transform duration-300 hover:text-pink-500 hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ravikumar-rajendran-7b7a7b1b4/"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="transition-transform duration-300 hover:text-green-500 hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
