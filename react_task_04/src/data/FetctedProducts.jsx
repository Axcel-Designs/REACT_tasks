import React, { useEffect, useState } from "react";

export default function FetctedProducts() {
  const [productsData, setProductsData] = useState([]);
  const [randomFour, setRandomFour] = useState();

  useEffect(() => {
    async function getProductData() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/"
        );
        const data = await response.json();
        setProductsData(data);
        console.log(productsData.title);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }

    getProductData();
  }, []);
  console.log(productsData);

  useEffect(() => {
    let randomFour = [...productsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
      setRandomFour(randomFour)
  }, [productsData]);

  return (
    <>
      {randomFour.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}
