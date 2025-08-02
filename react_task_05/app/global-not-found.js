import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="p-20 w-full flex justify-around">
      <section className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-6xl">404 Not Found</h1>
        <p>Your visited page not found you may go home page</p>
        <div className="flex justify-around items-center py-4">
          <Link href="/">
            <button
              className={`bg-[#db4444] border-2 px-8 border-[#db4444] rounded-sm my-2 p-2  text-white font-semibold cursor-pointer`}
            >
              Back to home page
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
