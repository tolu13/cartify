import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex item-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
        <div className="ml-5">
          <h2 className="text-red-800 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            React Redux Shopping Cart
          </h2>
        </div>
        </Link>
        <ul className="flex  list-none items-center space-x-6 text-gray-800 font-semibold">
              <Link to={'/'}>
                <li className="cursor-pointer list-none">Home</li>
              </Link>
              <Link to={'/cart'}>
                <li className="cursor-pointer list-none">Cart</li>
              </Link>
        </ul>
      </nav>
    </div>
  );
}
