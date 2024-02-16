"use client"
import { HiMenuAlt3 } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { PiNotebook } from "react-icons/pi";
import { IoMdWallet } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";


const Header = () => {
 
  const [open, setOpen] = useState(true)
  return (
    <section className=" gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-60" : "w-16 items-center" 
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
          onClick={()=>setOpen(!open)}
            size={26}
            className="cursor-pointer"
          />
        </div>

            <div className="mt-4 flex flex-col gap-4 relative items-center">
              <ul className=" pt-5 cursor-pointer  font-medium p-2">

                <li className="flex gap-3.5 mt-4 ml-16  hover:bg-slate-50 rounded-md">
                <FaRegUser
                 size={26} />
                <h2 className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>Dashboard</h2>
                  </li>
                
                  <li className="flex gap-3.5 mt-4 ml-16  hover:bg-slate-50 rounded-md">
                <PiNotebook
                 size={26} />
                <h2 className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>Dashboard</h2>
                  </li>
                
                  <li className="flex gap-3.5 mt-4 ml-16  border-b-1 hover:bg-slate-50 rounded-md">
                <IoMdWallet 
                 size={26}/>
                <h2 className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>Dashboard</h2>
                  </li>
                  
                
                  <li className="flex gap-3.5 mt-32 ml-16  hover:bg-slate-50 rounded-md">
                <IoMdSettings 
                 size={26}/>
                <h2 className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>Dashboard</h2>
                  </li>
                
                  <li className="flex gap-3.5 mt-4 ml-16  hover:bg-slate-50 rounded-md">
                <FaPhoneVolume 
                 size={26}/>
                <h2 className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>Dashboard</h2>
                  </li>
                
                  <li className="flex gap-3.5 mt-4 ml-16  hover:bg-slate-50 rounded-md">
                <IoLogOut 
                 size={26}/>
                <h2 className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}>Dashboard</h2>
                  </li>
                
              </ul>
            </div>

      </div>
      
     
        
      
    </section>
  );
};

export default Header;
