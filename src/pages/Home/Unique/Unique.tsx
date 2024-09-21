import FacebookPlayer from "react-player/facebook";

const Unique = () => {
  return (
    <div className="mx-4 md:container md:mx-auto">
      <div className="border-l-4 border-l-lime-400 px-4 py-4 bg-white rounded-lg w-full sm:w-3/4 md:w-1/2 mb-4">
          <h2 className="text-xs sm:text-sm md:text-2xl font-bold text-[#020C29] mb-4">
          Discover the World with Nadir On The Go
          </h2>
        </div>
  <div className="flex flex-col justify-center items-center md:flex-row gap-2">
    <div className="px-8 my-6 mx-2">
      <FacebookPlayer url={"https://www.facebook.com/nadironthegobangla/videos/998965051337631"} />
    </div>
    <div className="flex flex-col justify-center bg-gradient p-14 rounded-xl h-full w-full px-8 my-6">
      <h2 className="text-xl text-[#020C29] font-bold mb-4">Nadir on the Go</h2>
      <p className="text-base mb-2">
        Join Nadir on his exciting travels around the world. Discover new places, cultures, and adventures through his lens.
      </p>
      <p className="text-base">
        From the bustling streets of Tokyo to the serene beaches of Bali, experience the beauty and diversity of our planet.
      </p>
    </div>
  </div>
</div>

);
};

export default Unique;