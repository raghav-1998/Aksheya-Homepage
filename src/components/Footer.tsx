
export default function Footer(){
    return (
        <footer className="bg-[#fff] py-[30px] text-[#222222] text-[14px]">
            <div className="container w-full mx-auto px-[12px] lg:max-w-[1140px]">
                <div className="flex item-center justify-between">
                    <div>
                        &copy; Copyright 
                        <strong> Akeshya</strong>
                        . All Rights Reserved
                    </div>
                    <div>
                        <ul className="flex items-center justify-between mb-[16px]">
                            <li className="px-[16px] list-item">
                                <a href="" className="text-[#14279b]">
                                    Terms and Condition
                                </a>
                            </li>
                            <li className="px-[16px] list-item">
                                <a href="" className="text-[#14279b]">
                                    Refund Policy
                                </a>
                            </li>
                            <li className="px-[16px] list-item">
                                <a href="" className="text-[#14279b]">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}