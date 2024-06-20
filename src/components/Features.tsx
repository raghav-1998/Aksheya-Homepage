import { RiAdvertisementFill, RiBarChartGroupedLine, RiCalendarEventLine, RiCodeBoxLine, RiContactsBookLine, RiCreativeCommonsByLine, RiDiscLine, RiMapPinLine, RiPlayCircleLine, RiSearchEyeLine, RiTodoLine, RiWindowLine } from "react-icons/ri"

export default function Features(){
    return(
        <div className="py-[60px] overflow-hidden">
            <div className="container w-full mx-auto px-[12px] lg:max-w-[1140px]">
                <div className="text-center pb-[30px]">
                    <h2 
                        className="relative text-3xl font-bold uppercase text-[#222222] mb-[8px] 
                        before:mb-[10px] before:content-[''] before:mr-[15px] before:w-[50px] before:h-[2px] before:bg-[#14279b] 
                        before:inline-block after:mb-[10px] after:ml-[15px] after:content-[''] after:w-[50px] after:h-[2px] after:bg-[#14279b] 
                        after:inline-block"
                    >
                        Our Core Features
                    </h2>
                    <p className="mt-[15px]">
                        Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. 
                        Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.
                    </p>
                </div>
                <div className="grid grid-cols-4">
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiWindowLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Web Design</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiCodeBoxLine className="text-[#ffbb2c] text-[32px] pr-[10px]" />
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Development</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiCreativeCommonsByLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Branding</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiPlayCircleLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Media Buying</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiSearchEyeLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Search Engine</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiTodoLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Brand Strategy</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiMapPinLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Local Search Marketing</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiBarChartGroupedLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Lead Tracking & Management</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiContactsBookLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Contact Management</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiDiscLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Media Management</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiCalendarEventLine className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Social Scheduling</a></h3>
                        </div>
                    </div>
                    <div className="max-w-full px-[12px]">
                        <div className="flex items-center p-[20px] bg-[#f6f6f6]">
                            <RiAdvertisementFill className="text-[#ffbb2c] text-[32px] pr-[10px]"/>
                            <h3 className="font-bold text-[16px]"><a href="" className="text-[#222222]">Ad Retargeting</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}