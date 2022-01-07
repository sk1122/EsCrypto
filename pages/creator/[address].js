import Head from "next/head";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Creator() {
  const [isClicked, setIsClicked] = useState(false);

  const clicked = (e) => {
    e.preventDefault();

    setIsClicked(!isClicked);
  };

  return (
    <>
      <Head>
        <title>EsCrypt</title>
      </Head>
      <div className="w-full h-full">
        <Navbar />
        <div className="relative z-0 w-full min-h-screen text-inter flex justify-center items-start flex-col sm:flex-row space-x-5 mt-5">
          <span className="absolute bg-violet-300 h-48 w-full"></span>
          <div className="z-50 h-full bg-white m-6 shadow-md w-full sm:w-2/4 rounded-lg">
            <div className="p-6 h-40 border-b-2 border-gray-500 flex justify-start items-center space-x-5 rounded-lg">
              <img
                src="https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg"
                alt="Creator Image"
                className="rounded-full h-14 w-14 ml-10"
              />
              <h1 className="text-3xl font-bold">Creator Name</h1>
            </div>
            <div className="z-50 bg-white h-full p-6 flex justify-start items-start flex-col space-x-5 space-y-5">
              <h2 className="text-lg font-bold ml-10 mt-5">Recent Works🚀</h2>

              <div className="w-full px-5 rounded-lg space-y-4">
                <div className="w-11/12 h-36 bg-violet-200/40 rounded-lg border border-black flex justify-start items-center space-x-5">
                  <img
                    src="https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg"
                    alt="Creator Image"
                    className="rounded-full h-14 w-14 ml-10"
                  />
                  <div className="flex-col">
                    <h1 className="text-xl font-bold">Sponsor Name</h1>
                    <p>Proof Of Work</p>
                  </div>
                </div>
                <div className="w-11/12 h-36 bg-violet-200/40 rounded-lg border border-black flex justify-start items-center space-x-5">
                  <img
                    src="https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg"
                    alt="Creator Image"
                    className="rounded-full h-14 w-14 ml-10"
                  />
                  <div className="flex-col">
                    <h1 className="text-xl font-bold">Sponsor Name</h1>
                    <p>Proof Of Work</p>
                  </div>
                </div>
                <div className="w-11/12 h-36 bg-violet-200/40 rounded-lg border border-black flex justify-start items-center space-x-5">
                  <img
                    src="https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg"
                    alt="Creator Image"
                    className="rounded-full h-14 w-14 ml-10"
                  />
                  <div className="flex-col">
                    <h1 className="text-xl font-bold">Sponsor Name</h1>
                    <p>Proof Of Work</p>
                  </div>
                </div>
                <div className="w-11/12 h-36 bg-violet-200/40 rounded-lg border border-black flex justify-start items-center space-x-5">
                  <img
                    src="https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg"
                    alt="Creator Image"
                    className="rounded-full h-14 w-14 ml-10"
                  />
                  <div className="flex-col">
                    <h1 className="text-xl font-bold">Sponsor Name</h1>
                    <p>Proof Of Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-50 h-full pb-6 w-full sm:w-1/4 bg-white shadow-md m-6 rounded-md">
            <h2 className="text-lg font-bold ml-10 mt-10">Make a Request🤝</h2>

            <form
              action=""
              className="flex justify-center items-start flex-col">
              <input
                type="number"
                className="w-3/4 ml-10 mt-5 p-2 rounded-md border border-gray-400 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-indigo-600"
                placeholder="Minutes you want on their video?"
              />
              <input
                type="text"
                className="w-3/4 ml-10 mt-5 p-2 rounded-md border border-gray-400 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-indigo-600"
                placeholder="Brand Name"
              />
              <textarea
                rows="4"
                columns="32"
                className="w-3/4 ml-10 mt-5 p-2 rounded-md border border-gray-400 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-indigo-600"
                placeholder="Minutes you want on their video?"></textarea>
              {!isClicked && (
                <button
                  onClick={(e) => clicked(e)}
                  className="w-3/4 h-10 ml-10 mt-5 bg-violet-400 rounded-md border border-gray-400 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-indigo-600 text-white">
                  Request
                </button>
              )}
              {isClicked && (
                <button
                  onClick={(e) => clicked(e)}
                  className="w-3/4 h-10 ml-10 mt-5 bg-violet-400 rounded-md border border-gray-400 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-indigo-600 text-white flex justify-center items-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
