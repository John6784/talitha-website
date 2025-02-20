import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 z-50 flex justify-between items-center">
      <h1 className="text-xl font-bold px-6">My Company</h1>
      <div className="flex gap-6 px-6">
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#services" className="hover:underline">Services</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}