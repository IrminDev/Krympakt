import React from 'react'
import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeartFill} from 'react-icons/ri';

const Card = ({color, title, icon, subtitle}) =>{
    return(
        <div className="flex flex-row justify-start md:w-4/5 items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className='ml-5 flex flex-col flex-1'>
                <h3 className="mt-2 text-white text-lg">{title}</h3>
                <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we continue <br /> to improve </h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center ">
                <Card 
                    color='bg-[#2952e3]'
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize="21" className="text-white" />}
                    subtitle="Security is guaranteed with this application. We use blockchain technology mantaining the privacy."
                />
                <Card 
                    color='bg-[#8945f8]'
                    title="Excellent exchange rates"
                    icon={<BiSearchAlt fontSize="21" className="text-white" />}
                    subtitle="The exchanges that you'll see on this web application we try to be the best one for your transactions"
                />
                <Card 
                    color='bg-[#f84550]'
                    title="Fast and easy transactions"
                    icon={<RiHeartFill fontSize="21" className="text-white" />}
                    subtitle="All of your transaction that you make in this app will be fast and easy to do. Adding this you got a Genshin Impact GIF for each transaction that you make."
                />
            </div>
        </div>
        
    )
}

export default Services
