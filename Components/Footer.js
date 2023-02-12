import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { AiFillPhone, AiOutlineGlobal } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  console.log(currentYear)

  return (
    <section>
      <div className="flex justify-between items-center px-12">
        <h1 className="text-3xl font-bold">
          Typhoon<span className="text-red-500">.</span>
        </h1>
        <div className="flex gap-1">
          <div
            className=" p-2 hover:bg-black rounded-full hover:text-white duration-700 cursor-pointer"
            title="Facebook"
          >
            <FaFacebook className="text-3xl " />
          </div>
          <div
            className=" p-2 hover:bg-black rounded-full hover:text-white duration-700 cursor-pointer"
            title="Facebook"
          >
            <FaInstagram className="text-3xl" />
          </div>
          <div
            className=" p-2 hover:bg-black rounded-full hover:text-white duration-700 cursor-pointer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </div>
          <div
            className=" p-2 hover:bg-black rounded-full hover:text-white duration-700 cursor-pointer"
            title="Dribbble"
          >
            <FaDribbble className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-5 gap-4 px-12">
        {/* address section */}
        <div>
          <div className="flex">
            <FaMapMarkerAlt className="mr-2" />
            <div className="text-xs">
              <p>ROAD 3,GULSHAN-1, CAPITA SOUTH AVENUE TOWER,4TH FLR.</p>
              <p>DHAKA 1212 BANGLADESH.</p>
            </div>
          </div>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <AiFillPhone className="mr-2" />
            +8801111122200
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center ">
            <GrMail className="mr-2" />
            typhoon@gamil.com
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <AiOutlineGlobal className="mr-2" />
            typhoon.com.bd
          </p>
        </div>
        <div>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Contact Us
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Designers
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Terms & Conditions
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Returns & Exchanges
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            FAQs
          </p>
        </div>
        <div>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Forum Support
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            My Account
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Orders Tracking
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            Size Guide
          </p>
          <p className=" hover:translate-x-4 duration-500 cursor-pointer mt-1 flex items-center">
            <FiChevronsRight className="mr-1" />
            ShortCode
          </p>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <img
            className="w-40"
            src="https://i.ibb.co/VV2zy6v/5a902db97f96951c82922874.png"
            alt=""
          />
          <img
            className="w-40"
            src="https://i.ibb.co/7WKT5bS/67015-play-google-app-store-android-free-transparent-image-hd.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text-center py-4 bg-gray-800 text-white mt-4">
        <h1>Copyright @{currentYear} || November Typhoon </h1>
      </div>
    </section>
  );
};

export default Footer;
