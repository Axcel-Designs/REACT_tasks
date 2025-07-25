import React from "react";
import ShopNow from "../ShopNow";
import ps5 from '../../assets/ps5Slim.png'
import awc from '../../assets/attractiveWoman.png'
import gp from '../../assets/gucciPerfumes.png'
import ae from '../../assets/amazonEcho.png'

export default function NewArrival() {
  return (
    <>
      <div className="flex text-[#db4444] items-center gap-2">
        <div className="bg-[#db4444] py-2 ">gg</div>
        <p>Featured</p>
      </div>
      <div>
        <h2>New Arrival</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[200px_200px]  gap-4 text-white bg-amber-500">
        <div
          className={`col-span-2 md:row-span-2 bg-[url('../../assets/ps5Slim.png')] bg-cover bg-center flex items-end`}
        >
          <div>
            <h2>PlayStation 5</h2>
            <p>Block and White version of the PS% coming out on sale.</p>
            <ShopNow />
          </div>
        </div>
        <div
          className={`col-span-2 bg-[url(${awc})] bg-cover bg-center flex items-end`}
          style={{ backgroundImage: `url(${awc})`}}
        >
          <div>
            <h2>Women's Collections</h2>
            <p>Featured woman collections that gives you another vibe.</p>
            <ShopNow />
          </div>
        </div>
        <div
          className={`bg-[url(${ae})] bg-cover bg-center flex items-end`}
        >
          <div>
            <h2>Speakers</h2>
            <p>Amazon wireless speakers</p>
            <ShopNow />
          </div>
        </div>
        <div className={`bg-[url(${gp})] bg-center bg-cover flex items-end`}>
          <div>
            <h2>Perfume</h2>
            <p>Gucci Instense oUd EDP</p>
            <ShopNow />
          </div>
        </div>
      </div>
    </>
  );
}
