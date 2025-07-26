import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/home/SectionTitle";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/FetchedProductsSlice";

export default function ProductDetails() {
  const { products } = useSelector((state) => state.inventory);
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <main className="flex flex-col  relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        <section>
          <div className="flex">
            <div>
              <ul>
                <div className="flex md:flex-col gap-4 order-last md:order-first">
                  {product.images?.map((img, i) => (
                    <div
                      key={i}
                      className="w-24 h-24 bg-gray-100 p-1 cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${product.title} view ${i + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </ul>
            </div>
            <div>
              <img src={product.images?.[0]} />
            </div>
            <div>
              <h1>{product.title}</h1>
            </div>
          </div>

          {/* related items */}
          <div>
            <SectionTitle title="Related Items" />
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
}
