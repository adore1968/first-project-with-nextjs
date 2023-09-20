import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 text-black bg-white">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <Link href="/">Home</Link>
      </h1>
      <ul className="sm:text-xl flex items-center gap-5 text-lg">
        <li>
          <Link
            href="/about"
            className="hover:bg-red-500 px-4 py-2 text-white transition-colors ease-in bg-red-600 rounded"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className="hover:bg-sky-500 bg-sky-600 px-4 py-2 text-white transition-colors ease-in rounded"
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
