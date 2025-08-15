export default function Loading() {
  return (
    <>
      <main className="w-full h-100 flex justify-around items-center">
        <div className=" flexd items-center gap-4">
          <div className="text-blue-600 flex justify-around">
            <i className="fa-solid fa-spinner fa-pulse fa-3x"></i>
          </div>
          {/* <h1 className="font-bold animate-pulsed">Loading&hellip;</h1> */}
        </div>
      </main>
    </>
  );
}
