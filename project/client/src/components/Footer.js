import { Link } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

const Footer = () => {

   
    return (
        <footer>
            <div className="w-full flex h-8 shadow-md md:px-24 sm:px-12   bg-[#290a1f]">
                <div className=" mr-auto ml-auto my-auto ">

                    <p className=" text-center  text-white font-mono ">&copy; 2023 Naari | All rights reserved.</p>       
                     </div>
                     </div>
        </footer>
    );
};

export default Footer;


