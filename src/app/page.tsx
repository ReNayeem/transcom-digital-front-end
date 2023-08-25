import SeeAllBtn from "@/components/SeeAllBtn";
import About from "./About";
import { getBrands, getCategories, getDeals, getSelling } from "./home-data";
import Image from "next/image";
import ProductCardview from "@/components/ProductCardview";
import prisma from "../../prisma/prisma";
import BannerCarousel from "./BannerCarousel";
import './css/page.css'

export const revalidate = 30;

export default async function Home() {
  const banners = await prisma.banner.findMany();
  const deals = await getDeals();
  const selling = await getSelling();
  const brands = await getBrands();
  const categories = await getCategories();

  // console.log(deals)

  return (
    <>
      <BannerCarousel banners={banners} />

      <section id="best-deals" className="best-deals-area mb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3 best-deals-header">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Best Deals
                </h3>
                <SeeAllBtn href="/best-deals" />
              </div>
            </div>
            {deals.map((deal) => (
              <ProductCardview key={deal.id} product={deal} />
            ))}
          </div>
        </div>
      </section>

      <section id="shop-by-category" className="category-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline align-middle fs-20 fw-bold">
                  Shop By Category
                </h3>
                <SeeAllBtn href="/shop-category" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {categories.map((category) => (
              <div
                className="category-item text-center p-3"
                key={category.name}
              >
                {category.image && (
                  <Image
                    src={category.image}
                    alt="category"
                    className=" mx-auto"
                    width={120}
                    height={100}
                  />
                )}
                <h4 className="fs-15">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="best-selling" className="best-deals-area mb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Best Selling
                </h3>
                <SeeAllBtn href="/best-selling" />
              </div>
            </div>
            {/* {selling.map((sell) => (
              <ProductCardview key={sell.id} product={sell} />
            ))} */}
          </div>
        </div>
      </section>

      <section id="best-brands" className="brands-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Explore Brands
                </h3>
                <SeeAllBtn href="/brands" />
              </div>
            </div>
            {brands.map((brand) => {
              return (
                <div key={brand.id} className="col-lg-2">
                  <div className="brand-item text-center">
                    {brand.image ? (
                      <Image src={brand.image} alt="" width={72} height={80} />
                    ) : (
                      <p>No Image</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <About />
    </>
  );
}
