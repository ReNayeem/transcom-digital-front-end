import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function HeaderProducts() {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("/api/user/categories", { cache: "no-cache" });
    const data = await res.json();
    setCategories(data);
  };

  return (
    <>
      <li className="d-inline">
        <a className="p-3">
          Products{" "}
          <span>
            <FontAwesomeIcon icon={faChevronDown} size="lg" />
          </span>
        </a>
        <ul className="sub-menu">
          {categories?.map((category: any, index: number) => {
            return (
              <li key={index}>
                <Link href={`/categories/${category.id}`} className="d-flex justify-between">
                  <div className="col">{category.name}</div>
                  {category.brands && (
                    <div className="col-3 text-end">
                      <FontAwesomeIcon icon={faChevronRight} size="sm" />
                    </div>
                  )}
                </Link>
                {category.brands && (
                  <ul className="sub-menu-2">
                    {category.brands.map((brand: any, index: number) => {
                      return (
                        <li key={index}>
                          <Link href={`#best-brands`} className="d-flex justify-between">
                            <div className="col">{brand.name}</div>
                            {brand.products && (
                              <div className="col-3 text-end">
                                <FontAwesomeIcon icon={faChevronRight} size="sm" />
                              </div>
                            )}
                          </Link>
                          {brand.products && (
                            <ul className="sub-menu-3">
                              {brand.products.map((product: any, index: number) => {
                                return (
                                  <li key={index}>
                                    <Link href={`/product/${product.id}`} className="d-flex justify-between">
                                      <div className="col">{product.model}</div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}

export default HeaderProducts;
