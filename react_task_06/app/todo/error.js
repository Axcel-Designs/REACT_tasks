"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <main className="w-full min-h-[83vh] flex justify-around items-center bg-gray-600 text-white">
        <section>
          <h2>Something went wrong!</h2>
          <button
            onClick={
              () => reset()
            }
          >
            Try again
          </button>
        </section>
      </main>
    </div>
  );
}
