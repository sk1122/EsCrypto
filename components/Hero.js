import Navbar from "./Navbar"

export default function Hero() {
	return (
		<div className="w-full min-h-screen text-inter">
			<div className="h-152 bg-violet-100">
				<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex h-full bg-lightpurple space-x-4 items-center">
					<div className="flex-1 px-4 md:px-0">
						<h1 className="text-5xl font-extrabold mb-4 w-3/4 leading-snug">
							Pay Creators to Promote your Product in $CRYPTO
						</h1>
						<p className="mb-5 mt-5">
							With EsCrypt you can pay your creators in $CRYPTO
						</p>
						<button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-800 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-100">
							Creators wanting $CRYPTO
						</button>
					</div>
				</div>
			</div>
			<div className="h-1/4 bg-white text-black flex justify-center items-center flex-col space-y-4 py-16">
				<h1 className='text-3xl font-bold'>Not a Sponsor?</h1>
				<form action="">
					<input type="text" className="px-2 py-1 rounded-md border border-gray-400 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-indigo-600" placeholder="Brand" />
				</form>
				<button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-800 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-100">
					Spend some $CRYPTO
				</button>
			</div>
		</div>
	)
}