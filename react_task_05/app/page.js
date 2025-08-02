import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="shadow-xl/20 w-4/5 ring ring-blue-500/50 max-md:flex-col rounded-xl min-h-fit bg-blue-100 p-4 flex justify-around gap-4 items-center">
        <h1 className="animate-bounce font-bold text-4xl">Welcome</h1>
        <Link href={"/lists"}>
          <button className="py-2 px-4 bg-red-400 rounded-md text-white font-semibold cursor-pointer hover:bg-red-500 transition-colors">
            Go to Lists
          </button>
        </Link>
      </div>
    </section>
  );
}
