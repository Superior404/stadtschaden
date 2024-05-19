import React, { FC } from "react";

interface NewsCardProps {
  title: string;
  content: string;
  streetDamagePicture: string;
  picLeft: boolean;
}

const NewsCard: FC<NewsCardProps> = (props) => {
  const flexDirection = props.picLeft ? "flex-row" : "flex-row-reverse";

  return (
    <div className={`flex ${flexDirection} gap-24 pt-12 w-[75vw]`}>
      <img
        src={props.streetDamagePicture}
        alt="Bild 1"
        className="w-72 rounded-3xl"
      />

      <div className="flex flex-col gap-4 justify-center items-center bg-white bg-opacity-55 rounded-2xl p-4">
        <p className="font-monserrat font-bold text-center text-xl text-primary">
          {props.title}
        </p>

        <p className="self-center text-black font-monserrat">{props.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
