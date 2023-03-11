import axios from "axios";
import { useEffect } from "react";
import GameItem from "../../items/GameItem";

export default function FeaturedGame() {
  useEffect(async () => {
    const data = await axios.get(
      "http://localhost:3000/api/v1/players/landingpage"
    );
    console.log(data);
  }, []);
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            thumbnail="/img/thumbnail-1.png"
            title="Super Mechs"
            category="Mobile"
          />
          <GameItem
            thumbnail="/img/thumbnail-2.png"
            title="Call of Duty: Modern"
            category="Mobile"
          />
          <GameItem
            thumbnail="/img/thumbnail-3.png"
            title="Mobile Legends"
            category="Mobile"
          />
          <GameItem
            thumbnail="/img/thumbnail-4.png"
            title="Clash of Clans"
            category="Mobile"
          />
          <GameItem
            thumbnail="/img/thumbnail-5.png"
            title="Valorant"
            category="Desktop"
          />
        </div>
      </div>
    </section>
  );
}
