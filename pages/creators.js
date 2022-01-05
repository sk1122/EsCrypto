import Head from "next/head"

import Navbar from "../components/Navbar"
import CreatorList from "../components/CreatorList"

export default function Creators() {
	return (
		<div>
			<Head>
				<title>Creators - EsCrypt</title>
			</Head>
			<Navbar />
			<CreatorList />
		</div>
	)
}