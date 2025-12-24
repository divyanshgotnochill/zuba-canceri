function NavBar(){
    return(
        <nav className="mb-16">
            <div className="flex justify-between manrope">
                <span className="lg:hover:cursor-pointer lg:text-3xl font-extrabold tracking-[-0.11rem] text-[#C24014] text-2xl">bimal.</span>
                <div className="flex gap-2 items-center">
                    <a href="#">PRODUCTS</a>
                    <button className="hover:bg-[#d54819] hover:cursor-pointer bg-[#c6481e] active:bg-[#af3e19] text-white px-3 py-1 rounded-full">
                        DIE NOW
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;