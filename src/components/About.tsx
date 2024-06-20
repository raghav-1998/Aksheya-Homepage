import { RiCheckDoubleLine } from "react-icons/ri";

export default function About(){
    return(
        <div className="py-[60px]">
            <div className="container w-full mx-auto px-[12px] lg:max-w-[1140px]">
                <div className="pb-[30px] text-center">
                    <h1 
                        className="relative text-3xl font-bold uppercase text-[#222222] mb-[8px] 
                        before:mb-[10px] before:content-[''] before:mr-[15px] before:w-[50px] before:h-[2px] before:bg-[#14279b] 
                        before:inline-block after:mb-[10px] after:ml-[15px] after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#14279b] 
                        after:inline-block"
                    >
                        About Us
                    </h1>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-[12px]">
                        <p className="mb-[16px]">
                            We are Akeshya, a firm that specializes in web design and marketing. 
                            We help transform ideas into reality with a team of passionate 
                            graphic designers, web developers, and seasoned marketing advisors.
                        </p>
                        <ul className="mb-[16px]">
                            <li className="relative list-item pl-[28px]">
                                <RiCheckDoubleLine className="absolute left-0 top-[2px] text-[20px] text-[#14279b]"/>
                                We started with a simple idea: do what is best for the client.
                            </li>
                            <li className="relative list-item pl-[28px] mt-[10px]">
                                <RiCheckDoubleLine className="absolute left-0 top-[2px] text-[20px] text-[#14279b]"/>
                                Our methodical and individual approach to each project delivers the 
                                finest possible results for your media.
                            </li>
                            <li className="relative list-item pl-[28px] mt-[10px]">
                                <RiCheckDoubleLine className="absolute left-0 top-[2px] text-[20px] text-[#14279b]"/>
                                Our day-to-day work is to solve your problems utilising the most up-
                                to-date, practical adaptive technology, and we have a lot of fun doing it.
                            </li>
                        </ul>
                    </div>
                    <div className="px-[12px]">
                        <p className="mb-[16px]">
                            We're professional, but we're also friendly, and we'll always pay attention 
                            to your concerns. We expect to work with innovative people that have an 
                            open mind and are dedicated to making every idea a reality. We want to 
                            hear from you if you're interested in SEO, have Web Development ideas, 
                            or require a graphic designer who can match your goals.
                        </p>
                        <button className=" mt-[6px] text-[#14279b] px-[32px] py-[12px] rounded-[50px] border-[2px] border-solid border-[#14279b] tracking-widest font-bold bg-transparent hover:bg-[#14279b] hover:text-white dark:text-neutral-200 transition duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}