import React from "react";

const HeroButton = () => {
  return (
    <div className="grid min-h-[200px] place-content-center">
      <DrawOutlineButton onClick={() => handleClick()}>
        Clique aqui para falar comigo
      </DrawOutlineButton>
    </div>
  );
};

const handleClick = () => {
  setTimeout(() => {
    window.location.href = "https://example.com"; // Substitua pelo link desejado
  }, 650);
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-8 py-4 text-2xl font-medium text-transparent text-white"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-2000 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-200 duration-200 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-400 duration-200 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-600 duration-200 group-hover:h-full" />
    </button>
  );
};

export default HeroButton;
