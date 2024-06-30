import { FC, useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import image1 from "../../../assets/image1.jpeg";
import image2 from "../../../assets/image2.jpeg";
import image3 from "../../../assets/image3.jpeg";
import image4 from "../../../assets/image4.jpeg";
import image5 from "../../../assets/image5.jpeg";
import image6 from "../../../assets/image6.jpeg";
import image7 from "../../../assets/image7.jpeg";
import image8 from "../../../assets/image8.jpeg";
import image9 from "../../../assets/image9.jpeg";
import image10 from "../../../assets/image10.jpeg";

interface ImagesRemembersProps {
  prop?: string;
}

const images = [
  {
    id: 1,
    image: image1,
    title: "Mall Puruchuco",
  },
  {
    id: 2,
    image: image2,
    title: "Recuerdos Miniatura",
  },
  {
    id: 3,
    image: image3,
    title: "Previas Navidad",
  },
  {
    id: 4,
    image: image4,
    title: "Juntos Siempre",
  },
  {
    id: 5,
    image: image5,
    title: "Dedicatoria",
  },
  {
    id: 6,
    image: image6,
    title: "Tu primer Wafle",
  },
  {
    id: 7,
    image: image7,
    title: "En la U",
  },
  {
    id: 8,
    image: image8,
    title: "Jugando",
  },
  {
    id: 9,
    image: image9,
    title: "En la playa",
  },
  {
    id: 10,
    image: image10,
    title: "Manitas",
  },
];

SwiperCore.use([Autoplay]);

export const ImagesRemembers: FC<ImagesRemembersProps> = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 2500); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  let swiper;

  return (
    <div
      className="bg-blue-50 h-[90vh] sm:h-[50vh] p-8 sm:px-0 
      flex flex-col items-center justify-center"
    >
      <div className="w-full p-8">
        <h1 className="font-bold text-xl text-left p-8 text-blue-700">
          Recuerdos:
        </h1>
        <Swiper
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(s) => (swiper = s)}
          slidesPerView={5} // Mostrar 5 slides a la vez
          spaceBetween={10}
        >
          {images.map((index) => (
            <SwiperSlide key={index.id}>
              <div className="flex  flex-col items-center gap-4">
                {index.id < 15 ? (
                  <img
                    src={index.image}
                    style={{
                      color: "#000000",
                      height: 300,
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img src={index.image} className="h-[300px] rounded-sm" />
                )}
                <h1>{index.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImagesRemembers;
