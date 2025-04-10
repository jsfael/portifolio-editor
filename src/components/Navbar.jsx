import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6x">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={85} height={85} alt="logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
