import { Header } from "@/components/header";
import { VideoCard } from "@/components/video-card";
import { dummyCards } from "@/constants";

export default function HomePage() {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />

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
    </main>
  );
}
