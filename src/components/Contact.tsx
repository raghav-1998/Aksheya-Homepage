import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export default function Contact(){
    return(
        <div className="py-[60px]">
            <div className="container w-full px-[12px] mx-auto lg:max-w-[1140px]">
                <div className="text-center pb-[30px]">
                    <h2 className="relative text-[32px] font-bold text-[#222222] uppercase mb-[8px]
                        before:mr-[15px] before:mb-[10px] before:content-[''] before:w-[50px] before:h-[2px] before:bg-[#14279b] before:inline-block
                        after:ml-[15px] after:mb-[10px] after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#14279b] after:inline-block
                    ">
                        Contact Us
                    </h2>
                </div>
                <div className="grid grid-cols-3">
                    <div className="max-w-full px-[12px]">
                        <div>
                            <h3 className="text-[28px] font-bold mb-[10px] text-[#14279b]">Akeshya</h3>
                            <p className="text-base text-[#888] mb-[16px]">
                                Designers, developers & marketeers capable of 
                                delivering solutions according to your needs,
                            </p>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="text-[#444444]">
                            <div>
                                <SlLocationPin className="text-[32px] float-left text-[#14279b]"/>
                                <p className="pb-[10px] pl-[42px] text-base mb-[16px]">26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
                            </div>
                            <div>
                                <MdOutlineMail className="text-[32px] float-left text-[#14279b]"/>
                                <p className="pb-[10px] pl-[42px] text-base mb-[16px]">info@akeshya.com</p>
                            </div>
                            <div>
                                <BsTelephone className="text-[32px] float-left text-[#14279b]"/>
                                <p className="pb-[10px] pl-[42px] text-base mb-[16px]">+91 94942 40922</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <form method="POST">
                            <div className="mb-[20px]">
                                <input type="text" placeholder="Your Name" className="text-base py-[10px] px-[15px] w-full text-[#212529] bg-[#fff] border-[1px] border-solid border-[#ced4da]" required/>
                            </div>
                            <div className="mb-[20px]">
                                <input type="text" placeholder="Your Email" className="text-base py-[10px] px-[15px] w-full text-[#212529] bg-[#fff] border-[1px] border-solid border-[#ced4da]" required/>
                            </div>
                            <div className="mb-[20px]">
                                <input type="text" placeholder="Subject" className="text-base py-[10px] px-[15px] w-full text-[#212529] bg-[#fff] border-[1px] border-solid border-[#ced4da]" required/>
                            </div>
                            <div className="mb-[20px]">
                                <textarea name="" id="" placeholder="Message" rows={5} className="text-base py-[10px] px-[15px] w-full text-[#212529] bg-[#fff] border-[1px] border-solid border-[#ced4da]" required/>
                            </div>
                            <div>
                                <button type="submit" className=" mt-[6px] text-[#14279b] px-[32px] py-[12px] rounded-[50px] border-[2px] border-solid border-[#14279b] tracking-widest font-bold bg-transparent hover:bg-[#14279b] hover:text-white dark:text-neutral-200 transition duration-200">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}