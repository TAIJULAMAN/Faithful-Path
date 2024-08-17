import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="sticky z-10 w-full text-[#2e424d] px-[100px] bg-[#f8ebd5]">
      <div>
        <div className=" flex flex-row justify-between py-8">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold hover:text-[#98dad9]">
                বিশ্বস্ত পথ
              </h1>
            </Link>
          </div>

          <nav className="font-semibold hidden lg:flex flex-row items-center text-xl gap-8">
            <Link
              to="/quran"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              কুরআন
            </Link>
            <Link
              to="/hadith"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              হাদীস
            </Link>
            <Link
              to="/dua"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              দু'আ
            </Link>
            <Link
              to="/sunnah"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              সুন্নাহ
            </Link>
            <Link
              to="/namaz"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              নামায
            </Link>
            <Link
              to="/roja"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              রোযা
            </Link>
            <Link
              to="/blog"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              ব্লগ
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Link to="/donation">
              <button className="text-xl shadow-lg text-[#2e424d] font-semibold hover:bg-[#98dad9] bg-white px-5 py-3 rounded-md transition duration-300 ease-in-out">
                ডোনেশন
              </button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#2e424d] text-white  left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#98dad9] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/dua"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dua
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Quran
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-white transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Stories
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <div className=" lg:hidden">
            <Link to="/">
              <button
                onClick={closeMenu}
                className="bg-base-500 text-[#2e424d] font-medium bg-white px-4 py-2 rounded-md hover:bg-[#98dad9] transition duration-300 ease-in-out"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
