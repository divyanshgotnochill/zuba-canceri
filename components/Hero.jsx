function Hero() {
  return (
    <main className="manrope mt-10 lg:text-center">
      
      <div className="mb-6">
        <h1 className="text-4xl font-bold lg:text-7xl">
          Zuba <span className="text-white">Canceri</span>
        </h1>
        <h2 className="text-[1.2rem] mt-2">
          More you eats, sooner you dies
        </h2>
        </div>

        <button className=" hover:scale-110 transition-all duration-300 hover:bg-[#ffe4e1] hover:cursor-pointer bg-[#FDD6D2] active:bg-[#ceafab] text-black px-4 py-2 rounded-full">
            DIE NOW
        </button>

        <div className="mt-8 lg:justify-center">
                <img src="/ajay.png" className="scale-110 lg:scale-70 lg:m-auto lg:-my-38" alt="Hero"/>
        </div>

    </main>
  );
}

export default Hero;
