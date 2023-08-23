"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Banner } from "@prisma/client";

export default function BannerCarousel({ banners }: { banners: Banner[] }) {
  return (
    <div
      style={{
        width: "80%",
        display: "block",
        margin: "auto",
        marginBottom: "32px",
      }}
    >
      <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
        {banners.map((banner) => {
          return (
            <div key={banner.id}>
              {banner.image && (
                <picture>
                  <img
                    className="d-block"
                    src={banner.image}
                    alt="First slide"
                  />
                </picture>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
