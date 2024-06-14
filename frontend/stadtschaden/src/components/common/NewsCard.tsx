import React, { FC } from "react";

interface NewsCardProps {
  title: string;
  content: string;
  streetDamagePicture: string;
  picLeft: boolean;
}

const NewsCard: FC<NewsCardProps> = (props) => {
  const flexDirection = props.picLeft ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <div
      className={`flex ${flexDirection} flex-col md:p-12 p-6 md:ml-24 md:mr-24 ml-12 mr-12 gap-12`}
    >
      <img
        src={props.streetDamagePicture}
        alt="Bild 1"
        className="w-full md:w-72 self-center rounded-3xl"
      />

      <div className="flex flex-col gap-4 justify-center items-center bg-white bg-opacity-85 rounded-2xl p-4">
        <p className="font-monserrat font-bold text-center text-xl text-primary">
          {props.title}
        </p>

        <p className="text-black font-monserrat text-center">{props.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
