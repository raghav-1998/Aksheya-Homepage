'use client'

import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export default function ArrowUp(){
    const [showIcon, setShowIcon]=useState(false)

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>150){
                setShowIcon(true)
            }
            else{
                setShowIcon(false)
            }
        };

        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }

    },[])
    return(
        <>
        {
            showIcon &&
            (
                <a href="#" className=" visible opacity-100 flex items-center justify-center fixed right-[15px] bottom-[15px] z-996 w-[40px] h-[40px] bg-[#14279b] rounded-[4px] transition ease duration-300">
                    <IoArrowUp className="text-[28px] text-[#fff]"/>
                </a>
            )
        }
        </>
        
        
    )
}