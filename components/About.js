import Head from "next/head"

import Footer from "./Footer"

export default function About() {
	return (
		<div className="w-full min-h-screen text-inter">
			<Head>
				<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
			</Head>
			<div className="h-152 bg-violet-100 flex justify-center items-center">
				<div className="	w-1/2 mx-auto px-2 sm:px-4 lg:px-8 flex h-full bg-lightpurple space-x-4 items-center">
					<div className="flex-1 flex justify-center items-center flex-col gap-4 px-4 md:px-0">
						<img src="https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg" alt="Profile Picture" className="rounded-full w-48 h-48" />
						<h3 className="font-semibold text-2xl">Satyam Kulkarni</h3>
						<p className="font-light text-sm w-72 text-center">fullstack @algouniversity building @bayzecorp, learning web3</p>
						<div className="social-media flex justify-center items-center">

						</div>
					</div>
				</div>
				<div className="w-1/2 mx-auto px-2 sm:px-4 lg:px-8 flex h-full bg-lightpurple space-x-4 items-center">
					<div className="flex-1 px-4 md:px-0">
						<p className="mb-5 mt-5 w-3/4">
							Hey👋, I can build products in Django, Node.js, React/Next.js, learning web3 and building some cool projects like this one! and <a href="">this - Light</a>, Would love to connect with yall if you want to!!
						</p>
						<div className="flex justify-start space-x-4 text-xl">
							<a href="https://twitter.com/sk1122_" target='_blank'>
								<i className="fab fa-twitter" style={{ color: '#1DA1F2' }}></i>
							</a>
							<a href="https://github.com/sk1122" target='_blank'>
								<i className="fab fa-github"></i>
							</a>
							<a href="https://linkedin.com/in/satyam-kulkarni" target='_blank'>
								<i className="fab fa-linkedin" style={{ color: '#2867B2' }}></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	)
}