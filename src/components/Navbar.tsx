import Image from "next/image";

export default function Navbar(){
    return (
        <header className="fixed top-0 right-0 left-0 flex items-center py-[22px] z-[997] transition-all duration-500 bg-[#fff]">
            <div className="w-full container mx-auto flex items-center justify-between px-3">
                <div>
                    <a href="/" className="flex items-center ">
                        <Image src="/logo.png" alt="" width={50} height={50} className="pb-[5px] w-auto h-auto"/>
                        <h1 className="text-blue-800 text-3xl font-bold tracking-[1px]">AKESHYA</h1>
                    </a>
                </div>
                <nav className="relative flex flex-wrap items-center justify-between">
                    <ul className="flex items-center">
                        <li><a href="" className="py-3 pl-8 text-lg font-normal active:text-[#14279b] transition duartion-300">Home</a></li>
                        <li><a href="" className="py-3 pl-8 text-lg font-normal active:text-[#14279b] transition duartion-300">About</a></li>
                        <li><a href="" className="py-3 pl-8 text-lg font-normal active:text-[#14279b] transition duartion-300">Services</a></li>
                        <li>
                            <a href="" 
                                className="ml-[30px] py-[8px] px-[25px] text-lg font-normal active:text-[#14279b] rounded-3xl shadow-[inset_0_0_0_2px_#616467] bg-[#14279b] text-[#fff] transition duartion-300"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}