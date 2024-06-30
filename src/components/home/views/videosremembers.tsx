import { FC } from "react";
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import video3 from "../../../assets/video3.mp4";
import video4 from "../../../assets/video4.mp4";
import video5 from "../../../assets/video5.mp4";
import video6 from "../../../assets/video6.mp4";

interface VideosRemembersProps {
  prop?: string;
}

const videos = [
  {
    id: 1,
    video: video1,
  },
  {
    id: 2,
    video: video2,
  },
  {
    id: 3,
    video: video3,
  },
  {
    id: 4,
    video: video4,
  },
  {
    id: 5,
    video: video5,
  },
  {
    id: 6,
    video: video6,
  },
];

export const VideosRemembers: FC<VideosRemembersProps> = () => {
  return (
    <div className="bg-red-200 px-4 sm:px-0">
      <h1 className="font-bold text-xl text-left p-8 text-red-700">
        Recuerdos:
      </h1>
      <div className="px-8 flex flex-row overflow-x-auto space-x-4 flex-wrap items-center justify-between gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 rounded-br overflow-hidden"
          >
            <video
              width={300}
              height={300}
              controls
              className="cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <source src={video.video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosRemembers;
