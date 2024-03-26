import { hamburger } from "../assets/icons/";
import { logof } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-0 bg-black sm:py-4 padding-x opacity-80">
      <nav className="flex items-center max-container">
        <a href="/" className="mr-5">
          <img src={logof} width={60} height={30} alt="Logo" />
        </a>
        <div className="flex items-center justify-between flex-1">
          <ul className="flex items-center gap-5 sm:gap-16">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm leading-normal text-gray-200 sm:text-lg font-montserrat"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="">
            <a
              href="#login"
              className="text-sm leading-normal text-gray-200 sm:text-lg font-montserrat"
            >
              Login
            </a>

            <a
              href="/"
              className="px-2 py-0 mx-2 my-2 text-xs text-yellow-100 border-2 border-yellow-300 rounded-md sm:px-5 sm:mx-4 sm:py-1 sm:text-sm md:text-lg "
            >
              JOIN FSU
            </a>
          </div>
        </div>
        {/* <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
