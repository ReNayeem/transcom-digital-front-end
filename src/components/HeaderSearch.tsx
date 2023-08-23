import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
};

function HeaderSearch() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ProductType[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/user/products", {
      method: "GET",
    });
    const data = await res.json();
    setProducts(data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);

    if (newInputValue === "") {
      setSuggestions([]); // Clear suggestions when input is empty
    } else {
      // Filter products based on input value
      const newSuggestions = products?.filter((product) =>
        product.name.toLowerCase().includes(newInputValue.toLowerCase())
      );
      setSuggestions(newSuggestions);
    }
  };

  const handleSuggestionClick = (name: string, id: string) => {
    setInputValue(name);
    setSuggestions([]); // Clear suggestions
    router.push(`/product/${id}`);
  };

  return (
    <>
      <div className="col-6 col-lg-8 d-none d-lg-block" style={{ position: "relative" }}>
        <form action="" className="search position-relative">
          <div className="form-group">
            <input type="text" name="" id="" className="form-control" value={inputValue} onChange={handleInputChange} />
            <button
              type="submit"
              className="position-absolute top-0 end-0 d-block bg-danger text-white rounded border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </form>
        <div style={{ position: "relative" }}>
          {suggestions.length > 0 && (
            <ul
              className="list-group suggestions"
              style={{ cursor: "pointer", position: "absolute", top: "100%", left: 0, zIndex: 1, width: "100%" }}
            >
              {suggestions.map((product, index) => (
                <li
                  key={index}
                  className="list-group-item suggestion-item"
                  onClick={() => handleSuggestionClick(product.name, product.id)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default HeaderSearch;
