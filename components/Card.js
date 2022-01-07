export default function Card() {
  return (
    <div className="my-px px-px w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/3">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src="https://images.pexels.com/photos/6006352/pexels-photo-6006352.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="tailwind logo"
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">Youtube</p>

            <div className="bg-green-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Available
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-2xl text-xl">
            Tanmay Bhatt
          </h3>
          <p className="md:text-md text-gray-500 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            similique sequi soluta porro deserunt dicta blanditiis eius fugit ad
            laboriosam, reprehenderit, ullam repudiandae, animi laudantium
            ipsum? Architecto nostrum aliquam minima?
          </p>
          <p className="text-lg font-black text-gray-800">500 ruppeya lega</p>
        </div>
      </div>
    </div>
  );
}
