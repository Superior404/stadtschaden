import React from "react";
import { newsData } from "../../constants/NewsData";
import NewsCard from "../common/NewsCard";

const NewsSection = () => {
  return (
    <div className="flex flex-col items-center bg-center bg-cover bg-lightLeafesBackground">
      <p className="font-palanquin text-black font-bold text-4xl mt-12">
        Neuigkeiten
      </p>

      <div className="flex flex-col gap-10">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            content={news.content}
            streetDamagePicture={news.streetDamagePicture}
            picLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
