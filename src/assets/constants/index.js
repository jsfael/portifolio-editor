import review from "../review.jpeg";
import testeEmPe from "../teste_em_pe.mp4";
import { IoRocketOutline } from "react-icons/io5";
import { BiBookmarkPlus } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: review,
    review: testeEmPe,
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: review,
    review: testeEmPe,
  },
];

export const features = [
  {
    title: "Impulsiono as suas ideias.",
    description:
      "Transformo suas ideias em vídeos criativos que capturam a essência da sua mensagem.",
    color: "#800080",
    icon: <IoRocketOutline size={28} color="#800080" />,
  },
  {
    title: "Resultados expressivos.",
    description:
      "Com minha edição de vídeos, seu negócio alcança mais views, leads e resultados financeiros concretos.",
    color: "#FFD700",
    icon: <BiBookmarkPlus size={28} color="#FFD700" />,
  },
  {
    title: "Edição profissional.",
    description:
      "Vídeos com edição profissional, fluidez, grande poder de engajamento e impacto visual.",
    color: "#FF69B4",
    icon: <HiOutlineVideoCamera size={28} color="#FF69B4" />,
  },
  {
    title: "Curto prazo de entregas.",
    description:
      "Edições ágeis sem abrir mão da qualidade, sempre dentro do prazo combinado.",
    color: "#32CD32",
    icon: <FaRegClock size={25} color="#32CD32" />,
  },
];
