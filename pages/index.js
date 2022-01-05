import Head from 'next/head'
import { ethers } from 'ethers'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

import deployABI from '../interfaces/deploy.json'
const CONTRACT_ADDRESS = '0xa1a61BA2B7728D7a61396ec6a563AA011052231E'

export default function Home() {  
  const deploy = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const deployContract = new ethers.Contract(CONTRACT_ADDRESS, deployABI.abi, signer);

        let address = await deployContract.deploy();
        console.log("Deployed", address);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <Head>
        <title>EsCrypt</title>
      </Head> 
      <div className='w-full h-full'>
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  )
}
