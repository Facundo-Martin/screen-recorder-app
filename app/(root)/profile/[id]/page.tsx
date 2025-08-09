import { Header } from "@/components/header";
import { VideoCard } from "@/components/video-card";
import { dummyCards } from "@/constants";
import React from "react";

export default async function ProfilePage({ params }: ParamsWithSearch) {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        title="User name"
        subHeader="email@gmail.com"
        userImg="/assets/images/dummy.jpg"
      />

      <h1 className="text-2xl font-karla"> USER ID: {id}</h1>

      <section className="video-grid">
        {dummyCards.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            createdAt={video.createdAt}
            userImg={video.userImg}
            username={video.username}
            views={video.views}
            visibility={video.visibility as Visibility}
            duration={video.duration}
          />
        ))}
      </section>
    </div>
  );
}
