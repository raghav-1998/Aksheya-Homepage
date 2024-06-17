export default function Navbar(){
    return (
        <header className="fixed-top flex align-items center py-6 ">
            <div className="w-full mx-auto flex align-items-center justify-between px-3">
                <div className="flex flex-col">
                    <h1 className="text-blue-800 text-3xl font-bold">
                        <a href="/">
                            <img src="/logo.png" alt="" className="h-screen max-w-full max-h-20 pb-1.25" />
                            AKSHEYA
                        </a>
                    </h1>
                </div>
                <nav className="relative flex flex-wrap align-items center justify-between">
                    <ul className="flex flex-row">
                        <li><a href="" className="py-3 pl-8 text-lg font-normal">Home</a></li>
                        <li><a href="" className="py-3 pl-8 text-lg font-normal">About</a></li>
                        <li><a href="" className="py-3 pl-8 text-lg font-normal">Services</a></li>
                        <li><a href="" className="py-3 pl-8 text-lg font-normal">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}