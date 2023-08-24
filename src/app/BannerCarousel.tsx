"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Banner } from "@prisma/client";
import Link from "next/link";
import './css/carousel.css'

export default function BannerCarousel({ banners }: { banners: Banner[] }) {
  return (
    <div className="custom-carousel container">
      <Carousel>
        {banners.slice(0, 3).map((banner) => {
          return (
            <Carousel.Item key={banner.id}>
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  src={banner.image}
                  className="banner-img"
                  width={1296}
                  height={381.4}
                  alt=""
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
