import Head from "next/head";

import Navbar from "../components/Navbar";
import CreatorList from "../components/CreatorList";

export default function Creators() {
  return (
    <div>
      <Head>
        <title>Creators - EsCrypt</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-screen text-inter">
        <div className="h-152 bg-violet-100">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex h-full bg-lightpurple space-x-4 items-center">
            <div className="flex-1 px-4 md:px-0">
              <h1 className="text-5xl font-extrabold mb-4 w-3/4 leading-snug">
                Pay Your Favourite Creators to Promote your Product in $CRYPTO
              </h1>
              <p className="mb-5 mt-5">How this works?</p>
              <ul className="list-disc mb-5">
                <li>You select a creator & send the request</li>
                <li>Creator accepts you</li>
                <li>You decide on terms</li>
                <li>You lock your crypto in a smart contract</li>
                <li>
                  On submitting Proof of Work from Creator, You can release
                  funds
                </li>
              </ul>
              <button
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-800 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-100">
                Find Creators
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 justify-center md:px-20 items-center">
          <CreatorList />
        </div>
      </div>
    </div>
  );
}
