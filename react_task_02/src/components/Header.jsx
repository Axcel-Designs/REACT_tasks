import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <main className="w-full bg-white shadow-md sticky top-0 z-50">
      <header className="flex justify-between p-4 text-black w-4/5 mx-auto">
        <Logo />
        <Navbar />
      </header>
    </main>
  );
}
