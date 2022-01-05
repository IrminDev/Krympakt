import React from 'react';
import Logo from '../../images/logo.png';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {RiCodeSSlashFill} from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer ">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={Logo} alt="logo" className="w-40" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <a href="https://github.com/IrminDev" className="flex item-center justify-center text-white text-base text-center mx-2 cursor-pointer "><BsGithub className="mr-2 mt-1" /> GitHub</a>
                    <a href="https://www.facebook.com/irmin.stoff.9" className="flex item-center justify-center text-white text-base text-center mx-2 cursor-pointer "><BsFacebook className="mr-2 mt-1" /> Facebook</a>
                    <a href="https://www.instagram.com/irminjimenez/" className="flex item-center justify-center text-white text-base text-center mx-2 cursor-pointer "><BsInstagram className="mr-2 mt-1" /> Instagram</a>
                    <a href="#" className="flex item-center justify-between text-white text-base text-center mx-2 cursor-pointer "><RiCodeSSlashFill className="mr-2 mt-1" /> Portfolio</a>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Developed and deployed by</p>
                <p className="text-white text-sm text-center">hernandezjimenezirmin@gmail.com</p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-sm text-center">@Krympakt 2022</p>
                <p className="text-white text-sm text-center">All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
