import { galleryData } from "../data/DataList";

export default function PhotoGallery() {
  return (
    <>
      <main className="w-screen p-4 lg:p-8">
        <div className="flex flex-col items-center w-4/5 m-auto p-6">
          <div className="place-self-start mb-6">
            <h1 className="text-gray-500">
              Photo <br />
              <span className="font-bold text-4xl text-black">Gallery</span>
            </h1>
          </div>
          <div>
            <hr className="my-2 text-gray-300" />
            <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {galleryData.map((gallery) => (
                <img src={gallery.src} key={gallery.id} alt={gallery.text} />
              ))}
            </section>
          </div>
          <div className="flex justify-center items-center gap-4 my-6">
            <button className=" text-gray-500 hover:bg-gray-200 py-2 px-4 rounded">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className=" text-gray-500 hover:bg-gray-200 py-2 px-4 rounded">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
