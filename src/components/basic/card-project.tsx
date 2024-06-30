import { FC, CSSProperties } from "react";

interface CardProjectProps {
  image: string;
  name: string;
  onClick: () => void;
}

const estiloTexto: CSSProperties = {
  color: "#000000",
  textShadow:
    "0 0 10px #66b7280, " +
    "0 0 20px #66b7280, " +
    "0 0 30px #66b7280, " +
    "0 0 40px #66b7280, " +
    "0 0 50px #66b7280, " +
    "0 0 60px #66b7280, " +
    "0 0 70px #66b7280",
  textAlign: "center",
  fontFamily: "serif",
};

export const CardProject: FC<CardProjectProps> = ({ image, name, onClick }) => {
  return (
    <div
      className=" flex flex-col-reverse gap-4
      sm:w-[400px] sm:relative sm:cursor-pointer
          sm:hover:shadow-lg sm:hover:scale-105 sm:transition sm:duration-300 
          "
      onClick={onClick}
    >
      <img
        src={image}
        className="rounded-lg cursor-pointer
          w-[300px] h-[300px] sm:h-[350px] sm:w-[400px]
            "
      />
      <div
        className=" text-5xl
        sm:opacity-0 sm:hover:opacity-100 sm:duration-300 sm:absolute cursor-pointer
            sm:inset-0 sm:z-10 sm:flex sm:justify-center sm:items-center 
            "
        style={estiloTexto}
      >
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CardProject;
