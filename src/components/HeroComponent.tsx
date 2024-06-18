export default function Hero(){
    return(
        <div className="w-full mt-[70px] py-[60px] h-[70vh] flex items-center">
            <div className="w-full container px-3 mx-auto">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-center px-3 ">
                        <h1 className="mb-[10px] text-5xl font-bold text-[#14729b]">Grow your business with Akeshya</h1>
                        <h2 className="mb-[50px] text-2xl text-[#484848]">We are team of talented website designers, developers & digital marketeers</h2>
                        <div>
                            <button className="shadow-[inset_0_0_0_2px_#616467] text-[#14279b] px-12 py-4 rounded-3xl tracking-widest font-bold bg-transparent hover:bg-[#14279b] hover:text-white dark:text-neutral-200 transition duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="px-3 transition fade-left delay-200">
                        <img src="/hero-img.png" alt="" className="w-full h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}