// import { FC, useEffect } from "react";
// import SwiperCore from "swiper";
// import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import csharp from "../../../assets/csharp.svg";
// import typescript from "../../../assets/typescript.svg";
// import go from "../../../assets/go.png";
// import net from "../../../assets/net.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faCss3,
//   faJs,
//   faReact,
//   faPython,
//   faNodeJs,
//   faGit,
//   faGithub,
//   faGitlab,
// } from "@fortawesome/free-brands-svg-icons";
//
// interface TechnologiesProps {
//   prop?: string;
// }
//
// const images = [
//   {
//     id: 1,
//     image: faHtml5,
//     title: "HTML5",
//   },
//   {
//     id: 2,
//     image: faCss3,
//     title: "CSS3",
//   },
//   {
//     id: 3,
//     image: faJs,
//     title: "javascript",
//   },
//   {
//     id: 4,
//     image: faReact,
//     title: "React.js",
//   },
//   {
//     id: 5,
//     image: faNodeJs,
//     title: "Node.js",
//   },
//   {
//     id: 6,
//     image: faPython,
//     title: "Python",
//   },
//   {
//     id: 7,
//     image: faGit,
//     title: "Git",
//   },
//   {
//     id: 8,
//     image: faGithub,
//     title: "Github",
//   },
//   {
//     id: 9,
//     image: faGitlab,
//     title: "Gitlab",
//   },
//   {
//     id: 10,
//     image: csharp,
//     title: "c#",
//   },
//   {
//     id: 11,
//     image: go,
//     title: "Go",
//   },
//   {
//     id: 12,
//     image: net,
//     title: ".Net",
//   },
//   {
//     id: 13,
//     image: typescript,
//     title: "Typescript",
//   },
// ];
//
// SwiperCore.use([Autoplay]);
//
// export const Technologies: FC<TechnologiesProps> = () => {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (swiper) {
//         swiper.slideNext();
//       }
//     }, 2500); // Adjust the interval time as needed
//
//     return () => clearInterval(interval);
//   }, []);
//
//   let swiper;
//
//   return (
//     <div className="bg-blue-50 h-[90vh] sm:h-[50vh] px-4 sm:px-0 flex flex-col items-center justify-center">
//       <div
//         className="w-[300px] sm:w-[600px] z-20 border-white p-4 rounded-xl
//         bg-white flex flex-col gap-4
//         relative -top-28 h-[700px] sm:h-[400px]"
//       >
//         <h1 className="font-extralight text-4xl">Technologies:</h1>
//         <hr className="w-full" />
//         <div className="flex flex-col sm:flex-row gap-8 font-serif text-lg">
//           <div>
//             <h1>Front-End Web Developer:</h1>
//             <hr className="w-full" />
//             <div className="pl-4">
//               <h1>html</h1>
//               <h1>css</h1>
//               <h1>javascript</h1>
//               <h1>Typescript</h1>
//               <h1>React</h1>
//             </div>
//           </div>
//           <div>
//             <h1>Back-End Developer:</h1>
//             <hr className="w-full" />
//             <div className="pl-4">
//               <h1>Python</h1>
//               <h1>C#</h1>
//               <h1>Node.js</h1>
//               <h1>Go</h1>
//             </div>
//           </div>
//           <div>
//             <h1>Dev Tools:</h1>
//             <hr className="w-full" />
//             <div className="pl-4">
//               <h1>Git</h1>
//               <h1>Github</h1>
//               <h1>Gitlab</h1>
//               <h1>VSCode</h1>
//               <h1>NeoVim</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full">
//         <Swiper
//           loop={true}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           onSwiper={(s) => (swiper = s)}
//           slidesPerView={5} // Mostrar 5 slides a la vez
//           spaceBetween={10}
//         >
//           {images.map((index) => (
//             <SwiperSlide key={index.id}>
//               <div className="flex  flex-col items-center gap-4">
//                 {index.id < 10 ? (
//                   <FontAwesomeIcon
//                     icon={index.image}
//                     style={{ color: "#000000", height: 60, cursor: "pointer" }}
//                   />
//                 ) : (
//                   <img src={index.image} className="h-[60px]" />
//                 )}
//                 <h1>{index.title}</h1>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
//
// export default Technologies;
