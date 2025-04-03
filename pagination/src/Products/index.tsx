import { useEffect, useState } from "react";
import { IProduct } from "./types";
import ProductCard from "../ProductCard";
import "./Products.styles.scss";
import Pagination from "../Pagination";

const MAX_NO_ITEMS = 15;

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const response = await data.json();
    setProducts(response.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!products.length) {
    return <h1>No product found</h1>;
  }

  // const countries = [
  //   {
  //     name: "Nigeria",
  //     value: "NG",
  //     cities: ["Lagos", "Abuja", "Port Harcourt"],
  //   },
  //   {
  //     name: "Ghana",
  //     value: "GH",
  //     cities: ["Accra", "Kumasi", "Tamale"],
  //   },
  //   {
  //     name: "Kenya",
  //     value: "KE",
  //     cities: ["Nairobi", "Mombasa", "Kisumu"],
  //   },
  // ];

  // implement pagination
  const totalItems = products.length;
  const pages = Math.ceil(totalItems / MAX_NO_ITEMS);
  const start = (page - 1) * MAX_NO_ITEMS;
  const end = start + MAX_NO_ITEMS;

  const handlePageClick = (index: number) => {
    setPage(index);
  };

  return (
    <>
      <div className="products">
        {/* <select onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option id={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <select>
        <option value="">Select a city</option>
        {countries
          .find((country) => country.name === selectedCountry)
          ?.cities.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
      </select> */}
        {products.slice(start, end).map((product: IProduct) => (
          <ProductCard
            title={product.title}
            image={product.images[0]}
            key={product.title}
          />
        ))}
      </div>
      <Pagination
        pages={pages}
        page={page}
        handlePageClick={handlePageClick}
        prevAction={() => handlePageClick(page - 1)}
        nextAction={() => handlePageClick(page + 1)}
      />
    </>
  );
};

export default Products;
