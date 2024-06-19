import Image from "next/image";

export default function Clients(){
    return(
        <div className="bg-[#f3f9fd] py-[10px] text-center">
            <div className="w-full container mx-auto px-[12px] lg:max-w-[1140px]">
                <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-6">
                    <div className="flex justify-center items-center px-[12px]">
                        <Image src="/client-1.png" alt="" width={80} height={80}  className="py-[10px] grayscale-[100] w-auto h-auto"/>
                    </div>
                    <div className="flex justify-center items-center px-[12px]">
                    <Image src="/client-2.png" alt="" width={80} height={80} className="py-[10px] grayscale-[100] w-auto h-auto"/>
                    </div>
                    <div className="flex justify-center items-center px-[12px]">
                    <Image src="/client-3.png" alt="" width={80} height={80} className="py-[10px] grayscale-[100] w-auto h-auto"/>
                    </div>
                    <div className="flex justify-center items-center px-[12px]">
                    <Image src="/client-4.png" alt="" width={80} height={80} className="py-[10px] grayscale-[100] w-auto h-auto"/>
                    </div>
                    <div className="flex justify-center items-center px-[12px]">
                    <Image src="/client-5.png" alt="" width={80} height={80} className="py-[10px] grayscale-[100]"/>
                    </div>
                    <div className="flex justify-center items-center px-[12px]">
                    <Image src="/client-6.png" alt="" width={80} height={80} className="py-[10px] grayscale-[100]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}